// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    // sort array
    A.sort((a, b) => a - b);
    
    
    // remove negative numbers and zero
    let start = -1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] > 0) {
            start = i;
            break;
        }
    }
    
    // array consists only negative or zero
    if (start < 0 || A[start] !== 1) {
        return 1;
    }
    
    for (let i = start; i < A.length; i++) {
        const value = A[i];
        if (i + 1 !== A.length) {
            const next = A[i + 1];
            if (value !== next && value + 1 !==  next) {
                return value + 1;
            }
        } else {
            return value + 1;
        }
    }
    
    return  A[A.length -1] + 1;
}
