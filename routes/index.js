import express from 'express';
import webhookController from '../controllers/webhookController';

const router = express.Router();

// webhook
router.get('/webhook/', webhookController.tokenVerification);

export default router;