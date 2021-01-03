import React, { Component } from "react";
import PhonebookCard from "./components/PhonebookCard";
import Section from "./components/Section";
import Form from "./components/Form";
import ContactsList from "./components/ContactsList";
import Button from "./components/Button";
import Title from "./components/Title";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const duplicate = this.state.contacts.filter(
      (contact) => contact.name === e.target.elements[0].value
    );
    if (duplicate.length)
      return alert(`${duplicate[0].name} is already in contacts`);
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: e.target.elements[0].value,
          number: e.target.elements[1].value,
          id: uuidv4(),
        },
      ],
    });
    e.target.elements[0].value = "";
    e.target.elements[1].value = "";
  };
  handleChange = (e) => {
    this.setState({ [e.target.getAttribute("id")]: e.target.value });
  };
  handleClick = (e) => {
    if (e.target.hasAttribute("data-id")) {
      const contacts = this.state.contacts.slice();
      const toDel = contacts.filter(
        (contact) => contact.id === e.target.dataset.id
      );
      const index = contacts.indexOf(toDel[0]);
      contacts.splice(index, 1);
      this.setState({
        contacts: contacts,
        filter: "",
      });
    }
  };
  render() {
    return (
      <>
        <Section
          title="My Phonebook App"
          fontSize={30}
          padding={20}
          tagName="h1"
        />
        <PhonebookCard onClick={this.handleClick}>
          <Section title="Phonebook">
            <Form
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          </Section>
          <Section title="Contacts">
            <Title
              as="h3"
              title="Find contacts by name"
              fontSize="16"
              textAlign="left"
            />
            <Button
              as="input"
              type="text"
              id="filter"
              onChange={this.handleChange}
              value={this.state.filter}
            />
            <ContactsList
              contactsList={this.state.contacts}
              filter={this.state.filter}
            />
          </Section>
        </PhonebookCard>
      </>
    );
  }
}
