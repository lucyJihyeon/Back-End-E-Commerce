const router = require('express').Router();
const locationsRoutes = require('./locations.js');
const tripsRoutes = require('./trips.js');
const travellersRoutes = require('./travellers.js');


router.use('/locations', locationsRoutes);
router.use('/travellers', travellersRoutes);
router.use('/trips', tripsRoutes);

module.exports = router;
