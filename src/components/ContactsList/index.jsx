import styled from 'styled-components';

const Contacts = styled.ul`
  list-style-type: none;
`
const ContactsListitem = styled.li.attrs((props) => ({
  children: [props.name, props.number].join(':  '),
}))`
  font-weight: bold;
  font-size: 14px;
`

const ContactsList = ({ contactsList, filter }) => {
  console.log(filter)
  let list = contactsList.filter( contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  if (!list.length) list = contactsList;
  return (
    <Contacts>
        {list.map(li => (<ContactsListitem key={li.id} name={li.name} number={li.number}/>))}
    </Contacts>
  )
}

export default ContactsList