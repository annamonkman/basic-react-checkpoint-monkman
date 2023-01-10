import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import 'semantic-ui-css/semantic.min.css';
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400&family=Open+Sans:wght@300;400&family=Prosto+One&display=swap');
a {
  text-decoration: none;
  color: black;
}
body {
	background-color: #f2f2f2;
  font-family: 'Open Sans', sans-serif;
  margin: 0;
	padding: 0;
}
h2, h3, h4, button {
	font-family: 'Open Sans', sans-serif;
}
input, button {
	border: none;
	border-radius: none;
}
input:focus, textarea:focus, select:focus{
  outline: none;
}
button:hover {
	cursor: pointer;
}
`;

export default GlobalStyles;
