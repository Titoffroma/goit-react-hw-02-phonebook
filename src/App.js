import React, { Component } from "react";
import PhonebookCard from "./components/PhonebookCard";
import Section from "./components/Section";
import Form from "./components/Form";
import ContactsList from "./components/ContactsList";
import { v4 as uuidv4 } from "uuid";

export default class App extends Component {
  state = {
    contacts: [],
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
            <ContactsList contactsList={this.state.contacts} />
          </Section>
        </PhonebookCard>
      </>
    );
  }
}
