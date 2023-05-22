const first: string[] = [];
first.push('Jung');

const last: readonly string[] = ['Woojin'];
// last.push('Jung'); // Error, beacuse last is readonly

// TS는 배열에 대한 타입을 추론할 수 있으므로 배열을 선언하고 초기화 할 때 타입을 지정할 필요가 없다.
const numbers = [1, 2, 3];
numbers.push(4);
// numbers.push("2"); // Error, beacuse numbers is number[]

let head: number = numbers[0];
