// ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件
// 若ts文件有export 则会当做普通ts文件

// 如果是将声明文件直接存放于当前项目中，则建议和其他源码一起放到 src 目录下（或者对应的源码目录下）
declare namespace MB {
  function ajax (url: string, setting?: AjaxSetting): void
  const user: any
}
