<div align="center">
  <img alt="AssinaSaude" src="front-end/assets/logo-assina-saude.png" width="300px" />
</div>

<h1 align="center">
  Teste para a <em>Assina</em> Saúde utilizando React
</h1>

<div align="center">
  <strong>Repositório dedicado a realização do teste, para a vaga de front-end, da empresa Assina Saúde.</strong>
</div>

</br>

Linguagem | Editor | Tecnologias usadas para o desenvolvimento:

![Linux](https://img.shields.io/badge/-Linux-222222?style=flat&logo=linux&logoColor=FCC624)
[![Visual Studio Code](https://img.shields.io/badge/-VSCode-444444?style=flat&logo=visual-studio-code&logoColor=007ACC)](https://github.com/microsoft/vscode)
![React](https://img.shields.io/badge/-React-222222?style=flat&logo=React&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/-JavaScript-000000?style=flat&logo=javascript)
![Git](https://img.shields.io/badge/-Git-222222?style=flat&logo=git&logoColor=F05032)
![GitHub](https://img.shields.io/badge/-GitHub-222222?style=flat&logo=github&logoColor=181717)

<h2 align="center" >Sobre o teste</h2>

<p>O desafio proposto foi desenvolver um prontuário eletrônico de saúde simplificado.
 O aplicativo será composto por 3 telas que interajam com uma API Rest.

 Uma API retorna uma lista de 'queixas' que o usuário deverá selecionar para preencher o cadastro do prontuário, a mesma coisa acontece com a API que retorna outra lista de 'doenças' que será selecionada pelo usuário. E por fim, o campo do histórico, onde deverá ser explicado em algumas palavras qual o histórico do incômodo do paciente.
</p>

<h2 align="center" >Funcionalidade</h2>

<p>A primeira tela (Listagem vazia) contém somente um botão "Adicionar novo prontuário", que nos leva para a tela de Cadastro.

Essa tela é composta por 3 campos obrigatórios. Essa tela funciona como um formulário a ser preenchido, o primeiro campo "Queixa Principal" tem como opções o retorno da API /queixa. O segundo campo sendo, também, um retorno da API, nos possibilita selecionar mais de uma opção.
O input de texto, onde deverá ser digitado no mínimo 10 caracteres, também é salvo no cadastro.

Após todos esses campos serem devidamente preenchidos, o botão salvar, como ja diz, salva o cadastro e encaminha o usuário para a tela inicial com o prontuário salvo.
</p>

<h2 align="center" >Organização do projeto</h2>

**assets** - Pasta dedicada à imagem da aplicação

**components** - Componentes reutilizáveis da aplicação

**styles** - Definição de estilos globais e do theme, seguindo a estilização do desafio da Assina Saúde.

<h2 align="center" >Tutorial para rodar local</h2>

1. Clone este repositório utilizando o comando <code>git clone https://github.com/carlanakajuni/prontuario-eletronico/tree/master</code>;
2. Entre na pasta clonada e, depois, na pasta *frontend*;
3. Rode o comando npm install no terminal, para a instalação das dependências;
4. Rode o comando npm start no terminal, uma janela do chrome com o projeto abrirá.
