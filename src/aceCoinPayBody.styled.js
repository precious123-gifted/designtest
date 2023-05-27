import styled from 'styled-components';
import dots from './assets/dots.png'


export const AceStyle = styled.div`
 .body{
  user-select : none;

  .dash{

    background-image:url(${dots});
    background-size : contain;
  }
 }

`;
