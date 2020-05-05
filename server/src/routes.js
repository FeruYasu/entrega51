import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import CompanyController from './app/controllers/CompanyController';
import RoomController from './app/controllers/RoomController';
import EventController from './app/controllers/EventController';
import TwilioController from './app/controllers/TwilioController';
import authMiddleware from './app/middlewares/auth';
import QuestionsController from './app/controllers/QuestionsController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.post('/sessions', SessionController.store);
routes.post('/questions', QuestionsController.store);
routes.get('/questions/:id', QuestionsController.index);
routes.put('/questions/:id', QuestionsController.update);

routes.post('/chattoken', TwilioController.getChat);

routes.use(authMiddleware);

routes.post('/events', EventController.store);

routes.get('/rooms', RoomController.index);
routes.post('/rooms', RoomController.store);
routes.put('/rooms/:id', RoomController.update);

routes.put('/users/:id', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/token', TwilioController.getVideo);

export default routes;
