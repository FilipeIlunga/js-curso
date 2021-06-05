function tratarErroELancar(erro) {
    //throw new Error('...')
   // throw 10
    //throw true
    // throw 'mensagem'
    console.log('\nTratamento de erro')
    throw {
        nome: 'erro X',
        msg: 'Erro linha de comando',
        date: new Date
    }
}

function imprimirNomeGritado(objs) {
    try {
        console.log(objs.name.toUpperCase()+'!!!')
    } catch (e) {
        //catch trata o erro
        tratarErroELancar(e)
    } finally {
        
        console.log('Executado msm se houver erro ou não')
    }
}

const objErrado = { nome: 'Roberto' }
const objCerto = { name: 'Roberto' }

imprimirNomeGritado(objCerto)
imprimirNomeGritado(objErrado)