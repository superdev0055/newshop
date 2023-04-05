
//////////////////////////////////////////////////////////////////////////
/////////////////  Component To Create New Contacts    //////////////////
////////////////////////////////////////////////////////////////////////

import React, {Component} from 'react'
import { Link }           from "react-router-dom"
import uuidv4             from 'uuid/v4'
import ImageInput         from './ImageInput'
import serializeForm      from 'form-serialize'

class CreateAgent extends Component {

  handleSubmit = (e) => {
    e.preventDefault()   
    const values = serializeForm(e.target, {hash: true})
    if (this.props.onCreateAgent) {
        values.id = uuidv4()
        values.name = values.firstname + " " + values.lastname
        console.log(`step 0`)
        console.log(values)   
        this.props.onCreateAgent(values)
        this.props.history.push('/') 
    }     
  }
  
  render() {
    return (
      <div>
        <Link className="close-create-contact" to="/">Close</Link>
        <form onSubmit={this.handleSubmit} className="create-contact-form">
            <ImageInput
              className="create-contact-avatar-input"
              name="avatarURL"
              maxHright={64}
            />
            <div className="create-contact-details">
              <input type="text" name="firstname" placeholder="First Name" />
              <input type="text" name="lastname" placeholder="Last Name" />
              <input type="text" name="category" placeholder="Category" />
              <input type="number" name="price" placeholder="Price" />
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="cell" placeholder="Cell" />
              <button>Add Bot</button>
            </div>
        </form>
      </div>
    )
  }

}

export default CreateAgent