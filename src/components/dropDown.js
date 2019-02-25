import React, { Component } from 'react';
import '../style/style.scss';

export default class DropDown extends Component {

  state = {
    menuIsOpen: false,
    title: 'Drop Down',
  }

  selectItem = (title) => {
    this.setState({
      title,
      menuIsOpen: false,
    })
  }

  render() {        
    return (
      <div className="DropDown">
        <div
         className="DropDown__header" 
         onClick={() => {           
           this.setState({
             menuIsOpen: !this.state.menuIsOpen,
           })
         }}
        >{this.state.title}</div>
        <ul className={`DropDown__list${this.state.menuIsOpen ? '' : '--hide'}`}           
        >
          {this.props.children({
            selectItem: this.selectItem,
            dropDownTitle: this.state.title,
          })}
        </ul>
      </div>
    )
  }
}

DropDown.Item = (props) => {  
  const { children, selectItem, dropDownTitle } = props;

  
  return (
    <li
     className={`DropDown__item${dropDownTitle === children ? '--active' : ''}`}
     onClick={() => {
       selectItem(children)
     }}
     > 
     { children }
     </li>
  )
}