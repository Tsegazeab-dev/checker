const express = require('express')
const products = require('./data/products.json')
const Port = process.env.PORT || 4000
const app = express();

//  A middleware built to parse the incoming requests
app.use(express.urlencoded({ extended: true }));
// A midleware parse the request in json format
app.use(express.json());



app.get('/', (req, res)=>{
    res.end(JSON.stringify(products))
})

app.listen(Port, console.log(`listening to http://localhost:${Port}`))