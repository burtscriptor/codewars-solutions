// take a integer
// return the digits in the integer as anther integer but with those digits 
// in descending order
// edge cases to think about will there be decmails or specail alegbraic characters
// god help me if there is

const descending = (integer) => {
    if(integer <= 1){
        return integer
    }else{
        const string = integer.toString()
        const array = string.split('')
        const results = array.sort((a,b) => b - a )
        const num = results.join('')  
        return Number.parseInt(num)
    };
};

console.log(descending(0));
console.log(descending(1));
console.log(descending(1234456789));