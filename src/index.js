import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DropDown from './components/dropDown';

function App() {
  return (
    <div>
      <DropDown>
        {(childProps) => (
          <div>
            <DropDown.Item value="select" {...childProps}>Dropdown</DropDown.Item>
            <DropDown.Item value="delete" {...childProps}>Delete</DropDown.Item>
            <DropDown.Item value="rename" {...childProps}>Rename</DropDown.Item>
            <DropDown.Item value="preview" {...childProps}>Preview</DropDown.Item>
            <DropDown.Item value="other" {...childProps}>Separated Link</DropDown.Item>
          </div>
        )}
      </DropDown>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
