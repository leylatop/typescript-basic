// 用于定义抽象类和其中的抽象方法
// 1. 抽象类是不允许被实例化的
// 2. 抽象类中的抽象方法必须被子类实现
export abstract class Animal {
  public name
  public constructor(name: string) {
    this.name = name
  }

  public abstract sayHi(): void
}

class Cat extends Animal {
  public constructor(name: string) {
    super(name)
  }
  // 必须实现抽象方法
  public sayHi(): void {
    console.log(`Meow, My name is ${this.name}`);
  }
}

// 报错，不允许实例化
// let a = new Animal('qxx')

let cat = new Cat('cookie')
