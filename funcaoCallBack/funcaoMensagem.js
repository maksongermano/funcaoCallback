const saudacao = (callBack)=>{
    const nome = 'Makson';
    callBack(nome);
    }
    
    const mensagem =  (nome)=>{
        console.log(`Bem vindo(a) ${nome}`);
    };
    saudacao(mensagem);
       
    // essa é outra forma para fazer função. 