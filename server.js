const express = require('express');
const { reset } = require('nodemon');
const port = process.env.PORT || 5000
const app = express()
const fetch = require('node-fetch');
require('dotenv').config();

// CORS middleware
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Accept, Origin, Access-Control-Allow-Headers, X-Requested-With, content-type, Access-Control-Request-Headers');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const fetchNews = async (req, res, next) => {
    const url = new URL(process.env.REACT_APP_BASE_URL);
    try {
        const res = await fetch(url);
        const data = await res.json();
        req.data = data
        next()
    }catch (err)  {
        next(err)
    }
}

app.get('/news', fetchNews, (req, res) => {
    if (req.data) {
        res.status(200).send(req.data);
        return
    }else {
        res.status(404).send();
    }
})

// Error hander
app.use(function (err, req, res, next) {
    console.log(err)
    return reset.send(500).send(err)
})

app.listen(port, () => console.log(`Server is running on port ${port}`))