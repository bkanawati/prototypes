const operations = {};

operations.add = (a, b) => {
  return a + b;
};

operations.multiply = (a, b) => {
  return a * b;
}
/* %Tape */

/* ~add: add two numbers correctly
   ~operations.add(1,2) equal 3 
   */

/* ~Multiple numbers
  ~v inp1 = 1; inp2 = 2
  ~operations.multiply(inp1,inp2) equal 2 
*/

// dab hello

module.exports = operations;
