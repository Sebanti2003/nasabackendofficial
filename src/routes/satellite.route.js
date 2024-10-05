import express from 'express'
import { Satallite,getsatdataAll, getSatellitedataforEarth, createSatellite } from '../controllers/Satellite.controller';
const router=express.Router();
router.route('/postSatdata').post(createSatellite).get(getSatdataAll);
router.route('/each/:Earth').get(getSatellitedataforEarth);

export default router