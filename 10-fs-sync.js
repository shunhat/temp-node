// interacting with file (file module)
const {readFileSync, writeFileSync} = require('fs');
// const fs = require('fs');
// fs.read
console.log('start')
const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second)

// ない場合は作られる
writeFileSync('./content/result-sync.txt',
`Here is the result: ${first}, ${second}`,
{flag:'a'} // upend the file
)

console.log('done with this task')
console.log('starting the next one')


