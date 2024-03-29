import { Router } from 'express';
import { AuthRoutes } from './AuthRoutes';
import { UserRoutes } from './UserRoutes';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './../../swagger.json';
import { DashboardRoutes } from './DashboardRoutes';

const routes = Router();

routes.use('/auth', new AuthRoutes().getRouter());
routes.use('/user', new UserRoutes().getRouter());
routes.use('/dashboard', new DashboardRoutes().getRouter());
routes.use('/docs', swaggerUi.serve);
routes.get('/docs', swaggerUi.setup(swaggerDocument));
export default routes;