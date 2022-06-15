export class Animal {
  protected name
  // protected 当构造函数修饰为 protected 时，该该类只允许被继承
  public constructor(name: any) {
    this.name = name
  }
}

class Cat extends Animal {
  constructor(name:any) {
    super(name)
    console.log(this.name);  // 允许访问
  }
}

const a = new Animal('cookie')
// a.name //不允许访问

