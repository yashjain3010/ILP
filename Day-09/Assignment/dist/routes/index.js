"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/index");
const router = (0, express_1.Router)();
router.post('/users', index_1.createUser);
router.put('/users/:email', index_1.updateUser);
router.get('/user/:email', index_1.getUser);
router.delete('/users/:email', index_1.deleteUser);
router.get('/users', index_1.getAllUsers);
exports.default = router;
