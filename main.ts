import { Logger } from './log';
import { User } from './interfaces/IUser';
import { UserAccount } from './classes/UserAccount'

const user: User = new UserAccount('Rafia Ana', 1);

Logger.log('Data exchange!!!')
Logger.log(user);
Logger.logType(true);

const app = document?.querySelector('#root');
const span = document?.createElement('span');
const button = document?.createElement('button');

span.textContent = 'Click Here';
button.appendChild(span);
button.className = 'btn--click';
app?.appendChild(button);

document?.querySelector('.btn--click').addEventListener('click', function(evnt){
    console.log(evnt);
});

