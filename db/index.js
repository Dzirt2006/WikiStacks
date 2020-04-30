const Sequelize = require('sequelize');
const db = new Sequelize('postgres://postgres:w2w2@localhost:5432/wikistack');

module.exports = db;