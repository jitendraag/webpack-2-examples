var j = 'hello';
var k = "ignore me";
var welcomeWebpack = function () {
  console.log("Welcome webpack!");
}
console.log("Printing from second.js");

module.exports = {
  j: j,
  welcomeWebpack: welcomeWebpack
};