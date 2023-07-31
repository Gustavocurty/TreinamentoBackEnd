import { Router } from "express";

import auth from "./middlewares/auth"

import HelloControllers from "./controllers/HelloControllers";
import SessionsController from "./controllers/SessionsController";
import UsersController from "./controllers/UsersController"
import RepositoriesController from "./controllers/RepositoriesController";

const routes = new Router();

routes.put('/sessions', SessionsController.create);
routes.get('/hello', HelloControllers.index);

routes.use(auth);


// REST
routes.get('/hello', HelloControllers.index);

routes.get('/users', UsersController.index);
routes.get('/users/:id', UsersController.show);
routes.post('/users', UsersController.create);
routes.put('/users/:id', UsersController.update);
routes.delete('/users/:id', UsersController.destroy);

routes.get('/users/:user_id/repositories', RepositoriesController.index);
routes.post('/users/:user_id/repositories', RepositoriesController.create);
routes.delete('/users/:user_id/repositories', RepositoriesController.destroy);

export default routes;