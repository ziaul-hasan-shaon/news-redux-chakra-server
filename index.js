const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.get('/', (req, res) => {
    res.send('news portal is running')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/news', (req, res) => {
    res.send(news)
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id
    // console.log(id)
    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})

app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id)
    if (id === 0) {
        res.send(news)
    }
    else {
        const CategoryNews = news.filter(n => parseInt(n.category_id) === id)
        res.send(CategoryNews);
    }
})

app.listen(port, () => {
    console.log(`news server is running on port : ${port}`)
})