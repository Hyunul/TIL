const car: { type: string; model: string; year: number } = {
    type: 'Toyota',
    model: 'Corolla',
    year: 2009,
};

// selective feature
const car1: { type: string; mileage?: number } = {
    type: 'Toyota',
};

// !selective feature > Error
// const car2: { type: string, mileage: number } = {
//     type: 'Toyota',
// };

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // !Error
// nameAgeMap.Mark = "Fifty"; // Error > Type 'string' is not assignable to type 'number'
