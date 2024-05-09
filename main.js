function descendingOrder(n) {
    return n.digits().sort().reverse().undigits();
  }
  
  Number.prototype.digits = function() {
    const result = [];
    let n = this;
    do {
      result.unshift(n % 10);
      n = Math.floor(n / 10);
    } while(n);
    return result;
  };
  
  Array.prototype.undigits = function() {
    return this.reduce((n, d) => n * 10 + d, 0);
  };


  console.log(descendingOrder(1234))