import styled from "styled-components"

const Text = styled.p`
text-align: ${props => {
    if(props.textAlign) return props.textAlign
    else if(props.textAlignRight) return 'right'
    else if(props.textAlignLeft) return 'left'
    return 'center'
}};
word-break: normal;
font-size: ${props => (props.bodySmall ? '0.8em' : '1em')};
 `;

export default Text