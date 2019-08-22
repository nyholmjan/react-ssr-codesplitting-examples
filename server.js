import express from 'express'
import App from './src/App'
import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter as Router } from 'react-router-dom'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#f50057',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
})
const app = express()

const router = express.Router()

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    const sheets = new ServerStyleSheets()
    const context = {}
    const rendered = ReactDOMServer.renderToString(
      sheets.collect(
        <ThemeProvider theme={theme}>
          <Router location={req.url} context={context}>
            <App />
          </Router>
        </ThemeProvider>
      )
    )
    const renderedData = data.replace(
      '<div id="root"></div>',
      `<div id="root">${rendered}</div>`
    ).replace(
      '<style id="jss-server-side"></style>',
      `<style id="jss-server-side">${sheets.toString()}</style>`
    )
    return res.send(
      renderedData
    )
  })
}

router.use(
  '/notserversiderendered',
  express.static(path.resolve(__dirname, 'notserversiderendered/build'), { maxAge: '30d' })
)

router.use(
  '/lazyapp',
  express.static(path.resolve(__dirname, 'lazy/build'), { maxAge: '30d' })
)

router.use(
  express.static(path.resolve(__dirname, 'build'), { maxAge: '30d' })
)

app.get(['/', '/story', '/sortsa'], serverRenderer)

app.use(router)

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`SSR listening on ${port}`);
