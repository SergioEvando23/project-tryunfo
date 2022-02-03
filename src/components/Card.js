import React from 'react';
import PropTypes from 'prop-types';

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
          <h3 data-testid="attr1-card">{cardAttr1 ? `attr: ${cardAttr1}` : 'attr: 0'}</h3>
          <h3 data-testid="attr2-card">{cardAttr2 ? `attr: ${cardAttr2}` : 'attr: 0'}</h3>
          <h3 data-testid="attr3-card">{cardAttr3 ? `attr: ${cardAttr3}` : 'attr: 0'}</h3>
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
