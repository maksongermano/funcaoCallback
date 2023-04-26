function saudacao (callBack){
const nome = 'Makson'
callBack(nome);
}

saudacao(function(algumacoisa){
    console.log(`Bem vindo(a) ${algumacoisa}`)
});
