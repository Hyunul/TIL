// enum은 상수를 나타내는 특별한 "클래스"이며, string과 numeric 두 가지의 종류가 존재한다.

// Numeric Enum
// 기본적으로 enum은 첫 번째 값을 0으로 초기화하고 각 추가 값에 1을 더한다.
enum CardinalDirections {
    North,
    East,
    South,
    West,
}

let currentDirection = CardinalDirections.North;
// log: 0
console.log(currentDirection);
// currentDirection = 'North'; // Error, "North" is not assignable to type "CardinalDirections"

// partial value initialization
enum CardinalDirections2 {
    North = 1,
    East,
    South,
    West,
}

console.log(CardinalDirections2.North); // 1
console.log(CardinalDirections2.West); // 4

// value initialization
enum CardinalDirections3 {
    North = 404,
    East = 200,
    South = 202,
    West = 400,
}

// string enum
enum StringDirections {
    North = 'NORTH',
    East = 'EAST',
    South = 'SOUTH',
    West = 'WEST',
}

console.log(StringDirections.North); // NORTH
console.log(StringDirections.West); // WEST

// >> 어지간하면 string enum과 numeric enum을 혼용하지 않는 것이 좋다.
