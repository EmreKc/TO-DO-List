import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const Form = ({ handleAddItem, handleFilterItem }) => {
  const [itemValue, setItemValue] = useState('');
  const [itemValueFilter, setItemValueFilter] = useState('');


  const options = [ 
    'All', 'Done', 'Undone'
  ];
  
  const handleSubmitAndResetForm = ev => {
    ev.preventDefault();

    handleAddItem(itemValue);
    
    // Reset value
    setItemValue('');
  };


  const handleItemChange = ev => setItemValue(ev.target.value);
  const handleFilter = (ev) => {
    handleFilterItem(itemValueFilter)
    setItemValueFilter(ev && ev.value)};
    return (
    <div>
      <form method="POST" autoComplete="on" onSubmit={handleSubmitAndResetForm}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              id="new-todo-item"
              name="new-todo-item"
              placeholder="I want to do..."
              aria-label="Todo item description"
              value={itemValue}
              onChange={handleItemChange}
              autoFocus
            />
          </div>
          

          <div className="col-auto">
            <button
              type="submit"
              data-testid="form-submit"
              className="btn btn-primary"
              disabled={!itemValue}
              aria-label="Add todo item">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <div  >
            <Dropdown onChange={handleFilter} options={options} value={options[0]} placeholder="Select an option" />
          </div>

        </div>
      </form>
    </div>
  );
};

export default Form;
