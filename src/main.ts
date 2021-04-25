import { Logger, Aider } from '../src/aider';
import { User } from '../interfaces/iuser';
import { UserAccount } from '../classes/UserAccount'

const user: User = new UserAccount('Rafia Ana', 1);
Logger.log(user);

const app = document?.querySelector('#root');

const greet = (name: string): void => console.log(`Hi there, ${name}`);

const jumpingOnClouds = (array: number[]): number => {
    let count: number = 0;

    array.forEach((num, index) => {
        if (index != 1 && index != 5) {
            num === 0 ? count++ : null;
        }
    });
    return count;
}

function jumpingOnClouds1(arr: number[]) {
    let safe = 0, danger = 1, count = 0, jump = 0;

    while (jump < arr.length - 1) {
        if (arr[jump % 2] === safe && arr[(jump + 1)] === safe) {
            //check if next one is safe as well
            if (arr[jump + 2] === safe) {
                jump = jump + 2
                count++
            }
            else {
                jump = jump + 1
                count++
            }

        }
        else if (arr[jump] === safe && arr[jump + 1] === danger) {
            jump = jump + 2
            count++
        }
        else {
            //danger danger
            break
        }

    }
    return count
}

let string = ``;

let arraynum: number[] = Aider.convertToArrayNumber('0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 1 0 1 0 0 0 1 0 0 1 0 0 0 1 0 1 0 0 0 0 0 0 0 0 1 0 0 1 0 1 0 0')


string += `<li>${arraynum}</li>`
string += `<li>jumpingOnClouds: ${jumpingOnClouds(arraynum)}</li>`
string += `<li>jumpingOnClouds1: ${jumpingOnClouds1(arraynum)}</li>`

const html = Aider.convert_string_to_html(`<ul class='lists'>${string}</ul>`).querySelectorAll('body > *');
html.forEach(function (element, index) {
    app?.appendChild(element);
});

document?.querySelector('.lists').addEventListener('click', function (evnt) {

    //greet(`Rita Ora`);
});