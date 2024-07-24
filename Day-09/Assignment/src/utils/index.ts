import fs from 'fs';
import path from 'path';
import { User } from '../model/index';

const filePath = path.join(__dirname,'../../data/users.json')

export const readUserFromFile = () : User[] => {
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath,JSON.stringify([]))
    }

    const data = fs.readFileSync(filePath,'utf-8');
    return JSON.parse(data);
}

export const writeUserToFile = (user : User[]) : void => {
    fs.writeFileSync(filePath,JSON.stringify(user,null,2))
}
