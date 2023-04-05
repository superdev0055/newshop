'use strict';

///////////////////////////////////////////////////////////////////////
////////   connect to our document store and initialize //////////////
//////////////////////////////////////////////////////////////////////

const mongoose =            require('mongoose');
const initializeClients =   require('./initialize/getclients')
const initializeAgents =    require('./initialize/getagents')
const { g, b, gr, r, y } =  require('../console')

let options = {
  useMongoClient: true,
  poolSize: 10, // Maintain up to 10 socket connections
};

module.exports = function (dbURI) {
    mongoose.Promise = global.Promise
    mongoose.connect(dbURI, options)
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, r('connection error...')));
    db.once('open', function callback() {
        initializeClients.getClients();
        initializeAgents.getAgents();
        console.log(g('MongoDB Connected'));
    });
};
