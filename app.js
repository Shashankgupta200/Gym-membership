//  Express is a package for node js
//  It will handle all the rooting
const { log } = require("console");
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const port = 80;


app.use('/static', express.static('static'));       //This will serve the static file to our website. Just write localhost/static/index.js in browser
app.use(express.urlencoded());

app.set('view engine', 'pug');      //  Set the template engine as pug
app.set('views', path.join(__dirname, 'views'))     //  Set the views directory    

//  Endpoints
app.get('/', (req, res) => {
    const con = "this the the first pug code made by me so far"
    const params = { 'title': 'Pug is the best package available in the market', 'content': con }
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res) => {
    console.log(req.body);      //This is how the backend takes the data from the html document to perform the required action.
    name = req.body.name;
    age = req.body.age;
    address = req.body.address;
    about = req.body.about;
    let outputtofile = `The name of the client is ${name} whose age is ${age}, and address is ${address}. To know more about client - ${about}`;
    fs.writeFileSync('output.txt', outputtofile);
    const params = { 'message': 'Your form has been submitted successfully!!' };
    res.status(200).render('index.pug', params);
});

app.listen(port, () => {
    console.log(`the application started successfully!! ${port}`);
});

//  Write localhost in postman to get the results.
//  We can write localhost/about or /this and select the desired get or post option to get started.

