import express from 'express'
// import planetscontroller from '../controllers/planets.controller.js'
import { createKeplerianData, getkepdataAll, getkepdataforEachplanet } from '../controllers/Keplerian.controller.js';
import { createCometData, getCometDataAll, getCometDataByName } from '../controllers/comet.controller.js';
const router=express.Router();

router.route('/postplanetkepdata').post(createKeplerianData).get(getkepdataAll);
router.route('/each/:name').get(getkepdataforEachplanet);



router.route('/postcometdata').post(createCometData).get(getCometDataAll);
router.route('/each/:name').get(getCometDataByName);

export default router