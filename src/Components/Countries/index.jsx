import React from 'react';
import CountriesList from './CountriesList';

const Countries = (props) => {
  return (
    <div className="flex">
      <CountriesList />
      {props.children}
    </div>
  );
};

export default Countries;
