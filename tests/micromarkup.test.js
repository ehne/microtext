const { micromarkup } = require('../src')

console.log(micromarkup('[::hello::](#)', { highlights: true, newTab: false }))
