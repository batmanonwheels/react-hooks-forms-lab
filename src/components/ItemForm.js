import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ItemForm({ onItemFormSubmit }) {
  const itemStateDefault = {
    id: uuid(),
    name: '',
    category: 'Produce',
  };

  const [itemData, setItemData] = useState(itemStateDefault);

  const handleItemDataChange = (e) => {
    const { name, value } = e.target;
    setItemData((previousItemData) => ({ ...previousItemData, [name]: value }));
    console.log(itemData);
  };

  const handleItemFormSubmit = (e) => {
    e.preventDefault();
    onItemFormSubmit(itemData);
    setItemData(itemStateDefault);
  };

  return (
    <form className='NewItem' onSubmit={handleItemFormSubmit}>
      <label>
        Name:
        <input
          type='text'
          name='name'
          onChange={handleItemDataChange}
          value={itemData.name}
        />
      </label>

      <label>
        Category:
        <select
          name='category'
          onChange={handleItemDataChange}
          value={itemData.category}
        >
          <option value='Produce'>Produce</option>
          <option value='Dairy'>Dairy</option>
          <option value='Dessert'>Dessert</option>
        </select>
      </label>

      <button type='submit'>Add to List</button>
    </form>
  );
}

export default ItemForm;
