//create map
const map = L.map('mapid').setView([-19.9483917,-44.0268946], 15)

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

// create icon
const icon=L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],

})

let marker; // inicia a variável vazia mas pode modificar ela futuramente

//create and add marker
map.on('click', (event)=>{
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;


    //remove icon
    marker && map.removeLayer(marker) //&& = entao, se existe o marker ent tira o marker anterior

    //add icon layer
    marker = L.marker([lat,lng], {icon})
    .addTo(map)
})


//photos upload
function addPhotoField () {
    
    //pegar container de fotos #images
    const container = document.querySelector('#images')

    //pegar container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload') //querySelectorAll= pega todos os inputs e nao somente o primeiro caso fosse dado o comando querySelector somente

    //realizar o clone, da iltima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true) 
    // fieldsContainer.length pra pegar o quantos inputs forem adicionados e o "-1" para achar o numero correto do array

    //verificar se campo ta vazio
    const input = newFieldContainer.children[0]

    if (input.value == ""){
        return //sempre q uma aplicacao encontrar um return
    }

    //limpar o campo antes de adicionar ao container de imagens  
    input.value = ""

    //adicionar o clone ao container de #imagens
    container.appendChild(newFieldContainer)
    //append = acrescentar

}

function deleteField (event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return  
    }

    //deletar o campo
    span.parentNode.remove();


}

//troca do sim e não, selecao
function toggleSelect(event){
    //retirar classe active desse botao
    document.querySelectorAll('.button-select button') //pegou todos os botoes
    .forEach(function(button) {
        button.classList.remove('active')
    })
    //colocar class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o meui input hiddden com valor selecionado
    const input =  document.querySelector('[name="open_on_weekends"]')

    //verificar se sim ou nao
    input.value =button.dataset.value
}