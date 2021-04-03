export class Logger {
  
  static log(message: string | object | number):void {
    console.log(message)
  }

  static logType<Type>(message: Type):void {
    console.log(message)
  }

}
