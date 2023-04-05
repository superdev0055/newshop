'use strict';

//////////////////////////////////////////////////////////////////////////
/////////////////     API Catalogue for db store   //////////////////////
////////////////////////////////////////////////////////////////////////


const agents =         require('./agents')
const clients =        require('./clients')

////////////////////////////////////
///////   get all clients ////////
//////////////////////////////////
const getClients = (token, cb) => {

  async function thread() {
    let result = await clients.get()
    return result
  }

  thread().then((result) => {
    cb(result)
  }).catch((err) => {
    console.log("ERROR IN Get Client PROCESSING")
    console.log(err)
  })
}


////////////////////////////////////
///////   update client  //////////
//////////////////////////////////

const updateClient = (token, contact, cb) => {

  async function thread(contact) {
    let result = await clients.update(contact)
    return result
  }

  thread(contact).then((arr) => {
    cb(arr)
  }).catch((err) => {
    console.log("ERROR IN Update Client PROCESSING")
    console.log(err)
  })
}

////////////////////////////////////
///////   add new client  //////////
//////////////////////////////////
const addClient = (token, contact, cb) => {

  async function thread(contact) {
    let result = await clients.put(contact)
    return result
  }

  thread(contact).then((result) => {
    cb(result)
  }).catch((err) => {
    console.log("ERROR IN Add Member PROCESSING")
    console.log(err)
  })
}

////////////////////////////////////
///////   delete client  //////////
//////////////////////////////////
const deleteClient = (token, id, cb) => {

  async function thread(id) {
    let result = await clients.delete(id)
    return result
  }

  thread(id).then((result) => {
    cb(result)
  }).catch((err) => {
    console.log("ERROR IN DELETE MEMBER PROCESSING")
    console.log(err)
  })
}

////////////////////////////////////
///////   get all agents    ////////
//////////////////////////////////
const getAgents = (token, cb) => {

  async function thread() {
    let result = await agents.get()
    return result
  }

  thread().then((result) => {
    cb(result)
  }).catch((err) => {
    console.log("ERROR IN Get Agent PROCESSING")
    console.log(err)
  })
}


////////////////////////////////////
///////   update agent   //////////
//////////////////////////////////

const updateAgent = (token, contact, cb) => {

  async function thread(contact) {
    let result = await agents.update(contact)
    return result
  }

  thread(contact).then((arr) => {  
    cb(arr)
  }).catch((err) => {
    console.log("ERROR IN Update Agent PROCESSING")
    console.log(err)
  })
}

////////////////////////////////////
///////   add new agent  //////////
//////////////////////////////////
const addAgent = (token, contact, cb) => {

  async function thread(contact) {
    let result = await agents.put(contact)
    return result
  }

  thread(contact).then((result) => {
    cb(result)
  }).catch((err) => {
    console.log("ERROR IN Add Agent PROCESSING")
    console.log(err)
  })
}

////////////////////////////////////
///////   delete agent   //////////
//////////////////////////////////
const deleteAgent = (token, id, cb) => {

  async function thread(id) {
    let result = await agents.delete(id)
    return result
  }

  thread(id).then((result) => {
    cb(result)
  }).catch((err) => {
    console.log("ERROR IN DELETE Agent PROCESSING")
    console.log(err)
  })
}


/////////////////////////////////////
module.exports = {
  addClient,
  deleteClient,
  getClients,
  updateClient,
  addAgent,
  deleteAgent,
  getAgents,
  updateAgent
}
