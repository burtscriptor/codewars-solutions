// take a word and return the middle character if odd, and the 2 middle characters if even
// edge cases?


const getMiddle = (string) => {
    if(string.length === 1) {
        return string;
    }else if(string.lenght < 1){
        return 'No characters in this string'
    }else{
        const oddEven = string.length % 2
        if(oddEven === 0) {
            const middle = string.length / 2
            return string.charAt(middle -1) + string.charAt(middle)
        }else{ 
        const middle = string.length / 2
        return string.charAt(middle)
        }    
    }
};

console.log(getMiddle('middle'));
console.log(getMiddle('dave'));
console.log(getMiddle('mid'));
console.log(getMiddle('david'));