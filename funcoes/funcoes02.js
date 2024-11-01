//FUNÇÕES NOMEADAS
function logar(usuario, senha){
    alert("Logado com a função nomeada")
    alert("olá, " + usuario)
}
logar("ledson123", 12345)

//FUNÇÕES ANONIMAS

const conectar = function(usuario, senha){   
    alert("Logado com a função anônima!")
    alert("olá, " + usuario)}

conectar("Joilson", "13sdfs")


// ARROW FUNCTIONS OU FUNÇÕES FLECHA
const colorir = () => {
    alert("Função flecha em ação!")

}
colorir() //execução da Arrow


