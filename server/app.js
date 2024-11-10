const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const express = require('express')
const cors = require('cors')
const db = require('./database/db')
const fs = require('fs')
const path = require('path')
const categoriesRoute = require('./routes/categoriesRoute')
const cakesRoute = require('./routes/cakesRoutes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/categories', express.static(path.join(__dirname, 'categories')));
app.use('/cakes', express.static(path.join(__dirname, 'cakes')));

// Endpoint to run SQL file to create tables
app.get('/setup', async (req, res) => {
    try {
        const createTableQuery = fs.readFileSync(path.join(__dirname, 'queries', 'createTables.sql'), 'utf8');
        await db.query(createTableQuery);
        const timeResult = await db.query('SELECT NOW() AS current_time');
        res.send(`Tables created successfully. Current time from Postgres: ${timeResult.rows[0].current_time}`);
    } catch (error) {
        res.status(400).json({ message: error?.message });
    }
});


// Routes
app.use('/api/categories', categoriesRoute)
app.use('/api/cakes', cakesRoute)

//listen
const port = process.env.PORT
db.connect().then(() => {
    app.listen(port, () => {
        console.log(`Successfully connected to database and server is running on port ${port}`)
    });
}).catch(error => {
    console.log(`Error ${error}`)
})