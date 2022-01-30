const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Hello, World!</h1>")
})

app.get('/contact', (req, res) => {
    res.send("<h1>Contact me at: lutfulkbr@yahoo.com</h1>")
})

app.get('/about', (req, res) => {
    res.send("<h1>Hi there,</br> My name is Lutful Kabir.</h1><p>I am a Software Engineer with a background in physics. Experienced in Ruby on Rails and JavaScript based programming.</br> Known for a strong work ethic and the ability to learn new technologies quickly.</br> Compelling multilingual communicator with a strong aptitude for leveraging analytical skills to test software, identify bugs, and resolve issues.</br> Well organized with immaculate attention to detail and time management skills.</p>")
})

app.get('/hobby', (req, res) => {
    res.send("<h1>My hobbies are:</h1><ul><li>Sports</li><li>Code</li><li>Beer</li></ul>")
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})