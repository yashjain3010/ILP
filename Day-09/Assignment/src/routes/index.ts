import { Router } from "express";

import {createUser,updateUser,getUser,deleteUser,getAllUsers} from '../controllers/index'

const router = Router();

router.post('/users',createUser);
router.put('/users/:email',updateUser);
router.get('/user/:email',getUser);
router.delete('/users/:email',deleteUser);
router.get('/users',getAllUsers);

export default router;