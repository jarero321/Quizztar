import { createGlobalStyle } from 'styled-components';
// image loading
import Background from "../img/Background.svg";
const GlobalStyle = createGlobalStyle`
/* font Revalia  */
@import url('https://fonts.googleapis.com/css2?family=Revalia&display=swap');

 /* reset css  */
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
 }
 body {
     font-family: "Revalia", cursive;
     background-image: url(${Background});
     background-size:cover;
     background-repeat:no-repeat;
     overflow:hidden;

 }
`;
export default GlobalStyle;