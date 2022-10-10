const express = require("express")
const dotenv = require("dotenv").config()
const colors = require("colors")
const userRouter = require("../backend/src/routers/usersRouter")
const branchesRouter = require("../backend/src/routers/branchesRouter")
const transactionsRouter = require("../backend/src/routers/transactionsRouter")
const connectDB = require("../backend/src/config/db")

connectDB()

const port = process.env.PORT


const app = express()

app.use(express.json())

app.use(userRouter)
app.use(branchesRouter)
app.use(transactionsRouter)


app.listen(port, () => {
    console.log(`server up and running on port ${port}`)
})