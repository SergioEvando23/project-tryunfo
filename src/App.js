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
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCards: [],
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

      console.log(verifyFields);

      this.setState({
        isSaveButtonDisabled: !(verifyFields && verifyAttribute),
      });
    });
  }

  onSaveButtonClick(e) {
    e.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      saveCards,
    } = this.state;

    this.setState(() => ({
      saveCards: [{
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }, ...saveCards],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardImage: '',
        cardRare: 'normal',
        hasTrunfo: cardTrunfo,
        isSaveButtonDisabled: true,
      });
    });
  }

  render() {
    const { saveCards } = this.state;
    return (
      <div className="appComponent">
        <h1>Tryunfo</h1>
        <div className="appBody">
          <Form
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.onInputChange }
            { ...this.state }
          />
          <Card
            { ...this.state }
            onInputChange={ this.onInputChange }
          />
        </div>
        <h1>Cartas salvas</h1>
        <section className="deck">
          {
            saveCards.map((card, index) => (
              <Card className="savedCard" key={ index } { ...card } />
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
