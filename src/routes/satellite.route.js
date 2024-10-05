import express from 'express'
import { getsatdataAll, getSatellitedataforEarth, createSatellite } from '../controllers/Satellite.controller.js';
const router=express.Router();
router.route('/postSatdata').post(createSatellite).get(getsatdataAll);
router.route('/each/:Earth').get(getSatellitedataforEarth);

export default router