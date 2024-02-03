const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Traveller, Location, Trips } = require('../../models');

/*
It's done when the GET route /api/locations returns all location data in Insomnia.

It's done when the POST route /api/locations creates location data and returns a successful response in Insomnia.

It's done when the GET route /api/locations/:id returns a single location's data, with its associated trips, in Insomnia.

It's done when the DELETE route /api/locations/:id removes a location and any trips associated with it and returns a successful response in Insomnia.
*/
router.get('/', async ( req,res) => {
    try {
        const locationsData = await Location.finAll();
        res.status(200).json(locationsData);
    } catch (err)   {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const locationData = await Location.create({
            location_name: req.body.location_name,
        });
        res.status(200).json(locationData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const locationsData = await Location.findByPk(req.params.id, {
            include: [{ model: Traveller, through: Trips, as: 'location_travellers' }],
        });
        if (!locationsData) {
            res.status(404).json({ message: "No traveller found with this id!"});
            return;
        }
        res.status(200).json(locationsData);
    } catch(err) {
        res.status(500).json(err);
    }
});