const findRemoveSync = require('find-remove')
var result = findRemoveSync("E:\\baidu\\", {  age: { seconds: 3600 }, maxLevel : 2,files : '.*?mysql', regex: true })
console.log(result)
