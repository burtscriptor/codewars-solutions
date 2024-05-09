
// write a function that takes a set of number
// if a number is positive, return it as negative (in an array)
// if a number is negatiev, return it as positive (in an array)
// could use a regrex expression 

const invert = (array) => {
    if(array.length === 0) {
        return 'No values in this array'
    }else{
        const results = []
        array.forEach(function(number) {
            let string =  number.toString()
         if(string.charAt(0) === '-'){
            string = string.replace('-','')
            const num = parseInt(string)
            results.push(num)
         }else{
           string = `-${string}`
           const num = parseInt(string) 
           results.push(num)    
        }
       
        });
        
        return results
        
    };

};

console.log(invert([]));
console.log(invert([-1,2,-3,4,-111,2000]));