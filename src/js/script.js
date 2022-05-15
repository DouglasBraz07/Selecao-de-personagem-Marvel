/*
Objetivo 1 - quando passar o mouse em cima do personagem temos que:

- Colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele

- retirar a classe selecionado do personagem que esta selecionado 
*/

// buscar todos os seletores que tiverem classes em comum no caso personagem 
const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter', () =>{

        const idSelecionado = personagem.attributes.id.value;
//para evitar que selecione o personagem ultron pois ele ja esta selecionado com o jogador 2 caso queira selecionalo e so excluir esse if
        if(idSelecionado === 'ultron') return;

        const personagemSelecionado = document.querySelector('.selecionado')// so ira pegar 1 elemento o que esta selecionado
        personagemSelecionado.classList.remove('selecionado')//ira remover a seleção dele
        
        personagem.classList.add('selecionado')//ira adicionar a seleção no personagem em que o mouse estiver em cima
    
    /* Objetivo 2 - quando passar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande

- alterar a imagem do jogador 1
- alterar o nome do jogador 1
*/
    
        
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
//puxar no src é informar todo o caminho ate a imagem lembrando que o nome da imagem deve ser o mesmo que colocaremos no html ex: thor.png
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');//ira buscar o atributo data name no html aonde possui os nomes 
        
        nomeJogador1.innerHTML = nomeSelecionado;
    });  
});




