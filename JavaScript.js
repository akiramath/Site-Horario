var p = document.getElementById('p')
var txt = document.getElementById('text')
var img = document.getElementById('img')  
var fundo = document.getElementById('fundo') 
var data = new Date()
var hora = data.getHours()

function carregar() {
    if(hora >= 4 && hora <= 12){
        //bom dia
        img.src = 'imgs/nuvem.png'
        fundo.style.backgroundColor = '#0f1412'
        fundo.style.backgroundImage = "url('imgs/fundo-manha.png')"

        p.style.color = '#0f1412'
        txt.style.color = 'white'
        txt.innerHTML = `<strong>AGORA SÃO ${hora} HORAS</strong> <br><br><strong>Hora do cafezinhoo..</strong><br><br> Esta manhã, antes do 
        alvorecer,
        subi numa colina para admirar o céu   
        povoado,
        E disse à minha alma: Quando abarcarmos esses mundos e o conhecimento e o prazer que encerram, estaremos finalmente fartos e satisfeitos?
        E minha alma disse: Não, uma vez alcançados esses mundos prosseguiremos no caminho.<br><br><i> Walt Whitman</i>`
    } else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'imgs/sol.png'
        img.style.width = '120px'
        fundo.style.backgroundColor = '#211a4e'
        fundo.style.backgroundImage = "url('imgs/fundo-tarde.jpg')"

        p.style.color = '#170b2f'
        txt.style.color = '#f5a0b7'
        txt.innerHTML = `<strong>AGORA SÃO ${hora} HORAS</strong> <br><br><strong>Boa Tarde...</strong><br><br> 
        Que os ventos dessa tarde soprem na sua 
        direção levando somente bons pensamentos e muita energia positiva para você vencer as poucas horas que ainda faltam. Que esses mesmos 
        ventos levem   embora toda e qualquer preocupação deixando espaço para a paz e o amor. Linda tarde, amigos.<br><br><i> Priscilla 
        Rodighiero</i>`
    } else {
        //boa noite
        img.src = 'imgs/lua.png'
        fundo.style.backgroundImage = "url('imgs/fundo-noite.png')"

        p.style.color = '#002b41'
        p.style.backdropFilter = "blur(5px)"
        txt.style.color = '#002b41'
        txt.innerHTML = `<strong>AGORA SÃO ${hora} HORAS</strong> <br><br><strong>Boa Tarde...</strong><br><br>Sim, minha força está na solidão. 
        Não tenho medo nem de chuvas tempestivas nem das grandes ventanias soltas, pois eu também sou o escuro da noite.<br><br><i> 
        Clarice Lispector</i>`
    }
}

function ok(){
    var input = document.getElementById('nm') 
    var valor = parseInt(input.value)
    
    if(valor >= 4 && valor <= 12){
        //bom dia
        img.src = 'imgs/nuvem.png'
        fundo.style.backgroundColor = '#0f1412'
        fundo.style.backgroundImage = "url('imgs/fundo-manha.png')"

        p.style.color = '#0f1412'
        txt.style.color = 'white'
        txt.innerHTML = `<strong>AGORA SÃO ${valor} HORAS</strong> <br><br><strong>Hora do cafezinhoo..</strong><br><br> Esta manhã, antes do 
        alvorecer,
        subi numa colina para admirar o céu   
        povoado,
        E disse à minha alma: Quando abarcarmos esses mundos e o conhecimento e o prazer que encerram, estaremos finalmente fartos e satisfeitos?
        E minha alma disse: Não, uma vez alcançados esses mundos prosseguiremos no caminho.<br><br><i> Walt Whitman</i>`
    } else if(valor >= 12 && valor <= 18){
        //boa tarde
        img.src = 'imgs/sol.png'
        img.style.width = '120px'
        fundo.style.backgroundColor = '#211a4e'
        fundo.style.backgroundImage = "url('imgs/fundo-tarde.jpg')"

        p.style.color = '#170b2f'
        txt.style.color = '#f5a0b7'
        txt.innerHTML = `<strong>AGORA SÃO ${valor} HORAS</strong> <br><br><strong>Boa Tarde...</strong><br><br> 
        Que os ventos dessa tarde soprem na sua 
        direção levando somente bons pensamentos e muita energia positiva para você vencer as poucas horas que ainda faltam. Que esses mesmos 
        ventos levem   embora toda e qualquer preocupação deixando espaço para a paz e o amor. Linda tarde, amigos.<br><br><i> Priscilla 
        Rodighiero</i>`
    } else {
        //boa noite
        img.src = 'imgs/lua.png'
        fundo.style.backgroundImage = "url('imgs/fundo-noite.png')"

        p.style.color = '#002b41'
        p.style.backdropFilter = "blur(5px)"
        txt.style.color = '#002b41'
        txt.innerHTML = `<strong>AGORA SÃO ${valor} HORAS</strong> <br><br><strong>Boa Tarde...</strong><br><br>Sim, minha força está na solidão. 
        Não tenho medo nem de chuvas tempestivas nem das grandes ventanias soltas, pois eu também sou o escuro da noite.<br><br><i> 
        Clarice Lispector</i>`
    }
}