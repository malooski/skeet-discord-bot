export function toMap<T, K, V>(
    items: T[],
    keySelector: (item: T) => K,
    valueSelector: (item: T) => V,
): Map<K, V> {
    const map = new Map<K, V>();
    for (const item of items) {
        const key = keySelector(item);
        const entry = map.get(key);

        const value = valueSelector(item);
        map.set(key, value);
    }

    return map;
}

export function toMapArray<T, K, V>(
    items: T[],
    keySelector: (item: T) => K,
    valueSelector: (item: T) => V,
): Map<K, V[]> {
    const map = new Map<K, V[]>();
    for (const item of items) {
        const key = keySelector(item);
        const entry = map.get(key);
        const val = valueSelector(item);
        if (entry) {
            entry.push(val);
        } else {
            map.set(key, [val]);
        }
    }

    return map;
}
