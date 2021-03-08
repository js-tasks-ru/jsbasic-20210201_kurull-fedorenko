/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    let x=n;

    for (let i=1 ; i<n; i++){
        x=x*(n-i);
    }

    if(n === 0) return 1;
    
    return x;
}
