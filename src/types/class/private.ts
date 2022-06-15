export class Animal {
  private name
  // private 当构造函数修饰为 private 时，该类不允许被继承或者实例化
  public constructor(name: any) {
    this.name = name
  }
}

class Cat extends Animal {
  constructor(name:any) {
    super(name)
    // console.log(this.name);  // 不允许访问
  }
}

const a = new Animal('cookie')
// a.name //不允许访问

