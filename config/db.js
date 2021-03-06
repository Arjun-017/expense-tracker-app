const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.underline.bold)
    } catch(err) {
        console.log(`Error: ${err.message}`.red)
        process.exit(1)
    }
}

module.exports = connectDB