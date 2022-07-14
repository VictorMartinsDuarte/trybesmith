import { Router } from 'express';
import controllerLogin from '../controllers/controllerLogin';
import { passwordValid, usernameValid } from '../middlewares/middleUsers';

const login = Router();

login.post('/', usernameValid, passwordValid, controllerLogin.getUser);

export default login;