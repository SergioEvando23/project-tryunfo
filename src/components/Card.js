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
      <div>
        <h2 data-testid="name-card">
          {cardName}
        </h2>
        <img
          src={ cardImage }
          data-testid="image-card"
          alt={ cardName }
        />
        <p data-testid="description-card">
          {cardDescription}
        </p>
        <h3 data-testid="attr1-card">{ cardAttr1 }</h3>
        <h3 data-testid="attr2-card">{ cardAttr2 }</h3>
        <h3 data-testid="attr3-card">{ cardAttr3 }</h3>
        <p data-testid="rare-card">{ cardRare }</p>
        { cardTrunfo ? <h3 data-testid="trunfo-card">Super Trunfo</h3> : null}

      </div>
    );
  }
}

Card.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
