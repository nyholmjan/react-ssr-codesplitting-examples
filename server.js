import express from 'express'
import App from './src/App'
import path from 'path';
import fs from 'fs';
import React from 'react'
import ReactDOMServer from 'react-dom/server'
const app = express();

const router = express.Router()

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    )
  })
}
router.use('^/$', serverRenderer)

// Serve static files from the lazy React app
router.use(
  express.static(path.resolve(__dirname, 'build'), { maxAge: '30d' })
)

// Serve static files for the not so lazy React app
router.use('/notlazy',
  express.static(path.resolve(__dirname, 'notlazyapp/build'), { maxAge: '30d' })
)

// tell the app to use the above rules
app.use(router)

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Sora listening on ${port}`);
