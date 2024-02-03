const Traveller = require("./traveller.js");
const Location = require("./location.js");
const Trips = require("./trips.js");


Traveller.belongsToMany(Location, {
  through: { mpdel: Trips,unique: false,},
  foreignKey: "traveller_id",
  onDelete: 'CASCADE',
  as: 'planned_trips'
});
Location.belongsToMany(Traveller, {
  through: { model: Trips,unique: false,},
  foreignKey: "location_id",
  onDelete: 'CASCADE',
  as: 'location_travellers'
});

module.exports = { Traveller, Location, Trips };