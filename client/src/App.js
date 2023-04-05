
////////////////////////////////////////////////////////////////////////
//////////           Main App for Bot Store               /////////////
/////////          Connecting Business to Bots           /////////////
/////////////////////////////////////////////////////////////////////

import React, { Component }     from 'react'
import { Route, Switch }        from 'react-router-dom'
import { createBrowserHistory } from 'history'
import About                    from './pages/About'
import CreateAgent              from './pages/CreateAgent'
import Demo                     from './pages/Demo'
import ListAgents               from './pages/ListAgents'
import ListClients              from './pages/ListClients'
import NoMatch                  from './pages/NoMatch'
import Nav                      from "./components/Nav"
import Footer                   from "./components/Footer"
import * as ContactsAPI         from './utils/ContactsAPI'

//const history = createBrowserHistory();

class App extends Component {
  state = {
    agents: [ ],
    clients: [ ],
    cart: [],
    currentPage: "Agents"
  }

  removeAgentContact = (contact) => {
    ContactsAPI.remove(contact.id).then(cnt =>{
      this.setState( (state) => ({
        agents: state.agents.filter((c) => c.id !== contact.id )
      }) )
    })
  }
  removeClientContact = (contact) => {
    ContactsAPI.removeClient(contact.id).then(cnt =>{
      this.setState( (state) => ({
        clients: state.clients.filter((c) => c.id !== contact.id )
      }) )
    })
  }

  createAgent = async (contact) => {
    console.log(`entered create agent`)
    console.log(contact)
    try{
      let cnt = await ContactsAPI.create(contact)
    } catch(error){
      console.log(`error noted`)
      console.log(error)
    }    
    let newAgents = [...this.state.agents]   
    await this.updateArray(newAgents, contact).then((arr) => {     
      this.setState({ agents: arr })        
    })   
  }

  updateArray = (newAgents, contact) => {    
    return new Promise((resolve, reject) => {
      newAgents.push(contact)
      resolve(newAgents)
    })

  }

  componentDidMount() {
        ContactsAPI.getAll().then((agents) => {
          this.setState({ agents })
        })
        ContactsAPI.getAllClients().then((clients) => {
             this.setState({ clients })
           })
      }

  render() {
    return (
      <div className = 'app'>       
        <Nav />
        <Switch>
          <Route exact path="/" 
            render={(props) => <ListAgents {...props}  onDeleteContact = { this.removeAgentContact }
            contacts={this.state.agents}/> } />
          <Route exact path="/clients" 
            render={(props) => <ListClients {...props}  onDeleteContact = { this.removeClientContact }
            contacts={this.state.clients}/> } />
          <Route exact path="/create" 
            render={(props) => <CreateAgent {...props}  onCreateAgent = { this.createAgent }
            contacts={this.state.agents}/> } />         
          <Route exact path="/about" component={About} />  
          <Route exact path="/demo" component={Demo} />         
          <Route component={NoMatch} />
        </Switch>
        <Footer/>

       </div>
    );
  }
}

export default App;
