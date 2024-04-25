import express from 'express'
import CompanyRoute from './routes/CompanyRoute.js'
import SectorRoute from './routes/SectorRoute.js'

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.send( {
        teste: 'testedoteste'
    } )
})

app.use('/company', CompanyRoute)
app.use('/sector', SectorRoute)

app.listen(3000, () => {
    console.log("Server is runing on port 3000")
})


