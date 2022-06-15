export class Animal {
  // public constructor(public readonly name: any) {
  //   this.name = name
  // }
  // 上面的代码等同于下面的代码
  // readonly 和其他访问修饰符同时存在的话
  public readonly name
  public constructor(name: any) {
    this.name = name
  }
}

let a = new Animal('cookie')
console.log(a.name)