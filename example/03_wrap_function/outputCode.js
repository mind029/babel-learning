const {
  after
} = require("trackpoint-tools");

const func1 = after(name => {
  console.log("seed some ", name);
})(name => {
  console.log("func1", name);
});
func1(1);
