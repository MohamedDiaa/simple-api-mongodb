import express from 'express';

// create a new server instance
const app = express();

// defining the port
const PORT = 3333;

// define the routes

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


