import express from 'express';
import { testcontroller } from '../controllers/test.controller.js';
const router=express.Router();

router.route('/').get(testcontroller);

export default router