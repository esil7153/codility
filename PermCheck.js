// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => a - b);
    
    if (A[0] !== 1) {
        return 0;
    }

    const result = A.find((a, i) => {
       if (i + 1 < A.length && a + 1 !== A[i + 1]) {
           return true;
       }
    });
    
    return !result ? 1 : 0;
}
