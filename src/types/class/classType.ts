export class Animal {
  public name: string
  public constructor(name: string) {
    this.name = name
  }

  public sayHi(): string {
    return `My name is ${this.name}`;
  }
}

let a: Animal = new Animal('cookie')