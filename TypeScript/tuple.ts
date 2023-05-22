// Tuple is typed with a pre-defined length and types for each index.
let tuple1: [number, boolean, string];

// 즉, 튜플은 타입이 지정된 배열이므로 각 인덱스에 맞게 값을 할당해야 한다.
tuple1 = [5, false, 'Coding God was here'];
tuple1.push('test');
console.log(tuple1);

const tupleReadonly: readonly [number, boolean, string] = [5, false, 'Coding God was here'];
// tupleReadonly.push('test'); // Error

// named tuple
const graph: [x: number, y: number] = [10, 20];

// Destructing Tuple
const [a, b] = graph;
console.log(a, b);
