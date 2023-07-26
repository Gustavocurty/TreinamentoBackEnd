import { Router } from "express";
import { route } from "express/lib/router";

import HelloControllers from "./controllers/HelloControllers";
//import UsersController from "./controllers/UsersController";

const routes = new Router();

routes.get('/hello', HelloControllers.index);

// REST



export default routes;