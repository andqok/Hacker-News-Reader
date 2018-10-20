const readline = require('readline-sync')
const fetch    = require('node-fetch');
var resp
var resp2
var id = 17467000

setInterval(hand, 11000)

function hand() {
  id += 1
  // https://github.com/HackerNews/API
  fetch('https://news.ycombinator.com/item?id=' + id)
      .then(res => res.text())
      .then(body => {
        if (body) {
          var a = body.match(/<title>(.*?)<\/title>/g)[0]
          var isComment = body.includes("<span class='storyon'> | on: ")
          if (isComment) {
            console.log('comment:  ' + a.slice(7, a.length - 22))
          } else {
            console.log('article:  ' + a.slice(7, a.length - 22))
          }
        }
        
      })  
}
// how to detect comments? easy! they contain '<span class='storyon'> | on: '

//var response = readline.question('What is your name?\n')
//console.log('Hi ' + name)
// .match(/<title>(.*?)<\/title>/)
