export function delayMs(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

export function mapAsync<T, U>(
    items: T[] | IterableIterator<T>,
    fn: (item: T) => Promise<U>
): Promise<U[]> {
    const promises: Array<Promise<U>> = [];
    for (const item of items) {
        promises.push(fn(item));
    }
    return Promise.all(promises);
}
