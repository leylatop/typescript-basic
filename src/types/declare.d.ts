// ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件
// 若ts文件有export 则会当做普通ts文件

declare function get(selector: string): void

declare class Animal {
  name: string
  sayHi(): string
}


declare enum Directions {
  Up, Down, Left, Right
}

// 在namespace内部可以直接用const 定义，而非 declare
export declare namespace jQuery {
  function ajax(url: string, settings?:any): void
  const version: number
  class Event {
    blur(e: EventType): void
  }

  enum EventType {
    CustomClick
  }
}

// namespace 可以嵌套
declare namespace Global {
  const MB: any
  namespace fn {
    function extend (object: any): void
  }
}

// 声明合并，此时 MB既可以是函数，也可以是对象
declare function MB(selector: string): any
declare namespace MB {
  function show (selector: string): void
}
