const express = require('express')

const app = express();

const countries = require('./countries.json')


app.get('/countries', (req,res) => {
    res.json(countries);
});

function getCountry (countryCode){
const country = countries.find(country => country.alpha3Code === countryCode)
return country
} ;

app.get('/countries/:countryCode', (req,res) => {
    const country = {...getCountry(req.params.countryCode)}
     country.borders = country.borders.map((border) => {
         console.log(country)
        return getCountry(border)
     })
})


app.listen(5555, () => {
    console.log('Server listening on port 5555')
})