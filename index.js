function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  function returnsANamedFunction() {
    // Define and return a named function
    function namedFunction() {
      // Function body
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    // Return an anonymous function directly
    return function () {
      // Function body
    };
  }
  