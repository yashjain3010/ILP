"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.deleteUser = exports.getUser = exports.updateUser = exports.createUser = void 0;
const utils_1 = require("../utils");
const createUser = (req, res) => {
    const newUser = req.body;
    const users = (0, utils_1.readUserFromFile)();
    const existingUser = users.find(users => users.email === newUser.email);
    if (existingUser) {
        res.status(400).json({
            message: "User with this email already exists"
        });
        return;
    }
    users.push(newUser);
    (0, utils_1.writeUserToFile)(users);
    res.status(201).json(newUser);
};
exports.createUser = createUser;
const updateUser = (req, res) => {
    const email = req.params.email;
    const updateUser = req.body;
    const users = (0, utils_1.readUserFromFile)();
    const userIndex = users.findIndex(users => users.email === email);
    if (userIndex === -1) {
        res.status(404).json({
            message: "User not found"
        });
    }
    users[userIndex] = Object.assign(Object.assign({}, users[userIndex]), updateUser);
    (0, utils_1.writeUserToFile)(users);
    res.status(200).json(users[userIndex]);
};
exports.updateUser = updateUser;
const getUser = (req, res) => {
    const email = req.params.email;
    const users = (0, utils_1.readUserFromFile)();
    const user = users.find(user => user.email === email);
    if (!user) {
        res.status(4004).json({
            message: "User not found"
        });
        return;
    }
    res.status(200).json(user);
};
exports.getUser = getUser;
const deleteUser = (req, res) => {
    const email = req.params.email;
    const users = (0, utils_1.readUserFromFile)();
    const filteredUsers = users.filter(user => user.email === email);
    if (filteredUsers.length === users.length) {
        res.status(404).json({
            message: "User not found"
        });
        return;
    }
    (0, utils_1.writeUserToFile)(filteredUsers);
    res.status(204).send();
};
exports.deleteUser = deleteUser;
const getAllUsers = (req, res) => {
    const users = (0, utils_1.readUserFromFile)();
    res.status(200).json(users);
};
exports.getAllUsers = getAllUsers;
