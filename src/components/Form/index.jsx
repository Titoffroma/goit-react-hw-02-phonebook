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
  state = {
    name: "",
    number: "",
  };
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };
  clearValue = (e) => {
    this.setState({ name: "", number: "" });
    this.props.handleSubmit(e);
  }
  handleChange = (e) => {
    this.setState({ [e.target.getAttribute("id")]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.clearValue}>
        <Label><strong>Name</strong><br/>
          <Button as="input"
            type="text"
            required
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Label>
        <br/>
        <Label><strong>Number</strong><br/>
          <Button as="input"
            type="tel"
            required
            id="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </Label>
        <br/>
        <FormButton>Add contact</FormButton>
      </form>
    );
  }
}
