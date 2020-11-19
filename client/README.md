# Frontend

Este projeto utilizou como base o [**react-scaffold**](https://github.com/pleaobraga/react-scaffold) um projeto open souce criado por mim que seria como um create-react-app, e eu criei todas as configurações do 0(webpack, lint, husk, babel, ...)

## Instalando as dependencias

```
yarn
```

## Iniciando o Projeto

Após instalar as dependências utilize o comando abaixo para iniciar a aplicação.

```
yarn start
```

Espere alguns segundos e automaticamente uma aba do seu navegador será iniciada rodando a aplicação

### Mudar a porta padrão

A porta padrão do projeto é 8080 mas caso deseje mudar, faça como o exemplo abaixo (mudando para a porta 3000)

```
yarn start -- --port=3000
```

## Criar a build do projeto

```
yarn build
```

## Testes

Os testes automatizados foram escritos usando as bibliotecas **Jest** e **Enzyme**.

O ambiente utilizado para o desenvolvimento foi o Linux ubunto, dessa forma devido a formatação de caracteres diferentes pode ser que algum teste baseado em caracteres quebre.

### Testar todo o Projeto

```
yarn test
```

### Conferindo a cobertura de Testes

A cobertura de testes escrita foi de **80%**

```
yarn test:coverage
```

## Documentação de interface

Esse Projeto utiliza o **storybook** como ferramenta de documentação dos elementos da UI, e para acessá-lo basta executar:

```
yarn storybook
```

## Arquitetura do Projeto

O projeto utiliza uma arquitetura baseada em **Atomic Design** e também utiliza os padrões **SOLID**

Abaixo podemos ver um pouco sobre a arquitetura do projeto

```
src
  api
  components
    Atom
    Molecule
    Organism
    UILess
  pages
  utils
  routes.js
  index
```

### Arquitetura dos componentes

```
Component
  index.js
  Component.test.js
  Component.stories.js
  Component.scss
  Component.jsx
```

Cada Componente possui seu próprio teste, stories, arquivo jsx, e um index para exportar o que for necessário

O componente tem fácil manutenibilidade devido a essa arquitetura, é facil de se manter pois está tudo centralizado, dentro da mesma pasta, e caso precise mudar algo, é só acessar a pasta do componente e fazer a mudança no arquivo desejado.

### Helpers

Na pasta Helpers se encontram os arquivos de funções gerais utilizadas na aplicação facilitando assim no reaproveitamento de código

## Dynamic Import e Performance

Nos dias atuais precisamos pensar em performance, caso contrário a aplicação poderá não oferecer uma boa experiência para o usuário.

Existe nesse projeto um componente chamado **DynamicImport**,integrado ao webpack e ele basicamente importa dinamicamente apenas o bundle que aquela página está usando no momento, sendo assim reduzindo muitas vezes a quantidade de arquivos a serem requisitados pelo browser ao carregar uma tela.

Ele foi aplicado no arquivo **routes.js**, dessa forma cada pagina que voce importar irá criar um bundle otimizado automaticamente.

A seguir um exemplo para de como utilizar o **DynamicImport**

```
const WelcomePage = () => (
 <DynamicImport
   loadComponent={() =>
     import(/*  webpackChunkName: "welcomePage" */ './pages/WelcomePage')
   }
   ErrorComponent={ErrorPage}
   LoadingComponent={() => <Loading />}
 />
)
```

Esse componente é melhor que o **React.lazy** pois ele possui 3 estados diferentes:

- Loading
- Error
- Component

O que difere do **React.lazy** e **React.Suspense** que apenas lidam com apenas 2 estados:

- Loading
- Component

## Vendors

O webpack esta configurado para criar o arquivo de vendors com as bibliotecas comuns da aplicação como por exemplo react, redux ...
