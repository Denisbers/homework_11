
function digit(n) {
    while (n % 3 == 0) {
        n /= 3;
    }
    return n == 1;
}

console.log(digit(prompt('enter number')));