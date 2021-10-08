import React from 'react';
import CountriesList from './CountriesList';

const Countries = (props) => {
  return (
    <div className="">
      <CountriesList />
      {props.children}
    </div>
  );
};

export default Countries;
