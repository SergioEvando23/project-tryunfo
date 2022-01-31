import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label htmlFor="cardName">
          <p>Nome</p>
          <input
            value={ cardName }
            name="cardName"
            id="name"
            type="text"
            data-testid="name-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardDescription">
          <p>Descrição</p>
          <textarea
            value={ cardDescription }
            name="cardDescription"
            id="description"
            type="textarea"
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>
        <section>
          <label htmlFor="cardAttr1">
            <p>Attr01</p>
            <input
              value={ cardAttr1 }
              name="cardAttr1"
              id="attr1"
              type="number"
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr2">
            <p>Attr02</p>
            <input
              value={ cardAttr2 }
              name="cardAttr2"
              id="attr2"
              type="number"
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr3">
            <p>Attr03</p>
            <input
              value={ cardAttr3 }
              name="cardAttr3"
              id="attr3"
              type="number"
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>
        </section>
        <label htmlFor="cardImage">
          <p>Imagem</p>
          <input
            value={ cardImage }
            name="cardImage"
            id="image"
            type="text"
            placeholder="Url image"
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardRare">
          <p>Raridade</p>
          <select
            value={ cardRare }
            name="cardRare"
            id="rare"
            data-testid="rare-input"
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="cardcardTrunfo">
          <input
            value={ cardTrunfo }
            name="cardTrunfo"
            id="super"
            type="checkbox"
            placeholder="Super Tryunfo"
            checked={ cardTrunfo }
            data-testid="trunfo-input"
            onChange={ onInputChange }
          />
        </label>
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Add Card
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
