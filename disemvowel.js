const disemvowel = (string) => {
    if (string.length < 1) {
        return 'No characters in this string'
    }else{
        const characters = string.split('')
        const results = characters.filter(function(letter) {
            return ! 'aeiouAEIOU'.includes(letter)
        });
        return results.join('')
    }
};

console.log(disemvowel('aomMOJMFCyrEXHDyfh asdfghjoi'));