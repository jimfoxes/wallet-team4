import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


body {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  background-color: #f4f5f6;
  color: #000;
  font-weight: 400;
}

h1 {
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  padding: 36px 0 32px 0;
}

.container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
}

a {
    color: #000;
    text-decoration: none;
    &:hover {
      color: #1fa46c;
    }
}
`

export default GlobalStyle
