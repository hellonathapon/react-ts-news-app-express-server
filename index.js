const express = require('express');
const app = express()
const fetch = require('node-fetch');
require('dotenv').config();
const path = require('path');

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

// serve static build asset on prod
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// Error hander
app.use(function (err, req, res, next) {
    console.log(err)
    return res.send(500).send(err)
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`))