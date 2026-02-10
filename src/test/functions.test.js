import { calcWeightedGrade, percentile } from '../utils/functions.js';

describe('Pruebas de calcWeightedGrade', () => {
    test('Caso 1: [80,0.4], [90,0.6] → 86.00', () => {
        const result = calcWeightedGrade([
            { score: 80, weight: 0.4 },
            { score: 90, weight: 0.6 },
        ]);
        expect(result).toBe(86.00);
    });
    test('Varios con diferentes pesos', () => {
        const result = calcWeightedGrade([
            { score: 100, weight: 0.3 },
            { score: 80, weight: 0.5 },
            { score: 60, weight: 0.2 },
        ]);
        expect(result).toBe(82.00);
    });
    test('Error si suma de weights no es 1', () => {
        expect(() => calcWeightedGrade([
            { score: 80, weight: 0.5 },
            { score: 90, weight: 0.4 },
        ])).toThrow(RangeError);
    });
    //RangeError
    test('Error RangeError si score está fuera de rango', () => {
        expect(() => calcWeightedGrade([
            { score: 101, weight: 1 },
        ])).toThrow(RangeError);
    });
    //TypeError 
    test('Error TypeError si items no es un array', () => {
        expect(() => calcWeightedGrade(null)).toThrow(TypeError);
    });


});

describe('Pruebas de percentile', () => {
    test('Caso 1: percentile(0, [1,2,3]) → 1.00', () => {
        expect(percentile(0, [1, 2, 3])).toBe(1.00);
    });

    test('Caso 2: percentile(100, [1,2,3]) → 3.00', () => {
        expect(percentile(100, [1, 2, 3])).toBe(3.00);
    });

    test('Caso 3: percentile(50, [1,2,3,4]) → 2.00', () => {
        expect(percentile(50, [1, 2, 3, 4])).toBe(2.00);
    });

    test('Percentil 75 de [1,2,3,4]', () => {
        expect(percentile(75, [1, 2, 3, 4])).toBe(3.00);
    });

    test('Error RangeError si p está fuera de rango', () => {
        expect(() => percentile(101, [1, 2, 3])).toThrow(RangeError);
        expect(() => percentile(-1, [1, 2, 3])).toThrow(RangeError);
    });

    test('Error TypeError si no contiene numeros', () => {
        expect(() => percentile(50, [1, 'dos', 3])).toThrow(TypeError);
    });
});

