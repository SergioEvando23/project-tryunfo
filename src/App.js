import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState(() => ({
      [name]: value,
    }), () => {
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
      } = this.state;

      const maximumAttributeValue = 90;
      const maxAttributes = 210;
      const toNumberAttr1 = parseFloat(cardAttr1);
      const toNumberAttr2 = parseFloat(cardAttr2);
      const toNumberAttr3 = parseFloat(cardAttr3);
      const sumAttrs = (toNumberAttr1 + toNumberAttr2 + toNumberAttr3) <= maxAttributes;
      const getMaxAttr = Math.max(cardAttr1, cardAttr2, cardAttr3);
      const getMinAttr = Math.min(cardAttr1, cardAttr2, cardAttr3);
      const verifyAttribute = getMaxAttr <= maximumAttributeValue && getMinAttr >= 0;
      const verifyFields = !!(cardName && cardDescription && cardImage) && sumAttrs;

      this.setState({
        isSaveButtonDisabled: !(verifyFields && verifyAttribute),
      });
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="appComponent">
        <div>
          <h1>Tryunfo</h1>
          <Form
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.onInputChange }
            { ...this.state }
          />
        </div>
        <Card
          { ...this.state }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
