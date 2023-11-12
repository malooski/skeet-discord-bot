export function safeParseInt(value: string): number | undefined {
    const parsed = parseInt(value);
    if (isNaN(parsed)) {
        return undefined;
    }

    return parsed;
}
