require('dotenv').config()
const express = require('express')
const cookieParser=require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())

// routes import

const tracksRouter = require('./src/tasks/tracks_routes.js')
const albumsRouter = require('./src/projects/albums_routes.js')
const authRouter = require('./src/auth/auth.routes')


app.use('/api/albums', albumsRouter)
app.use('/api/tracks', tracksRouter)
app.use('/api/auth', authRouter)

app.listen(PORT, (err) => {
  // eslint-disable-next-line no-console
  if (err) console.error(err);
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
