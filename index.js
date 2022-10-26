const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
var cors = require('cors');
app.use(cors());

const courses = require('./courses.json');

app.get('/', (req, res) => {
  res.send('Monster Tech Courses Is Running')
})

app.get('/course', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
  console.log(`Monster Tech courses is listening on port ${port}`)
})