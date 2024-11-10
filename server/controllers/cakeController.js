const multer = require("multer");
const path = require("path");
const fs = require("fs");
const db = require("../database/db");

// Set up Multer storage and file checking
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "../cakes/");

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

const registerCakes = async (req, res) => {
  try {
    const { name, price, discount_price, description, categories } = req?.body;
    // console.log(req?.body)
    const image = req.file ? `cakes/${req.file.filename}` : null;
    // Validation
    if (!name) throw Error("Name is required");
    if (!price) throw Error("Price is required");
    if (!discount_price) throw Error("Discount Price is required");
    if (!description) throw Error("Description is required");
    if (!categories) throw Error("Categories is required");

    const insertCakesQuery = `INSERT INTO "cakes" (name, price, discount_price, description, categories, image) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`;
    const cakesOutput = await db.query(insertCakesQuery, [name, price, discount_price, description, categories, image]);
    const cakes = cakesOutput?.rows?.[0]
    res.status(200).json({code:200, data:cakes, message:"Cake is inserted to the database"})
  } catch (error) {
    res.status(400).json({code:400, message:error?.message})
  }
};

// Fetch cakes
const fetchCakes = async (req, res) => {
    try {
        const fetchCakesQuery = `SELECT * FROM "cakes"`;
        const CakesOutput = await db.query(fetchCakesQuery);
        const fetchCakes = CakesOutput?.rows;
        res.status(200).json({code:200, data:fetchCakes})
    } catch (error) {
        res.status(400).json({code:400, message:error?.message})
    }
}

module.exports = { registerCakes, upload, fetchCakes };
