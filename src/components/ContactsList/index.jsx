import styled from 'styled-components';
import { FormButton } from "../Form";

const Contacts = styled.ul`
  list-style-type: none;
`
const ContactsListitem = styled.li`
  font-weight: bold;
  font-size: 14px;
`

const ContactsList = ({ contactsList, filter }) => {
  let list = contactsList.filter( contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  if (!list.length) list = contactsList;
  return (
    <Contacts>
      {list.map(li => (<ContactsListitem key={li.id} name={li.name} number={li.number}>
        <span>{[li.name, li.number].join(', ')}</span>
        <FormButton data-id={li.id}>Delete</FormButton>
      </ContactsListitem>))}
    </Contacts>
  )
}

export default ContactsList