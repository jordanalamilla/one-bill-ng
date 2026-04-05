import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello Jord!')
})

// Connect to the database and start the server.
try {
  await mongoose.connect(process.env.DB_URI).then(() => {
    console.log('Database connected ...');

    app.listen(port, () => {
      console.log(`The server is listening on port ${port}`)
    })
  })
} catch(err) {
  console.log(err);
}