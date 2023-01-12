const express = require('express')
const cors=require("cors");

const ConnectToMongo=require('./db')

const app = express()
const port = 5000



const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
ConnectToMongo()

// middleware

app.use(express.json())

app.use('/api/addtoLiked',require('./Routes/route1'))
app.use('/api/getLikedMovies',require('./Routes/route2'))

app.listen(port, () => {
  console.log(`Netflix app listening on port ${port}`)
})