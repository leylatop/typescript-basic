// public 在任何地方都可以被访问到（示例、类、内部、子类）访问指的是getter和setter
// private 私有的，不能在类外部（示例、类、子类）访问
// protected 私有的，不能在类外部（示例、类）访问，可以再子类访问

declare class Animal {
  public name
  public constructor(name) {
    this.name = name
  }
}