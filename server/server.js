let express = require('express');
let app = express();
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact-form', (req, res) => {
    console.log(req.body.email)
    console.log(req.body.name)
    fs.appendFileSync('info.txt', `Name: ${req.body.name} Email: ${req.body.email}\n`)
    res.send(`Thank you for submitting your Contact Form ${req.body.name}.`)
})

//Middleware for logging requests
// app.use((req, res, next) => {
//     // console.log(req.originalUrl);
//     fs.appendFileSync('info.txt', `${req.url}\n`)
//     next();
// })

app.use(express.static(path.join(__dirname, '../public')));



// app.get('/order/:name', (req, res) => {
//     let name = req.params.name;
//     let email = req.query.email;
//     res.send(`Your name is ${name}, and your email is ${email}`);
// });



//Manual
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// app.get('/css/style.css', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/css/style.css'));
// });


app.listen(3000);







//Most Basic
// let express = require('express');
// let app = express();


// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });


// app.listen(3000);