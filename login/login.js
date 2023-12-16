function logar() {
    var login = document.getElementById("login").value; //variavel login recebe o que for digitado no input login
    var senha = document.getElementById("senha").value; //variavel login recebe o que for digitado no input senha

    //validação do usuário e senha
    if (login == "Estudante" && senha == "Enem"){
        alert('Login realizado com sucesso!'); //mostra a mensagem
        location.href = "home/home.html"; //chama a pagina home
    }
    else{
        alert('Login ou senha incorreto!'); //mostra a mensagem
        document.getElementById('login').value=''; //limpa o campo
        document.getElementById('senha').value=''; //limpa o campo
        document.getElementById('Usuário').autofocus=''; //posiciona o cursor no input login
    }
}


function openModal(){
const modal = document.getElementById('modal-container')
modal.classList.add('mostrar')

modal.addEventListener('click', (e) =>{
if (e.target.id == 'modal-container' || e.target.id == "fechar"){
    modal.classList.remove('mostrar')
    localStorage.fechaModal = 'modal-container'
}
})
}

function openModal2(){
    const modal = document.getElementById('modal-container-2')
    modal.classList.add('mostrar')
    
    modal.addEventListener('click', (e) =>{
    if (e.target.id == 'modal-container-2' || e.target.id == "fechar"){
        modal.classList.remove('mostrar')
        localStorage.fechaModal = 'modal-container-2'
    }
    })
    }
    
