"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeUserToFile = exports.readUserFromFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, '../../data/users.json');
const readUserFromFile = () => {
    if (!fs_1.default.existsSync(filePath)) {
        fs_1.default.writeFileSync(filePath, JSON.stringify([]));
    }
    const data = fs_1.default.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};
exports.readUserFromFile = readUserFromFile;
const writeUserToFile = (user) => {
    fs_1.default.writeFileSync(filePath, JSON.stringify(user, null, 2));
};
exports.writeUserToFile = writeUserToFile;
