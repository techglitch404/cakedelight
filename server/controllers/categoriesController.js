const multer = require("multer");
const path = require("path");
const fs = require("fs"); // Add fs module to handle file system
const db = require("../database/db");

// Set up Multer storage and file checking
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../categories/");
    
    // Check if directory exists, if not, create it
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Check file type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error("Error: Images Only!"));
  }
}

// Init Multer upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 8000000 }, // Limit file size to 1MB
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
}).single("image");

// Register Categories function
const regsiterCategories = async (req, res) => {
  try {
    const { category_name } = req.body;
    const image = req.file ? `categories/${req.file.filename}` : null;

    // Validation
    if (!category_name) throw Error("Category name is required");

    const insertCategories = `INSERT INTO "categories" (category_name, image) VALUES($1, $2) RETURNING *`;
    const insertCategoriesOutput = await db.query(insertCategories, [category_name, image]);
    const categories = insertCategoriesOutput?.rows?.[0];
    
    res.status(200).json({ code: 200, data: categories, message: "Category is inserted successfully" });
  } catch (error) {
    res.status(400).json({ code: 400, message: error?.message });
  }
};

// Fetch categories
const fetchCategories = async (req, res) => {
    try {
        const fetchCategoriesQuery = `SELECT * FROM "categories"`;
        const categoriesOutput = await db.query(fetchCategoriesQuery);
        const fetchCategories = categoriesOutput?.rows;
        res.status(200).json({code:200, data:fetchCategories})
    } catch (error) {
        res.status(400).json({code:400, message:error?.message})
    }
}


module.exports = { regsiterCategories, upload, fetchCategories };
