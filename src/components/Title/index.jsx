import styled from 'styled-components';

const Title = styled.h2.attrs(({title}) => ({
    children: title || 'Title',
}))`
 color: #212121;
 font-size: ${props => props.fontSize || 22}px;
 text-align: center;
 padding: ${props => props.padding || 10}px;
 font-weight: bold;
`
export default Title;