const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000;

const app = express()
app.use(cors())

const allData = require("./data.json")

app.get('/allData', (req, res) => {
  res.send(allData)
})

app.get('/allData/:id', (req, res) => {
  const id = req.params.id;
  const item = allData?.find(n => n.id ==id)
    res.send(item)
  })


app.listen(5000, () => {
  console.log('server running 5000')
})