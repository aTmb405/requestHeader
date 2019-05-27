var ip = require("ip");
console.log( ip.address() );

let info = () => {
  ip: ip.address()
}

module.exports = info;