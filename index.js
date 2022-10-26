const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
var cors = require('cors');
app.use(cors());

const courses = require('./courses.json');

const courseDetails = require('./course-details.json')

app.get('/', (req, res) => {
  res.send('Monster Tech Courses Is Running')
})

app.get('/course', (req, res) => {
    res.send(courses)
})

app.get("/courses", (req, res) => {
  res.send(courseDetails)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id
    if (id === "08") {
        res.send(courseDetails)
    } else {
        const selectedCourse = courseDetails.filter(n => n.catagory_id === id)
        res.send(selectedCourse)  
    }
    
})

app.get('/courses/:id', (req, res) => {
  const id = req.params.id
  const course = courseDetails.find(n => n._id === id)
  res.send(course)
  
})

app.listen(port, () => {
  console.log(`Monster Tech courses is listening on port ${port}`)
})