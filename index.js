require('dotenv').config();
const cors = require('cors');

const express = require('express');
const port = process.env.PORT || 4000

const path = require('path');

console.log('web whatever');
console.log(__dirname);
console.log(process.env.LADY);
console.log(process.env.FOO)
console.log(process.env.ALWAYS)
console.log(process.env.PORT)

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// api
app.use('/api/*', (_, res) => {
    res.json({ data: 'D000000d'})
})

app.use('*', (_, res) => {
    //send back index.html
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
})

app.listen(port, () => {
    console.log(`listening on ${port}`);
})