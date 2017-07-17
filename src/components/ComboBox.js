import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
// Populate a combo box (a SelectField in Material-UI) by calling a Node server that will simulate a database retrieval and return a list of names, or fruits or presidents or anything. There will be no database work involved. You will hard code the array that you return.

//Code the SelectField so that, when the user clicks on it, it opens (standard procedure) and shows the list returned from Node.

// Then, when the user clicks on an item in the list, display it in a pop-up dialog (also a Material-UI control) with a nice message like: You chose xxxxxx. The user should be able to close the dialog and repeat the process.



class ComboBox extends Component {

  constructor(){
    super();

    this.state = {
      value: 0,
      open: false,
    };
  }



  handleChange = (event, index, value) =>
  this.setState({value})

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };



  render(){
    let render_scope = this

    let list = ["Apple", "Orange", "Mango", "Peach"]
    const actions = [
      <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={this.handleClose}
      />,
      <FlatButton
      label="Submit"
      primary={true}
      keyboardFocused={true}
      onTouchTap={this.handleClose}
      />,
    ];

    let menuMap = list.map(function(element, index){
      return <MenuItem
      value={index}
      primaryText={element}
      onTouchTap={render_scope.handleOpen}/>
    })

    return <div>

      <div>
        <SelectField
        value={this.state.value}
        onChange={this.handleChange}>

        {menuMap}

        </SelectField>

        <Dialog
        title="Your Selection"
        actions={actions}
        modal={false}
        open={this.state.open}
        onRequestClose={this.handleClose}>

          You selected {list[this.state.value]}

        </Dialog>

      </div>
    </div>
  }

}

export default ComboBox;
