import { Router } from 'express';
let router = Router();
import v1 from './v1/index.route';

// TO DO API ROUTES

//root route
router.get('/', (req, res) => {
    res.send('To Do API working...');
});

// V1 API routes
router.use('/v1', v1);

export default router;
