// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/** TIME OUT
function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let time = -1;
    for (let i = 1; i <= X; i++) {
        let index = A.indexOf(i);

        if (index < 0) {
            return -1;
        }
        
        if (time < 0 || time < index) {
            time = index;
        }
    }
    
    return time;
}
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    const map = {};
    let max = -1;
    A.forEach((a, i) => {
        if (a <= X && (!map[a] && map[a] !== 0)) {
            map[a] = i;
            if (max < i) {
                max = i;
            }
        }
    });
    
    if (Object.keys(map).length < X) {
        return -1;
    }
    
    return max;
}
