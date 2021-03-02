const options ={
    dragging: false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false

}

//create map
const map = L.map('mapid', options).setView([-19.9483917,-44.0268946], 15)

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

// create icon
const icon=L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[29,68],
    popupAnchor:[170,2]

})



//create and add marker
L
.marker([-19.9483917,-44.0268946], { icon })
.addTo(map)

//image gallery

function selectImage(event) {
    const button = event.currentTarget
    
// remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

        function removeActiveClass(button){
            button.classList.remove("active")
        }
        
//selecionar imagem clicada

const image = button.children[0] //pedindo a posicao 0,que é a img
const imageContainer = document.querySelector(".orphanage-details > img")

//atualizar o container de imagem
imageContainer.src = image.src

// add a classe active p aquele botao
    
    button.classList.add("active")

}
