export function delayMs(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

export async function take<T>(iter: AsyncIterator<T, T, T>) {
    return iter
        .next()

        .then(x => x.value);
}
