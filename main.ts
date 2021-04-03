import { Logger } from './log';
import { User } from './interfaces/IUser';
import { UserAccount } from './classes/UserAccount'

const user: User = new UserAccount('Rafia Ana', 1);

Logger.log('Data exchange!!!')
Logger.log(user);
Logger.logType(true);
