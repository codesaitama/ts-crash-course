export class Logger {
  static log(message: string | object | number) {
    console.log(message)
  }

  static logType<Type>(message: Type) {
    console.log(message)
  }
}
