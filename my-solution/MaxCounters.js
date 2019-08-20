// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let arr = Array.apply(null, new Array(N)).map(Number.prototype.valueOf, 0);
    let max = 0;
    let bottom = 0;
    A.forEach(a => {
        if (a >= 0 && a <= N) {
            if (arr[a - 1] <= bottom) {
                arr[a - 1] = bottom;
            }
            arr[a - 1]++;

            if (arr[a -1] > max) {
                max = arr[a - 1];
            }
        } else if (a === N + 1) {
            bottom = max;
        }
    });
    
    arr.map((a, i) => {
        if (a < bottom) {
            arr[i] = bottom;
        }
    });
    
    return arr;
}


// O(N + M)
