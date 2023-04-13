import React from 'react';

const Tab = ({ id, displayTabId, setDisplayTabId }) => {
  console.log(setDisplayTabId);
  const value = (id === "watched-tab") ? 'Watched' : 'To Watch';
  var selected = (id === displayTabId) ? "selected" : "not-selected";
  const toggleBehavior = () => {
    console.log(id);
    console.log(displayTabId);
    setDisplayTabId(id);
  };
  return (
    <button id={ id } className={ selected } onClick={ toggleBehavior }>{ value }</button>
  );
};

export default Tab;

