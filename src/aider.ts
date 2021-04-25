export class Logger {

  static log(message: string | object | number): void {
    console.log(message)
  }

  static logType<Type>(message: Type): void {
    console.log(message)
  }

}

/**
 * Class containing all functions and variables that will be used globally.
 * It will be used across the software.
 */
export class Aider {

  /**
 * Convert a template string into HTML DOM nodes
 * @param  {String} str The template string
 * @return {Node}       The template HTML
 */
  static convert_string_to_html = function (str: string): HTMLElement {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    return doc.body;
    //return document.createRange().createContextualFragment(str); //DocumentFragment
  }

  static convertToArrayNumber = function (str: string): number[] {
    return str.split(' ').map(numb => Number(numb));
  }

}