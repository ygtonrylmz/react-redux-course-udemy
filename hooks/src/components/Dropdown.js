import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  // Dropdown un içine mi dışına mı tıkladığımızı anlamak için
  // Dropdown u oluşturan en tepedeki element e ref veriyoruz
  const ref = useRef();

  // RUN ONCE
  useEffect(() => {
    const onBodyClick = (event) => {
      // Tıklanılan element bizim ref elementinde var mı
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      // DONT render
      return null;
    }

    return (
      <div key={option.value} className='item' onClick={() => onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label className='label'>{label}</label>
        <div
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
          onClick={() => setOpen(!open)}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
        </div>
      </div>
      {label && label.includes('Color') ? (
        <div className='field'>
          <label className='label' style={{ color: selected.value }}>
            {`This text is ${selected.value}!`}
          </label>
        </div>
      ) : null}
    </div>
  );
};

export default Dropdown;
