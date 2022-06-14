import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  // const [newItems, setNewItems] = useState();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === 'All') return true;

    return item.category === selectedCategory;
  });

  const searchResults = itemsToDisplay.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='ShoppingList'>
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        search={search}
      />
      <ul className='Items'>
        {searchResults.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
