let dict_dados = {
    titulo_card:'Visitantes',
    data_andamento:'01/01/2023 - 15/01/2023',
    contador:15,
    unidade:'Dias',
    texto_1:'Visitantes da',
    texto_2:'pagina na area publica',

    dia_dia:[
        {dia:2,valor_dia:15},
        {dia:3,valor_dia:10},
        {dia:4,valor_dia:5},
        {dia:5,valor_dia:1},
        {dia:6,valor_dia:50},
        {dia:9,valor_dia:25},
        {dia:10,valor_dia:40},
        {dia:11,valor_dia:5},
        {dia:12,valor_dia:52},
        {dia:13,valor_dia:10}  
    ]
}

monName = new Array ("Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Out", "Nov", "Dez")

function criador_card(dict){
    
    let agora = new Date
    let hoje = `${agora.getDate()} ${monName[agora.getMonth()]} ${agora.getFullYear()}`
    document.getElementById('card_body').innerHTML = (`
    <div class="card" id="card-visitors">
    <input type="checkbox" id="card-visitors-indicator" />
    <div class="header">
        <label class="indicator" for="card-visitors-indicator">
            <svg class="open" width="18" height="27">
                <line x1="1.5" y1="12" x2="2" y2="25" stroke-linecap="round"
                    style="stroke: #FFFFFF; stroke-width: 3;" />
                <line x1="9" y1="7" x2="9" y2="25" stroke-linecap="round"
                    style="stroke: #FFFFFF; stroke-width: 3;" />
                <line x1="16.5" y1="2" x2="16.5" y2="25" stroke-linecap="round"
                    style="stroke: #FFFFFF; stroke-width: 3;" />
            </svg>
            <svg class="close" width="15" height="25">
                <line x1="1.5" y1="13.5" x2="15" y2="0" style="stroke: #FFFFFF; stroke-width: 3" />
                <line x1="1.5" y1="11.5" x2="15" y2="25" style="stroke: #FFFFFF; stroke-width: 3" />
            </svg>
        </label>
        <div class="content">
            <div class="data">

                <div class="top">
                    <p class="title">${dict.titulo_card}</p>
                    <p class="date">${dict.data_andamento}</p>
                </div>

                <div class="graph">
                    <div class="horizontal" id="horizontal_line"></div>

                    <div class="vertical" id="vertical_line"></div>
                </div>

                

            </div>
            <p class="title">Hoje</p>
            <p class="date">${hoje}</p>
            <div class="float"></div>
        </div>
    </div>
    <div class="info">
        <p>
            <span class="tittle_1">${dict.texto_1}</span><br>
            <span class="tittle_2">${dict.texto_2}</span>
        </p>
        <p class="counter">${dict.contador}<span class="unit">${dict.unidade}</span></p>
    </div>
</div>`)

let maior_valor = 0

arr_dia = dict_dados.dia_dia
for(let i = 0; i< arr_dia.length;i++){

    if(maior_valor < arr_dia[i].valor_dia){
        maior_valor = arr_dia[i].valor_dia
    }
}
valor_medio = Math.ceil(maior_valor/2)
maior_valor = maior_valor +10

document.getElementById('horizontal_line').innerHTML = (`
<div><hr><p>${maior_valor}</p></div><div><hr></div>
<div><hr><p>${valor_medio}</p></div><div><hr></div>
<div><hr><p>0</p></div><div><hr></div>`)

for(let i = 0; i< arr_dia.length;i++){
    document.getElementById('vertical_line').innerHTML += `
    <div class="day">
    <div class="line-container">
     <div class="line" style="height: ${Math.ceil((100/maior_valor)*arr_dia[i].valor_dia)}%"></div>
    </div>
    <p>${arr_dia[i].dia}</p>
    </div>`}

}


criador_card(dict_dados)