import { Router } from 'express';
import controllerLogin from '../controllers/controllerLogin';

const login = Router();

login.post('/', controllerLogin.getUser);

export default login;