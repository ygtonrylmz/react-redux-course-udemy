import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  // Special name -> contextType
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'İsim';
    return (
      <div className='ui field'>
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
