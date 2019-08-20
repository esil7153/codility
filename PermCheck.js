
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b) => a - b);
    
    const result = A.find((a, i) => {
       if (i + 1 < A.length && a + 1 !== A[i + 1]) {
           return true;
       }
    });
    
    return !result ? 1 : 0;
}
