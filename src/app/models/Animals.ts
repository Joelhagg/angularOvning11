export class Animal {
    animal: string;
    size: string;
    food: string;
    age: number;
    isFed: boolean;

    constructor(animal: string, size: string, food: string, age: number, isFed: boolean) {

        this.animal = animal,
        this.size = size,
        this.food = food,
        this.age = age,
        this.isFed = isFed
    }
}