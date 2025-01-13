# dt-money

dt-money é uma aplicação de controle financeiro desenvolvida com React, TypeScript e Vite. A aplicação permite que os usuários gerenciem suas finanças pessoais, adicionando e visualizando transações.

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- ESLint
- Styled Components

## Instalação

Siga os passos abaixo para configurar e executar a aplicação localmente:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/dt-money.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd dt-money
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Uso

Após iniciar o servidor de desenvolvimento, você pode acessar a aplicação no seu navegador através do endereço `http://localhost:3000`. Utilize a interface para adicionar, editar e visualizar suas transações financeiras.

## Features
Inluir utilização de API para consumo de dados. 

[ ] Adicionar novas transações
[ ] Visualizar lista de transações
[ ] Filtrar transações por categoria
[ ] Exibir saldo total
[ ] Interface amigável e responsiva

## Configuração do ESLint

Se você estiver desenvolvendo uma aplicação de produção, recomendamos atualizar a configuração para habilitar regras de lint com reconhecimento de tipos:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // ...existing code...
  settings: { react: { version: '18.3' } },
  plugins: {
    // ...existing code...
    react,
  },
  rules: {
    // ...existing code...
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.


