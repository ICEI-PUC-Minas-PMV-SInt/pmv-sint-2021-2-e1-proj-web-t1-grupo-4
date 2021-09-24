# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.


<table>
<thead>
  <tr>
    <th>NOME/DESCRIÇÃO</th>
    <th>COMPORTAMENTO</th>
    <th>INCONVENIÊNCIAS</th>
    <th>OBJETIVOS</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Marina Diamante, 32 anos. Cantora internacional de pop e rock que gosta de admirar a paisagem e conhecer culturas diversas em diversos cantos do mundo quando não está em turnê.</td>
    <td>Adora passar longas horas viajando de carro, porém se preocupa com o impacto que as viagens causam a natureza devido ao alto uso de combustíveis. Procura na internet informações de veículos elétricos com alta eficiência energética.</td>
    <td>A preocupação da cliente é que existem diversos modelos de carro elétrico com fabricantes diferentes, porém não há praticidade para compará-los.</td>
    <td>Pesquisar um modelo de carro elétrico para que a pessoa viaje com segurança, conforto, estilo, com o mínimo de impacto possível a natureza e que a bateria do veículo proporcione máxima eficiência energética.</td>
  </tr>
  <tr>
    <td>Ariana Pantone, 29 anos. UX Designer. DJ e aspirante a publicitária nas horas vagas.
</td>
    <td>Gosta de animais e adora estudar ciências sociais para desmistificar o senso comum. Tem como hobby conhecer a cultura local nas diversas cidades do seu país.
</td>
    <td>Não encontrar uma plataforma com interface agradável e fácil de usar.</td>
    <td>Obter informações sem perder muito tempo e que se tenha vontade de voltar ao site.</td>
  </tr>
  <tr>
    <td>Lucas Fresta, 26 anos. Professor de História na UFMG. É desenvolvedor embarcado freelancer nas horas vagas.
</td>
    <td>Para Lucas, viajar nas férias é uma necessidade para explorar os lugares culturais que não conhece e aproveitar a culinária do local onde se está.
</td>
    <td>Por não ter conhecimento em automóveis, quer ter acesso a uma plataforma em que possa obter informações confiáveis para ter sua decisão final de compra.
</td>
    <td>Quer um carro durável, resistente, confortável e com desempenho energético eficaz.</td>
  </tr>
</tbody>
</table>



## Histórias de Usuários

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Cliente             | Desejo fazer um cadastro no site   | Para utilizar todas funcionalidades disponíveis|
|Cliente             | Desejo fazer login no site         | Para acessar a minha página pessoal   |
|Cliente             | Desejo favoritar um veículo        | Para mantê-lo salvo no meu perfil     |
|Cliente             | Comparar os componentes dos carros | Possibilitar a seleção do veículo que atenda melhor as minhas expectativas |
|Cliente             | Desejo excluir o cadastro no site  | Para excluir meu cadastro pessoal do site      |
|Administrador       | Cadastrar carro                    | Disponibilizar as informações coletadas através de uma pesquisa para atender o público. |
|Administrador       | Editar cadastro do carro           | Editar as informações com dados mais recentes dos veículos |
|Administrador       | Incluir imagens                    | Para que possíveis clientes vejam fotos dos veículos |
|Administrador       | Apagar imagens                     | Para remover fotos antigas e que não façam parte do marketing atual|
|Administrador       | Incluir videos                     | Para a adição do vídeo de marketing do veículo |
|Administrador       | Apagar videos                      | Para a remoção de vídeos antigos e que não façam parte do marketing atual |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |
|Administrador       | Excluir cliente                    | Excluir cliente caso solicitado ou que infrinja as regras do site |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O sistema deve permitir cadastrar, alterar e excluir informações sobre veículos elétricos   | MÉDIA |
|RF-002| O sistema deve permitir cadastrar, alterar e excluir imagens e vídeos dos veículos   | MÉDIA |
|RF-003| O sistema deve permitir comparar todos os recursos e funções dos veículos   | MÉDIA |
|RF-004| O sistema deve permitir buscar os veículos por palavra-chave   | MÉDIA |
|RF-005| O sistema deve permitir o cadastro e a exclusão de usuários | ALTA | 
|RF-006| O sistema deve permitir a recuperação de login | ALTA |
|RF-007| O sistema deve permitir que o usuário escolha e favorite o carro desejado  | MÉDIA |
|RF-008| O sistema deve permitir que o usuário busque por veículos utilizando filtros | MÉDIA |



### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em dispositivos móveis | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O sistema deve rodar em diversos tipos de navegadores |  MÉDIA | 
|RNF-004| O sistema deve ser intuitivo e de fácil compreensão ao usuário |  MÉDIA | 
|RNF-005| O sistema deve ficar no ar 24h |  MÉDIA | 
|RNF-006| O sistema não apresentará aos usuários quaisquer dados de cunho privativo |  MÉDIA | 
|RNF-007| O sistema deve ter certificação de segurança |  MÉDIA | 
|RNF-008| O sistema deve usar PostgreSQL para salvar dados de cadastro |  MÉDIA | 
|RNF-009| O sistema deve ter ferramenta de análise de dados com o Plausable Analytics |  BAIXA | 
|RNF-010| O sistema deve respeitar as boas práticas de acessibilidade | MÉDIA


o sistema não apresentará aos usuários quaisquer dados de cunho privativo


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
