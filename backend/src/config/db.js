const mongoose = require("mongoose")

const URI = "mongodb://127.0.0.1:27017/fintrack-api"

const connectDB = async () => {
    try {
        const connector = await mongoose.connect(URI)
        console.log(`MongoDB Connected: ${connector.connection.host}`.red.underline)
    } catch (error) {
        process.exit(1)
    }
}
module.exports = connectDB