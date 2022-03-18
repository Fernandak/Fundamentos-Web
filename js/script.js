var nome = window.document.getElementById('nome')
var email = document.querySelector('#email')
var assunto = document.querySelector('#assunto')
var nomeOk = false
var emailOk = false
var assuntoOk = false
var mapa = document.querySelector('mapa')

function validarNome(){
    let txtNome = document.getElementById('txtNome')
    if (nome.value.length < 2){
        //alert("Olá Mundo")
          txtNome.innerHTML = 'Nome invalido, o nome precisa ter no minino 2 letras'
          txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome valido'
        txtNome.style.color ='green'
        nomeOk = true
    }
}
function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if( email.value.indexOf('@')== -1){
        txtEmail.innerHTML = 'Email invalido(exemplo email@email.com'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'Email valido'
        txtEmail.style.color ='green'
        emailOk = true
    }

}
function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if( assunto.value.length >=100){
        txtAssunto.innerHTML = 'O texto é muito grande, digite até 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display ='block'
    }else{
        txtAssunto.style.display ='none'
        assuntoOk = true
    }

}
function enviar (){
    if (nomeOk == true && emailOk == true && assuntoOk==true){
        alert('Mensagem enviada com sucesso!!!')
    
    }else{
        alert('Preencha corretamente')
    }
}
function mapaZoom(){
    mapa.style.width='800px'
    mapa.style.height='600px'

}

function mapaNormal(){
    mapa.style.width='800px'
    mapa.style.height='600px'

}