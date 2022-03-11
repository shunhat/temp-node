// npm - global command

// local dependency - use it only in this particular project
// npm i <package name>

// global dependency - use it in any project
// npm install -g <package name>
// sudo npm install -g <package name> (mac)

// package.json - manifest file
    // manual approach - create package.json in the root
    // npm init
    // npm init -y (everything default)  


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems)