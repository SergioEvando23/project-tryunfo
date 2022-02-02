import React from 'react';
import PropTypes from 'prop-types';
import './css/Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="cardComponent">
        <h2 data-testid="name-card">
          {cardName ? `${cardName}` : 'digite o nome'}
        </h2>
        {cardImage ? <img
          className="cardImage"
          src={ cardImage }
          data-testid="image-card"
          alt={ cardName }
        /> : 'adicione uma imagem jpg, png ou gif'}
        <p data-testid="description-card">
          {cardDescription}
        </p>
        <section className="power">
          <h3 data-testid="attr1-card">{cardAttr1 ? `atk1: ${cardAttr1}` : 'atk1: 0'}</h3>
          <h3 data-testid="attr2-card">{cardAttr2 ? `atk2: ${cardAttr2}` : 'atk2: 0'}</h3>
          <h3 data-testid="attr3-card">{cardAttr3 ? `atk3: ${cardAttr3}` : 'atk3: 0'}</h3>
        </section>
        <p data-testid="rare-card">{cardRare}</p>
        {cardTrunfo ? <h4 data-testid="trunfo-card">Super Trunfo</h4> : null}

      </div>
    );
  }
}

Card.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
