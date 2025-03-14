# Front-End Challenge - Buupe 🚀

Este repositório contém a solução para o desafio técnico da Buupe. O objetivo deste desafio é demonstrar habilidades em desenvolvimento front-end utilizando as tecnologias mais recentes e melhores práticas. O projeto consome dados de uma API local utilizando o `json-server` e apresenta um layout funcional, sem o uso de bibliotecas de componentes prontos.

## 📦 Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para a construção da interface.
- **Vite**: Ferramenta de build e desenvolvimento para projetos React, com suporte ao TypeScript.
- **TypeScript**: Superconjunto de JavaScript com tipagem estática.
- **React Router DOM**: Para navegação entre as páginas do aplicativo.
- **TanStack Query**: Para gerenciamento de requisições HTTP de forma eficiente.
- **Zustand**: Biblioteca para gerenciamento de estado global.
- **Tailwind CSS**: Framework de estilização utilitária para um design flexível.
- **Lucide Icons**: Conjunto de ícones customizáveis para o layout.
- **JSON Server**: API REST fake para desenvolvimento local.

## 🌐 API Utilizada

A API agora é local, utilizando o `json-server` para simular uma API REST. Os dados estão armazenados em um arquivo `db.json`.

Exemplo de estrutura do `db.json`:

```json
{
  "products": [
    {
        "id": 1,
        "productName": "Produto 1",
        "productDescription": "Descrição do Produto 1",
        "productImg": "https://st2.depositphotos.com/1017228/9399/i/450/depositphotos_93990140-stock-photo-cheerful-woman-showing-blank-smartphone.jpg",
        "productPrice": "R$ 10,00"
    },
    {
        "id": 2,
        "productName": "iPhone 12",
        "productDescription": "Apple iPhone 12 com 64GB",
        "productImg": "https://st2.depositphotos.com/1017228/9399/i/450/depositphotos_93990140-stock-photo-cheerful-woman-showing-blank-smartphone.jpg",
        "productPrice": "R$ 20,00"
    },
]
}
```

## 🛠 Funcionalidades

### Telas Desenvolvidas

1. **Tela de Login**:
   - Permite ao usuário realizar login utilizando um formulário simples.
   
2. **Tela de Cadastro**:
   - Permite ao usuário realizar o cadastro utilizando um formulário de criação de conta.
   
3. **Tela de Listagem**:
   - Exibe os dados consumidos da API local (ex: produtos.).

### Funcionalidades Adicionais

- **Cache (Front-End)**:
   - Utilização de **TanStack Query** para cache de dados e evitar requisições desnecessárias à API.
   
- **Gerenciamento de Estado**:
   - Uso do **Zustand** para gerenciamento global de estado, facilitando a manutenção e comunicação entre componentes.

- **Responsividade**:
   - O layout é totalmente responsivo, adaptando-se a diferentes tamanhos de tela usando **Tailwind CSS**.

## ⚙️ Como Rodar o Projeto

1. Clone este repositório:

```bash
https://github.com/MarcelloFreitasMoraes/desafio-frontend-buupe.git
```

2. Acesse o diretório do projeto:

```bash
cd desafio-frontend-buupe
```

3. Instale as dependências:

```bash
npm install
```

4. Instale o `json-server` globalmente (caso não tenha instalado):

```bash
npm install -g json-server
```

5. Inicie o `json-server` para servir a API local:

```bash
json-server --watch db.json --port 3000
```

6. Rode o projeto localmente:

```bash
npm run dev
```

7. Abra o navegador e acesse:

```bash
http://localhost:5173/
```

# autor
### Marcelo Moraes

