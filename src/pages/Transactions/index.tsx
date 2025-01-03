import { Header } from "../../components/header";
import { Summary } from "../../components/Summary";
import {
  PriceHighLight,
  TrasactionsContainer,
  TrasactionsTable,
} from "./styles";

export function Trasactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TrasactionsContainer>
        <TrasactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>

              <td>
                <PriceHighLight variant="incone">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2024</td>
            </tr>
            <tr>
              <td width="50%">Comida</td>
              <td>
                <PriceHighLight variant="outcone">- R$ 60,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>13/04/2024</td>
            </tr>
          </tbody>
        </TrasactionsTable>
      </TrasactionsContainer>
    </div>
  );
}
