//Função que vai ser chamada quando clilcar no input type btn nela tem 4 variavies. Uma pegando o ano atual que seriam a "data" e a "year". A fyear me da o ano que o usuario colocou no input "txt" ano, que deverá ser seu ano de nascimento. A "res" seria o resultado da verification

function verificar(){
    let data= new Date()
    let ano= data.getFullYear()
    let fano= document.getElementById('txtano')
    let res= document.getElementById('res')
    let name=document.getElementById('name')
    let username= name.value

    //se o valor que o usuario colocar for zero ou um ano maior doq o ano em que o sistema está rodando, dará uam mensagem de erro
    if(fano.value.length==0 || Number(fano.value)>ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }//se não for esse o caso, ele ira pegar a resposta do input de genero e guardará numa variavel, também fara uma variavel idade que tera como valor o ano atual menos o ano que foi colocado pelo usuario 
     else {
        let fsex=document.getElementsByName('radsex')
        let idade=ano-Number(fano.value)
        let gênero=''
        let img= document.createElement('img')
        img.setAttribute('id', 'foto') //aquie é como se eu estivesse criando "<img id="foto" </img> so que no js"
        
        //se fsex for igual a marcação do primeiro input de genero checado entao o usuario será homem, se nao, sera mulher
        if(fsex[0].checked){
            gênero="homem"

        } else if (fsex[1].checked){
            gênero="mulher"
        }
        res.style.textAlign='center'
        res.innerHTML=`Olá,  ${username}. Você é ${gênero} com ${idade} anos de idade`
        res.classList.add('show')
    }
}
