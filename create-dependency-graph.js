const madge = require('madge')

madge(`${__dirname}/src/index.js`)
    .then(res => res.image(`${__dirname}/dependency-graph.svg`))
    .then(writtenImagePath => console.log(`Image written to ${writtenImagePath}`))