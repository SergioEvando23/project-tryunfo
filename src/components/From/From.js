import React from 'react';

class From extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <p>Nome</p>
          <input name="name" id="name" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="description">
          <p>Descrição</p>
          <input
            name="description"
            id="description"
            type="textarea"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Attr01
          <input name="attr1" id="attr1" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          Attr02
          <input name="attr2" id="attr2" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          Attr03
          <input name="attr3" id="attr3" type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          Imagem
          <input name="image" id="image" type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rare">
          <p>Raridade</p>
          <select name="rare" id="rare" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="super">
          <input name="super" id="super" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button data-testid="save-button" type="submit">Add Card</button>
      </form>
    );
  }
}

export default From;
