const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Monster Tech Courses Is Running')
})

app.listen(port, () => {
  console.log(`Monster Tech courses is listening on port ${port}`)
})