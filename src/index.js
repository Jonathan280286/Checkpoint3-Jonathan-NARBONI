require('dotenv').config()
const express = require('express')
const cookieParser=require('cookie-parser')

const app = express()
app.use(express.json())
app.use(cookieParser())

// routes import

const tracksRouter = require('./tracks/tracks_routes.js')
const albumsRouter = require('./albums/albums_routes.js')
const authRouter = require('./auth/auth.routes')


app.use('/api/albums/albums_routes.js', albumsRouter)
app.use('/api/tracks/tracks_routes.js', tracksRouter)
app.use('/api/auth/auth.routes.js', authRouter)

app.listen(PORT, (err) => {
  // eslint-disable-next-line no-console
  if (err) console.error(err);
  // eslint-disable-next-line no-console
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
