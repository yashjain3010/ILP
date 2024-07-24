import { Request,Response } from 'express';
import {User,Gender} from '../model/index'
import { readUserFromFile,writeUserToFile } from '../utils';

export const createUser = (req : Request,res : Response) : void => {
    const newUser : User = req.body;
    const users = readUserFromFile();

    const existingUser = users.find(users => users.email === newUser.email)

    if(existingUser){
        res.status(400).json({
            message : "User with this email already exists"
        })
        return;
    }

    users.push(newUser);
    writeUserToFile(users);
    res.status(201).json(newUser)
}

export const updateUser = (req : Request, res : Response) : void => {
    const email = req.params.email;
    const updateUser : Partial<User> = req.body;
    const users = readUserFromFile();

    const userIndex = users.findIndex(users => users.email === email);
    if(userIndex === -1){
        res.status(404).json({
            message: "User not found"
        })
    }

    users[userIndex] = {...users[userIndex],...updateUser};
    writeUserToFile(users);
    res.status(200).json(users[userIndex]);
}

export const getUser = (req : Request,res : Response) : void => {
    const email = req.params.email;
    const users = readUserFromFile();

    const user = users.find(user => user.email === email)

    if(!user){
        res.status(4004).json({
            message: "User not found"
        })
        return;
    }
    res.status(200).json(user);
}

export const deleteUser = (req : Request,res : Response) : void => {
    const email = req.params.email;
    const users = readUserFromFile();

    const filteredUsers = users.filter(user => user.email === email)
    if(filteredUsers.length === users.length){
        res.status(404).json({
            message : "User not found"
        })
        return;
    }

    writeUserToFile(filteredUsers);
    res.status(204).send();
}

export const getAllUsers = (req : Request,res : Response) : void => {
    const users = readUserFromFile();
    res.status(200).json(users);
}

