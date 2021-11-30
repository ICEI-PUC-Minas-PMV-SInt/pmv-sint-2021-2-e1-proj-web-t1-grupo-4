# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

|Caso de Teste| CT 01 – Cadastrar, alterar e excluir dados de veículos  |
|--|--|
|Requisitos Associados| RF-001 - O sistema deve permitir cadastrar, alterar e excluir informações de veículos elétricos|
|Objetivo do Teste| Verificar se os veículos foram cadastrados com sucesso, verificar se é possível alterar e excluir dados.
|Sequência| • Acessar a página com o navegador<br> • Efetuar o login como admin<br> • Clicar no botão 'Gerenciar conta de veiculos' <br> • Selecionar e efetuar os procedimentos de cadastro / edição / exclusão de dados do veículo
|Critérios de Êxito| Procedimentos de cadastro, alteração e exclusão foram efetuados com sucesso.

|Caso de Teste| CT 02 – Inserir, alterar e excluir imagens e videos de veículos  |
|--|--|
|Requisitos Associados| RF-002 - O sistema deve permitir cadastrar, alterar e excluir imagens e vídeos dos veículos |
|Objetivo do Teste| Inserir imagens e vídeos informativos sobre os veículos.
|Sequência| • Acessar a página com o navegador<br> • Efetuar o login como admin<br> • Clicar no botão 'Gerenciar conta de veiculos<br> • Cadastrar imagens e vídeos dos veículos.
|Critérios de Êxito| Arquivos de imagens e vídeos foram inseridos no sistema com sucesso.

|Caso de Teste|CT 03 – Fazer comparação entre os recursos de 2 veículos selecionados |
|--|--|
|Requisitos Associados| RF-003 - O sistema deve permitir comparar todos os recursos e funções dos veículos |
|Objetivo do Teste| Comparar as funcionalidades e recursos entre dois tipos de veículos, buscando escolher a opção mais vantajosa para o usuário.
|Sequência| • Acessar a página com o navegador<br> • Escolher o modelo 1<br> • Escolher o modelo 2<br> • Clicar no botão “Comparaê”
|Critérios de Êxito| Após escolher os modelos e clicar no botão, deve ser redirecionado a página de comparação exibindo as informações entre os recursos dos veículos selecionados.

|Caso de Teste| CT 04 – Fazer busca por palavra-chave |
|--|--|
|Requisitos Associados| RF-004 - O sistema deve permitir buscar os veículos por palavra-chave |
|Objetivo do Teste| Facilitar a busca dos veículos cadastrados no sistema.
|Sequência| • Acessar a página com o navegador<br> • Digitar a palavra-chave no campo busca<br> • Clicar no ícone lupa para buscar o veículo
|Critérios de Êxito| Após digitar a palavra-chave no campo específico, a página deverá mostrar os veículos que possuem em seu cadastro a palavra digitada no campo de busca.

|Caso de Teste| CT 05 – Cadastrar e excluir conta de usuário |
|--|--|
|Requisitos Associados| RF-005 - O sistema deve permitir o cadastro e a exclusão de usuários |
|Objetivo do Teste| Permitir que o usuário crie e exclua o seu cadastro no site.
|Sequência| • Acessar a página com o navegador<br> • Clicar no ícone de login<br> • Clicar no link “Criar uma conta” no modal que será exibido
|Critérios de Êxito| Após clicar no ícone de login, a página deverá mostrar um modal para que o usuário ainda não cadastrado, crie a sua conta. Dentro da sua conta o usuário poderá excluir a mesma.

|Caso de Teste| CT 06 – Recuperar login e senha do usuário |
|--|--|
|Requisitos Associados| RF-006 - O sistema deve permitir a recuperação de login |
|Objetivo do Teste| Permitir que o usuário recupere o seu login caso tenha esquecido o mesmo.
|Sequência| • Acessar a página com o navegador<br> • Clicar em meus favoritos<br> • Clicar no link “Esqueceu a senha?” no modal que será exibido<br> • Digitar o e-mail na caixa correspondente<br> • Clicar no botão “Recuperar Senha”
|Critérios de Êxito| A página deverá exibir um modal informando a pessoa que irá receber um e-mail de recuperação da conta.

|Caso de Teste| CT 07 – Adicionar carro aos favoritos |
|--|--|
|Requisitos Associados| RF-007 - O sistema deve permitir que o usuário escolha e favorite o carro desejado |
|Objetivo do Teste| Permitir que o usuário salve algum carro como favorito para uma pesquisa mais fácil posteriormente.
|Sequência| • Acessar a página com o navegador<br> • Na foto do carro haverá um ícone para salvar o carro como favorito<br> • Ao clicar no link o carro será adicionado aos favoritos<br> • Clicar no ícone “Meus Favoritos” para visualizar os carros adicionados a esta seção.
|Critérios de Êxito| A página deverá exibir um ícone diferente após o carro ser adicionado aos favoritos, da mesma forma que deverá mostrar o ícone anterior após o usuário queira remover algum carro dos favoritos.

