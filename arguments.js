function sum() {
  let arr = Array.from(arguments);
  return arr.reduce( (acc, curr) => { return (acc + curr)}, 0 );
}

function sumWithRest(...args) {
  let arr = [...args];
  return arr.reduce((acc, curr) => { return (acc + curr) }, 0);
}

Function.prototype.myBind = function (obj) {
  let arr = Array.from(arguments).slice(1);
  let that = this;
  return function() {
    return that.apply(obj, arr.concat(Array.from(arguments)));
  }
}

Function.prototype.myBindWithRest = function(obj, ...args) {
    return (...callArgs) => {
      return this.apply(obj, args.concat(callArgs));
    }
  }

function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, curr) => {return acc + curr}, 0 );
    }else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let that = this;
  function _curry(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      
      // return that.apply(null, numbers);
      return that(...numbers);
    } else {
      return _curry; 
    }
  }
  return _curry;
}