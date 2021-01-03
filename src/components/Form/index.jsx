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
margin-top: 10px;
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
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };
  render() {
    return (
      <form method="submit" onSubmit={this.props.handleSubmit}>
        <Label><strong>Name</strong><br/>
          <Button as="input"
            type="text"
            required
            id="name"
            value={this.props.name}
            onChange={this.props.handleChange}
          />
        </Label>
        <br/>
        <Label><strong>Number</strong><br/>
          <Button as="input"
            type="tel"
            required
            id="number"
            value={this.props.number}
            onChange={this.props.handleChange}
          />
        </Label>
        <br/>
        <FormButton>Add contact</FormButton>
      </form>
    );
  }
}
