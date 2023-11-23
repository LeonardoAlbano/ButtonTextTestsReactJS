// Importa a função styled da biblioteca styled-components, 
//que é usada para criar componentes estilizados.
import styled from "styled-components";

// Cria um componente estilizado chamado Container usando a 
//função styled.div
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content"
  ;

`;

export const Links = styled.ul`
  list-style: none;

  >li{
    margin-top: 12px;

    >a{
    color: ${({ theme }) => theme.COLORS.WHITE}
    }
  }


`
