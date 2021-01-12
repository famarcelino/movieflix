# Projeto MovieFlix DevSuperior

Esse é um sistema criado para que clientes e visitantes do serviço de streaming de filmes **MovieFlix** possam pesquisar por filmes através do título, subtítulo, gênero ou ano de produção.

Visitantes podem visualizar as avaliações registradas pelos clientes e também ver o trailer dos filmes, para realizar comentários é necessário estar autenticado no serviço.

## Objetivo
Nesse sistema é possível pesquisar filmes por categorias e visualizar os comentários inseridos pelos usuários Membros.

## Back-end
É um projeto que permitiu a fixação do aprendizado da linguagem Java usando Spring Boot e Maven, com banco de dados H2.

Foram criados alguns endpoints para consulta de usuários, filmes, gêneros e revisões (comentários) dos filmes.

A versão em "produção" do banco de dados foi criada nos servidores da Heroku.

## Front-end
O Front-end está implantado na Netlifly no endereço: https://francisco-movieflix.netlify.app/ .

Para testar a aplicação existem dois perfis, sendo um de VISITANTE (ROLE_VISITOR) e outro de MEMBRO (ROLE_MEMBER). A diferença entre os dois perfis é que um permite fazer revisões de filmes (perfil membro) e o outro não.

Segue informações para teste da aplicação:

- usuário visitante: bob@gmail.com com a senha 123456
- usuário membro: ana@gmail.com com a senha 123456
