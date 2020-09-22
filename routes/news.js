const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')
const apiKey ='12be55ec52ff405d82258e4dbfe4fba4'


newsRouter.get('/', async(req, res)=> {
    console.log("news api")
    try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        const newsApi = await axios.get(url)
        res.send(newsApi.data)
    } catch (e) {
        console.error(e.message);
        res.send(e)
    }
})


newsRouter.get('/search', async(req, res)=> {
    try {
        const { query, from, to, sortBy } = req
        const url = `https://newsapi.org/v2/everything`
        let payload = {
            q: query,
            apiKey: apiKey
        }
        if (from)
            payload.from = from
        if (to)
            payload.to = to
        if (sortBy)
            payload.sortBy = sortBy
        const newsApi = await axios.get(url, payload)
        res.send(newsApi.data)
    } catch (e) {
        console.error(e.message)
        res.send(e)
    }
})

module.exports = newsRouter