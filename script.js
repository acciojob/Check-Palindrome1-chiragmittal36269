// complete the given function

function palindrome(str){
	    if (str.length === 0 || str.length === 1) {
        return true; // An empty string and single characters are considered palindromes.
    }
    
    let i = 0;
    let j = str.length - 1;
    
    while (i <= j) {
        if (str.charAt(i) !== str.charAt(j)) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    
    return true;

}
module.exports = palindrome
