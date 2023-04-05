import React                    from "react";
import Cleave                   from 'cleave.js/react';
import CleavePhone              from 'cleave.js/dist/addons/cleave-phone.us'
import { Col, Row, Container }  from "../../components/Grid";
import Jumbotron                from "../../components/Jumbotron";
import "./style.css"

class Demo extends React.Component {
 
    constructor(props, context) {
        super(props, context);

        this.state = {
            creditCardType:     '',
            creditCardRawValue: '',
            phoneRawValue:      '',
            dateRawValue:       '',
            numeralRawValue:    '',
            customRawValue:     ''
        };
        
        this.onCreditCardChange = this.onCreditCardChange.bind(this);
        this.onCreditCardTypeChanged = this.onCreditCardTypeChanged.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onNumeralChange = this.onNumeralChange.bind(this);
        this.onCustomChange = this.onCustomChange.bind(this);
    }

    onCreditCardChange(event) {
        this.setState({creditCardRawValue: event.target.rawValue});
    }

    onPhoneChange(event) {
        this.setState({phoneRawValue: event.target.rawValue});
    }

    onDateChange(event) {
        this.setState({dateRawValue: event.target.rawValue});
    }

    onNumeralChange(event) {
        this.setState({numeralRawValue: event.target.rawValue});
    }

    onCustomChange(event) {
        this.setState({customRawValue: event.target.rawValue});
    }

    onCreditCardTypeChanged(type){
        this.setState({creditCardType: type});
    }

    render() {
        return (
            <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1 className="text-center">FORMATS</h1>
                  <h1 className="text-center">
                <Cleave placeholder="Credit card number" options={{creditCard: true, onCreditCardTypeChanged: this.onCreditCardTypeChanged}}
                        onChange={this.onCreditCardChange}/>

                <Cleave placeholder="Phone number (US)" options={{phone: true, phoneRegionCode: 'US'}}
                        onChange={this.onPhoneChange}/>

                <Cleave placeholder="Date (yyyymmdd)" options={{date: true, datePattern: ['Y', 'm', 'd']}}
                        onChange={this.onDateChange}/>

                <Cleave className="input-numeral" placeholder="Numeral" options={{numeral: true, numeralThousandsGroupStyle: 'thousand'}}
                        onChange={this.onNumeralChange}/>

                <Cleave placeholder="Custom (4-3-3)" options={{blocks: [4,3,3], delimiter: '-', numericOnly: true}}
                        onChange={this.onCustomChange}/>

                <div className="raw-values">
                 <h1 className="text-center">Raw Values</h1>                  
                    <p>credit card: {this.state.creditCardRawValue}</p>
                    <p>credit card type: {this.state.creditCardType}</p>
                    <p>phone: {this.state.phoneRawValue}</p>
                    <p>date: {this.state.dateRawValue}</p>
                    <p>numeral: {this.state.numeralRawValue}</p>
                    <p>custom: {this.state.customRawValue}</p>
                </div>
                </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
        );
    }
}
 
   


export default Demo;