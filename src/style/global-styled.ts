import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }
  
  html {
    
      background: #018DED url(https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80);
      background-size: cover;
      font-family: 'helvetica neue';
      text-align: center;
      font-size: 10px;
    }
    html::before{
        content: "";
        opacity: 0.3;
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        background-color: #fff;
    }

    body {
      margin: 0;
      font-size: 2rem;
      display: flex;
      flex: 1;
      min-height: 100vh;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    #root{
      display: flex;
      flex:1;
      min-height: 100vh;
      align-items: center;
      justify-content: center;
    }
    .App{
      display: flex;
      flex:1;
      min-height: 100vh;
      align-items: center;
      justify-content: center;
    }
`;

export default GlobalStyle;
