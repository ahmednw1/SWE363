const express = require('express');
const app = express();
const path = require('path'); 
const port = 8080; 

app.use(express.static('../public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname,"../home.html"));
});

app.get('/servises', (req, res) => {
    res.sendFile(path.resolve(__dirname,"../servises.html"));});

app.get('/contactUs', (req, res) => {
    res.sendFile(path.resolve(__dirname,"../contactUs.html"));});
    
app.get('/thankYou', (req, res) => {
    res.sendFile(path.resolve(__dirname,"../thankYou.html"));});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })