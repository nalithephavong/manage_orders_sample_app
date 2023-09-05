import { Router } from 'express';
import { createOrder, deleteOrder, getOrders, updateOrder } from '../controllers/orders-controller';

const router = Router();
router.post('/', createOrder);
router.get('/', getOrders);
router.patch('/:id', updateOrder);
router.delete('/:id', deleteOrder);

export default router;