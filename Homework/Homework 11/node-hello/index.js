const express = require('express')
const bodyParser = require('body-parser');
const app = express()

const blocksModule = require('./routes/blocks');

const parseUrlencoded = bodyParser.urlencoded({ extended: false });



app.use((req, res, next) => {
    console.log(req.query);
    next();
});
app.use(parseUrlencoded);

app.use(express.static('public'));

app.use('/blocks', blocksModule)

app.listen(3000, () => {
    console.log('Server started on port 3000')
});