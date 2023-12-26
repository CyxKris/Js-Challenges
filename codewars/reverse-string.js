

const reverseString = (str) => {
    const reversed = str.split("").reverse().join("");
    return reversed;
}

const isAPalindrome = (str) => {        
    const result = (reverseString(str) === str) ? str + " is is a palindrome" : str + " is not a palindrome";
    
    return result;
}

console.log(isAPalindrome("anna"));