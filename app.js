const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;

app.use(cookieParser());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mernauth', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('successfully connected to database');
});

const userRouter = require('./routes/User');
app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log('express server started');
});