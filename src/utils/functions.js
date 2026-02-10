
export function calcWeightedGrade(items) {
    if (!Array.isArray(items) || items.length === 0) {
        throw new TypeError('items debe ser un array no vacío');
    }
    let totalWeight = 0;
    let weightedSum = 0;
    for (const item of items) {
        if (typeof item !== 'object' || item === null) {
            throw new TypeError('Cada item debe ser un objeto');
        }
        const { score, weight } = item;
        // Validar tipos
        if (typeof score !== 'number' || typeof weight !== 'number') {
            throw new TypeError('score y weight deben ser números');
        }
        // Validar rangos
        if (score < 0 || score > 100) {
            throw new RangeError('score debe estar entre 0 y 100');
        }
        if (weight < 0 || weight > 1) {
            throw new RangeError('weight debe estar entre 0 y 1');
        }
        totalWeight += weight;
        weightedSum += score * weight;
    }
    if (Math.abs(totalWeight - 1) > 0.001) {
        throw new RangeError('La suma de weights debe ser 1 (±0.001)');
    }
    return Number(weightedSum.toFixed(2));
}


export function percentile(p, values) {
    if (typeof p !== 'number') {
        throw new TypeError('p debe ser un número');
    }
    if (p < 0 || p > 100) {
        throw new RangeError('p debe estar entre 0 y 100');
    }
    if (!Array.isArray(values) || values.length === 0) {
        throw new TypeError('values debe ser un array no vacío');
    }
    for (const value of values) {
        if (typeof value !== 'number') {
            throw new TypeError('Todos los valores deben ser números');
        }
    }
    const sorted = [...values].sort((a, b) => a - b);
    const N = sorted.length;
    if (p === 0) {
        return Number(sorted[0].toFixed(2));
    }
    if (p === 100) {
        return Number(sorted[N - 1].toFixed(2));
    }
    const rank = Math.ceil((p / 100) * N);
    const index = rank - 1;
    return Number(sorted[index].toFixed(2));
}
