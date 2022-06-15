import { name, getName, Animal, Directions, Options} from './types/foo/index'

console.log(name)
let myName = getName()
let cat = new Animal('Tom')
let directions = [Directions.Up, Directions.Down, Directions]
let options: Options = {
  data: {
    name: 'foo'
  }
}

class Animal {
  public name
  public constructor(name) {
    this.name = name
  }
}

let a = new Animal('qxx')
console.log(a.name)