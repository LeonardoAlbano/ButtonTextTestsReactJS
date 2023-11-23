// Importando o componente "Container" de um arquivo chamado "style"
import { Container, Links } from "./style";


import { Header } from "../../components/Header";

// Importando o componente "Button" do diretório "../../components/Button"
import { Button } from "../../components/Button";

import { Section } from "../../components/Section";

import { Tag } from "../../components/Tag";

import { ButtonText} from "../../components/ButtonText";



// Definindo um componente funcional chamado "Details"
export function Details() {
  
  // Retornando JSX, que é uma extensão de sintaxe para JavaScript recomendada pelo React
  return (
    // Renderizando o componente "Container"
    <Container>
      <Header />

      <ButtonText title="Excluir nota" />

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
          </li>

        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />

      </Section>

      <Button title="Voltar"/>
    </Container>
  );
}
