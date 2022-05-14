import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Data from './data.mjs'
import Videos from './dbModel.mjs'
const app = express()
const port = 3000;

//middleweras
app.use(cors())
app.use(express.json())
//database connection
const connection =
    'mongodb+srv://akshaysutar8860:eTYsI1FvuSuMxTTz@cluster0.n8qtr.mongodb.net/Mernstack?retryWrites=true&w=majority';
mongoose.connect(connection, { useNewUrlParser: true }).then((res) => {
    console.log("connection succesfull..to mongodb")
}).catch((err) => {
    console.log("error ocurred.." + err)

})

//*********** */
//routes in express
app.get('/', (req, res) => {
    res.send('hello akshay all is clear......')
})



app.post('/sendData', (req, res) => {
    const Idata = req.body;
    Videos.create(Idata, (err, data) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(data)
        }
    })

})




app.get('/dataApi', (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.send('internal erver error try again later..')
        }
        else {
            res.status(200).send(data)

        }
    })

})
app.listen(process.env.PORT || port, () => {
    console.log('succesfully listening app on' + port)
})

