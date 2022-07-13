import { Router } from 'express';
import controllerUsers from '../controllers/controllerUsers';
import { usernameValid, classeValid, levelValid, passwordValid } from '../middlewares/middleUsers';

const users = Router();

users.post('/', usernameValid, classeValid, levelValid, passwordValid, controllerUsers.createUser);

export default users;