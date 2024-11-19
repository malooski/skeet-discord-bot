export function safeParseInt(value: string): number | undefined {
    const parsed = Number.parseInt(value);
    if (isNaN(parsed)) {
        return undefined;
    }

    return parsed;
}

/**
 * Removes all entries with null or undefined values from an object.
 * @param obj
 */
export function removeNilEntries<T>(obj: T): Partial<T> {
    const result = {} as Partial<T>;
    for (const key in obj) {
        if (obj[key] !== null && obj[key] !== undefined) {
            result[key] = obj[key];
        } else {
            result[key] = undefined;
        }
    }
    return result;
}
