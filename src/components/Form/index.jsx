import React, { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from "../Button";

const Label = styled.label`
&:first-child {
  margin-right: 10px;
}
`
const FormButton = styled(Button)`
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
 &:hover {
     color: #212121;
 }
 &:focus {
     outline: none;
     border: 1px solid #212121;
 }
 &:active {
     box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
 }
 &:not(:last-child) {
     margin-right: 8px;
 }
`

export default class Form extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };
  render() {
    return (
      <form method="submit" onSubmit={this.props.handleSubmit}>
        <Label><strong>Name</strong><br/>
          <Button as="input"
            type="text"
            value={this.props.value}
            onChange={this.props.handleChange}
          />
        </Label>
        <FormButton>Add contact</FormButton>
      </form>
    );
  }
}
