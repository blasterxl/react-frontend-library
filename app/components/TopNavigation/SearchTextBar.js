import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchTextBar = ({searchText, onSearchTextChange}) => {
  return (
    <Input
     icon='search'
     value={searchText}
     onChange={e => onSearchTextChange(e.target.value)}
     placeholder='Search...' />
  );
};

export default SearchTextBar;
