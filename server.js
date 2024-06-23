const express = require('express')
const path = require('path')
const app = express()
const { sequelize } = require('./models/index')
const rootRouter = require('./router/index.router')
app.use(express.json())

// cai dat cac static file
const publicPath = path.join(__dirname, "./public")
app.use('/public',express.static(publicPath))

// su dung router
app.use('/api/v1', rootRouter)
app.listen(2001, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    console.log("App listening on http://localhost:2001")
})