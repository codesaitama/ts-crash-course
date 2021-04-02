import { Logger } from './log';
import { User } from './interfaces/IUser';
import { UserAccount } from './classes/UserAccount'

Logger.log('Data exchange!!!')

const user: User = new UserAccount('Rafia Ana', 1);

Logger.log(user);

Logger.logT(true);
