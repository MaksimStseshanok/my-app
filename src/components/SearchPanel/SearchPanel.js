import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchPanel.scss';

function SearchPanel() {
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    if (searchValue) {
      history.push(`/search/${searchValue.replace(/ /g, '+')}`);
      setSearchValue('');
    }
  };

  return (
    <form className="search-panel">
      <input
        onChange={(event) => setSearchValue(event.target.value)}
        className="search-panel__input"
        type="text"
        placeholder="Search..."
        value={searchValue}
      />
      <button onClick={handleClick} className="search-panel__button">
        <span className="material-icons">search</span>
      </button>
    </form>
  );
}

export default SearchPanel;
