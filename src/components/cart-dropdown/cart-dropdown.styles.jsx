import styled from 'styled-components';

import { 
  BaseButton, 
  GoogleSignInButton, 
  InvertedButton 
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;

    /* If BaseButton, GoogleSignInButton, or InvertedButton get nested inside of CartDropDownContainer, use this styling. */
  ${BaseButton}, 
  ${GoogleSignInButton}, 
  ${InvertedButton} {
    margin-top: auto;
    font-size: 12px;
  }
`

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;

    /* ${CartDropdownContainer} { // Nesting, targeting selector. Target any CartDropdownContainer child of EmptyMessage.
      position: 1000px;
    } */
`

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;

    /* I'm adding this part to prevent the horizontal and vertical scroll bar from appearing. Using Chrome 100.0.4896.88 */
    max-width: 100%;
    overflow-x: auto;
    overflow-y: auto;
`