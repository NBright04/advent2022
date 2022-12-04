class Calories {
    private rawCalories: number[][] = [];
    private readonly sumCalories: number[];

    constructor(calories: string) {
        this.importCalories(calories);

        this.sumCalories = this.rawCalories
            .map((calories: number[]) => this.addUpArray(calories))
            .sort((n1: number, n2: number) => n1 - n2);
    }

    public getMostCalories(): number {
        return this.sumCalories[this.sumCalories.length - 1];
    }

    public getSumOfTopThree(): number {
        return this.sumCalories
            .slice(this.sumCalories.length - 3, this.sumCalories.length)
            .reduce((previousValue: number, currentValue: number) => previousValue + currentValue);
    }

    private importCalories(str: string): void {
        const caloriesStr: string[][] = str
            .split('\n\n')
            .map((calories: string) => calories.split('\n'));

        this.rawCalories = caloriesStr.map(calories => this.parseArrayToInt(calories));
    }

    private addUpArray(array: number[]): number {
        return array.reduce((previousValue: number, currentValue: number) => previousValue + currentValue);
    }

    private parseArrayToInt(array: string[]): number[] {
        return array.map((value: string) => parseInt(value));
    }
}

export default Calories;
