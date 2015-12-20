const findValue = require("../lib");

// Some random object :)
const obj = {
    location: {
        planet: "Mars"
      , town: "Somewhere"
    }
  , names: [
        { first: "Alice", age: 19 }
      , { first: "Bob", age: 20 }
    ]
};

console.log(findValue(obj, "location.planet"));
// => "Mars"

console.log(findValue(obj, "names"));
// => [ { first: "Alice", age: 19 }, { first: "Bob", age: 20 } ]

console.log(findValue(obj, "names.0.first"));
// => "Alice"

console.log(findValue(obj, "names.1.age"));
// => 20

console.log(findValue(obj, "something.that.does.not.exist"));
// => undefined
