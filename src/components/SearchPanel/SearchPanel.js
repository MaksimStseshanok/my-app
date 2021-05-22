import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SearchPanel.scss';

function SearchPanel() {
  const [searchValue, setSearchValue] = useState('');
  const inputEl = useRef(null);
  const history = useHistory();

  const handleClick = () => {
    if (searchValue.length) {
      history.push(`/search/${searchValue.replace(/ /g, '+')}`);
      setSearchValue('');
      inputEl.current.value = '';
    }
  };

  return (
    <div className="search-panel">
      <input
        ref={inputEl}
        onChange={(event) => setSearchValue(event.target.value)}
        className="search-panel__input"
        type="text"
        placeholder="Search..."
      />
      <button onClick={handleClick} className="search-panel__button">
        <span className="material-icons">search</span>
      </button>
    </div>
  );
}

export default SearchPanel;
