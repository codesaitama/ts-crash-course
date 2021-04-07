import { Logger, Aider } from '../src/aider';
import { User } from '../interfaces/iuser';
import { UserAccount } from '../classes/UserAccount'

const user: User = new UserAccount('Rafia Ana', 1);
Logger.log(user);

const app = document?.querySelector('#root');

const string = `<ul class='lists'><li>One</li><li>Two</li><li>Three</li><li>Four</li><li>Five</li></ul>`;

const html = Aider.convert_string_to_html(string).querySelectorAll('body > *');

html.forEach(function(element, index){
    app?.appendChild(element);
});

document?.querySelector('.lists').addEventListener('click', function(evnt){
    const evt : EventTarget = evnt.target.innerHTML
    console.log({evt});

    //greet(`Rita Ora`);
});

const greet = (name: string):void => console.log(`Hi there, ${name}`)