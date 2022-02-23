const express = require('express');
const app = express();
const whack = require('./routes/whack.js')
app.get('/', function(req, res){res.send(whack())})
app.use(express.static(__dirname + '/public'));
app.use('/public/images', express.static(__dirname + '/Whack-a-mole/public/images'))

const PORT = 5134


const init = async () => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
}

init();