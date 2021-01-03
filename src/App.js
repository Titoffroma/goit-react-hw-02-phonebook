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
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          name: e.target.elements[0].value,
          number: e.target.elements[1].value,
          id: uuidv4(),
        },
      ],
      name: "",
      number: "",
    });
  };
  handleChange = (e) => {
    this.setState({ [e.target.getAttribute("id")]: e.target.value });
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
        <PhonebookCard>
          <Section title="Phonebook">
            <Form
              name={this.state.name}
              number={this.state.number}
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
