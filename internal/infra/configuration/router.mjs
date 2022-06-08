import { Router } from 'express';
import { UserController } from '../adapters/inbound/controllers/user.mjs';
import { AsyncWrapper } from '../../../pkg/utils/async_wrapper.mjs';

const router = Router();

router.get('/user', AsyncWrapper(UserController.getUser));
router.post('/user', AsyncWrapper(UserController.saveUser));
router.put('/user', AsyncWrapper(UserController.updateUser));
router.delete('/user', AsyncWrapper(UserController.deleteUser));

export { router };
