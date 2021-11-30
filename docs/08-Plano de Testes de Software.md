# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

|Caso de Teste| CT 01 – Cadastrar, alterar e excluir dados de veículos  |
|--|--|
|Requisitos Associados| RF-001 - O sistema deve permitir cadastrar, alterar e excluir informações sobre veículos elétricos|
|Objetivo do Teste| Verificar se os veículos foram cadastrados com sucesso, verificar se é possível alterar e excluir dados.
|Sequência| • Acessar a página com o navegador<br> • Efetuar o login como usuário<br> • Cadastrar dados dos veículos
|Critérios de Êxito| Todos os dados foram cadastrados com sucesso.

|Caso de Teste| CT 02 – Cadastrar, alterar e excluir dados de veículos  |
|--|--|
|Requisitos Associados| RF-002 - O sistema deve permitir cadastrar, alterar e excluir imagens e vídeos dos veículos |
|Objetivo do Teste| Inserir imagens e vídeos informativos sobre os veículos.
|Sequência| • Acessar a página com o navegador • Efetuar o login como usuário • Cadastrar imagens e vídeos dos veículos.
|Critérios de Êxito| Todos as imagens e vídeos foram cadastrados com sucesso.

|Caso de Teste|CT 03 – Fazer comparação entre os recursos de 2 veículos selecionados |
|--|--|
|Requisitos Associados| RF-003 - O sistema deve permitir comparar todos os recursos e funções dos veículos |
|Objetivo do Teste| Comparar as funcionalidades e recursos entre dois tipos de veículos, buscando escolher a opção mais vantajosa para o usuário.
|Sequência| • Acessar a página com o navegador • Escolher o modelo1 • Escolher o modelo 2 • Clicar no botão “Comparaê”
|Critérios de Êxito| Após escolher os modelos e clicar no botão deve ser exibidas as informações fazendo uma comparação entre os recursos dos veículos selecionados.

|Caso de Teste| CT 04 – Fazer busca por palavra-chave |
|--|--|
|Requisitos Associados| RF-004 - O sistema deve permitir buscar os veículos por palavra-chave |
|Objetivo do Teste| Facilitar a busca dos veículos cadastrados no sistema.
|Sequência| • Acessar a página com o navegador • Digitar a palavra-chave no campo busca • Clicar no ícone lupa para buscar o veículo
|Critérios de Êxito| Após digitar a palavra-chave no campo específico, a página deverá mostrar os veículos que possuem em seu cadastro a palavra digitada no campo de busca.

|Caso de Teste| CT 05 – Cadastrar e excluir conta de usuário |
|--|--|
|Requisitos Associados| RF-005 - O sistema deve permitir o cadastro e a exclusão de usuários |
|Objetivo do Teste| Permitir que o usuário crie uma conta para cadastrar veículos.
|Sequência| • Acessar a página com o navegador • Clicar no ícone de login • Clicar no link “Criar uma conta” no modal que será exibido
|Critérios de Êxito| Após clicar no ícone de login, a página deverá mostrar um modal para que o usuário ainda não cadastrado, crie a sua conta. Dentro da sua conta o usuário poderá excluir a mesma.

|Caso de Teste| CT 06 – Recuperar login e senha do usuário |
|--|--|
|Requisitos Associados| RF-006 - O sistema deve permitir a recuperação de login |
|Objetivo do Teste| Permitir que o usuário recupere o seu login caso tenha esquecido o mesmo.
|Sequência| • Acessar a página com o navegador • Clicar no ícone de login • Clicar no link “Esqueceu a senha?” no modal que será exibido • Digitar o e-mail na caixa correspondente • Clicar no botão “Recuperar Senha”
|Critérios de Êxito| A página deverá exibir um modal informando ao usuário que ele irá receber um e-mail de recuperação com os dados da sua conta.

|Caso de Teste| CT 07 – Adicionar carro aos favoritos |
|--|--|
|Requisitos Associados| RF-007 - O sistema deve permitir que o usuário escolha e favorite o carro desejado |
|Objetivo do Teste| Permitir que o usuário salve algum carro como favorito para uma pesquisa mais fácil posteriormente.
|Sequência| • Acessar a página com o navegador • Na foto do carro haverá um ícone para salvar o carro como favorito • Ao clicar no link o carro será adicionado aos favoritos • Clicar no ícone “Meus Favoritos” para visualizar os carros adicionados a esta seção.
|Critérios de Êxito| A página deverá exibir um ícone diferente após o carro ser adicionado aos favoritos, da mesma forma que deverá mostrar o ícone anterior após o usuário queira remover algum carro dos favoritos.
