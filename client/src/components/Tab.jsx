import React from 'react';

const Tab = ({ id, displayTabId, setDisplayTabId }) => {
  const value = (id === "watched-tab") ? 'Watched' : 'To Watch';
  var selected = (id === displayTabId) ? "selected" : "not-selected";
  const toggleBehavior = () => {
    setDisplayTabId(id);
  };
  return (
    <button id={ id } className={ selected } onClick={ toggleBehavior }>{ value }</button>
  );
};

export default Tab;

