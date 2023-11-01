// Task2
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let num = 22
const fibNumber = fibonacci(num);
// console.log(`Число Фібоначчі з номером ${num}: ${fibNumber}`);

// Task3
function filter(handler, arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (handler(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

let list = [22, 12, 43, 23, 7, 17, 123, 76, 1, 3, 26, 33, 11, 100];
const filteredList = filter((a) => a % 2, list);

// console.log(list)
// console.log(filteredList);

// Task4
function pow(base, exponent) {
    return math.pow(base, exponent);
}

const result = pow(2, 3);
console.log(result);

const negativeResult = pow(2, -3);
console.log(negativeResult);


