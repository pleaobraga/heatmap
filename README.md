# Heatmap

Este projeto consiste em cadastrar e visualizar dados populacionais através de um mapa de calor.

A aplicação é baseada em **React** e utiliza as seguintes bibliotecas:

- React Router Dom
- Jest
- Enzyme
- Storybook
- Babel
- Webpack

Este projeto possui um back-end(pasta server) e um front-end(pasta client)

o servidor é baseado em json server

# Quick Start

certifique-se que a versão do node instalada é maior que a 12.0.0 a versão do yarn seja maior ou igual a 1.22.0

## Servidor

### Instalando json server

utilize o comando abaixo para instalar o json server

```
npm install -g json-server
```

para maiores informações acesse o link do repositório [link do repositorio](https://github.com/typicode/json-server)

### Iniciar o servidor

Dentro da pasta **server** utilize o seguinte comando

```
yarn start
```

## Client

os comandos a seguir deverão ser executados dentro da pasta **client**

## Instalar as dependencias

```
yarn
```

## Iniciando o Projeto

Após instalar as dependências utilize o comando abaixo para iniciar a aplicação.

```
yarn start
```

Espere alguns segundos e automaticamente uma aba do seu navegador será iniciada rodando a aplicação

Para maiores informações a respeito da parte de front-end [clique aqui](https://github.com/pleaobraga/heatmap/client)

## A solução do problema

Foi criado uma aplicação baseada em React, e não foi utilizado a ferramenta **create-ract-app** como sua base, mas sim um projeto chamado [**react-scaffold**](https://github.com/pleaobraga/react-scaffold) que é de um projeto open souce de minha autoria, onde o configurei do zero (webpack, eslint...).

Utilizando o **react-scaffold** como base foi-se pensado em uma forma de criar uma aplicação fácil de usar e de se manter. Dessa forma foi-se utilizado o **Storybook** (documentação da UI) para a criação dos componentes, todos feitos sem utilizar nenhum framework de CSS, tudo feito a mão e do zero. A aplicação utiliza técnicas modernas de **CSS** como por exemplo _Flexbox_, _Sass_, e o layout é **Responsivo**

Os componentes foram pensados utilizando a arquitetura **Atomic Design** e Principios **SOLID** e utilizando boas práticas de **Clean Code**, tendo em mente que a aplicação pode crescer e fazendo os componentes serem reutilizáveis

Para a solução do problema proposto foi utilizado o mapa do google para a visualização do mapa de calor.

Foi utilizado Redux na aplicação mais para mostrar conhecimento em Redux, pois devido a complexidade do problema não seria necessário utilizar o mesmo.

Foram escritos testes unitarios com cobertura de 80% utilizando jest e enzyme.

## Observações

o arquivo .env só foi comitado por motivos de facilitar a correção do teste, assim que o mesmo for corrigido eu deletarei essa chave da minha google cloud e não cometerei mais esse arquivo.

Para mostrar conhecimentos foram utilizados o mínimo de bibliotecas possível, caso a aplicação fosse comercial provavelmente usaria as seguintes bibliotecas para me ajudar Formik e yup para o formulário e material ui para o visual

## Melhorias

- Utilizar uma API para validar as informações do cep com o número a latitude e longitude (o google possui esse produto mas eh pago, por isso não foi implementado)

- Melhorar o layout da aplicação para ficar mais bonito utilizando um layout criado por um designer.
