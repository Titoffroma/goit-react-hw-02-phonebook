import { FormButton } from "../Form/FormStyled";
import { Contacts, ContactsListitem } from "./ContactsListStyled";

const ContactsList = ({ contactsList, filter, handleClick }) => {
  let list = contactsList.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (!list.length) list = contactsList;
  return (
    <Contacts>
      {list.map((li) => (
        <ContactsListitem key={li.id} name={li.name} number={li.number}>
          <span>{[li.name, li.number].join(", ")}</span>
          <FormButton data-id={li.id} onClick={handleClick}>
            Delete
          </FormButton>
        </ContactsListitem>
      ))}
    </Contacts>
  );
};

export default ContactsList;
