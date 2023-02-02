const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');

app.use(express.json());
app.use(express.urlencoded());
const port = process.env.PORT || 5000