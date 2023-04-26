const imprimirDados = (funcaoCallBack) => {
const nome = 'Makson Matheus Germano´'
const idade = 31;
funcaoCallBack(nome, idade);

}



imprimirDados((parametro1 , parametro2) => {
console.log('A  função CallBack foi executada')
if(parametro1){
    console.log(`Nome : ${parametro1}`)
}

if(parametro2){
    console.log(`Idade ${parametro2}`)
}

});