const express = require('express');
const app = express();
const port = 8080;

const homeRouter = require('./routes/home');
const servicesRouter = require('./routes/services');
const contactUsRouter = require('./routes/contactUs');
const thankYouRouter = require('./routes/thankYou');

app.use(express.static('public'));

app.use('/', homeRouter);
app.use('/services', servicesRouter);
app.use('/contactUs', contactUsRouter);
app.use('/thankYou', thankYouRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
