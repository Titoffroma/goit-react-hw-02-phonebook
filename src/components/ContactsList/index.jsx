import styled from 'styled-components';

const Contacts = styled.ul`
  list-style-type: none;
`
const ContactsListitem = styled.li.attrs((props) => ({
    children: props.name,
}))`
  font-weight: bold;
  font-size: 14px;
`

const ContactsList = ({contactsList}) => (
    <Contacts>
        {contactsList.map(li => (<ContactsListitem key={li.id} name={li.name}/>))}
    </Contacts>
)

export default ContactsList