const express = require('express');
const cors = require('cors');
const connection = require('./db');
const app = express();


app.use(cors());
app.use(express.json());