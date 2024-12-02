export class RunningAverage {
    private values: number[] = [];
    private sum = 0;

    constructor(private windowSize: number) {}

    add(value: number) {
        this.values.push(value);
        this.sum += value;

        if (this.values.length > this.windowSize) {
            this.sum -= this.values.shift()!;
        }
    }

    get() {
        return this.sum / this.values.length;
    }
}
