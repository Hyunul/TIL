// Explict Type (명시적)
let firstName: string = 'Jung';

// Implict Type (암시적)
let lastName = 'Woojin';

// Type Error, JS에서는 검출되지 않는다.
// firstName = 10;
// lastName = 10;

// Special Type
// any : 검사를 비활성화하고 모든 Type을 효과적으로 사용할 수 있도록 허용하는 Type
let v: any = true; // boolean
v = 'string'; // string
Math.round(v); // number

// unknown : any와 비슷하지만 더 안전한 Type
// 입력되는 데이터의 타입을 모를 때 잘 사용하고 as 키워드로 유형을 캐스팅함으로써 유형을 추가
let w: unknown = 1;
w = 'string';
w = {
    runANonExistingMethod: () => {
        console.log('I think therefore I am');
    },
} as { runANonExistingMethod: () => void };

if (typeof w === 'object' && w !== null) {
    (w as { runANonExistingMethod: Function }).runANonExistingMethod();
}

// never : 정의될 때마다 효과적으로 오류를 발생시킴, 그 자체로는 거의 사용되지 않으며 고급 제네릭에서 주로 사용됨.
// let x : never = true;

// undefined, null : undefined와 null은 모든 Type의 하위 Type
let y: undefined = undefined;
let z: null = null;
