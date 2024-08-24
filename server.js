const express = require('express');
const employeeRouter = require('./employeeRouter');
require('dotenv').config();

const db = require('./db.js');
const app = express();

const PORT =  4001;

app.use(express.json());
app.use('/employee', employeeRouter);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
