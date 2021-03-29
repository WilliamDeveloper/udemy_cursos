const options = {
  "dragging": false
  ,"touchZoom": false
  ,"doubleClickZoom" : false
  ,"scrollWheelZoom": false
  ,"zoomControl": false
};

const spanMapa = document.querySelector('span[data-lat]');
const lat=spanMapa.dataset.lat;
const lng=spanMapa.dataset.lng;


// create map
const map = L.map('mapid',options).setView([lat,lng], 15);

// create and add tileLayer
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

// create icon
const icon = L.icon({
  "iconUrl": "/images/map-marker.svg"
  ,"iconSize": [58,68]
  ,"iconAnchor" : [29,68]
  ,"popupAnchor" : [170,2]
});


//create and add marker
L
  .marker([lat,lng],{icon : icon})
  .addTo(map)  


/* image gallery */
function selectImage(event){
  const button = event.currentTarget;
  console.log('selectImage',event.currentTarget);

  //remover todas as classes active
  const buttons = document.querySelectorAll('.images button');
  console.log(buttons);
  
  buttons.forEach( (button)=> {
    button.classList.remove("active");
  });
    

  //selecionar a image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details > img')

  // atualizar o container de imagem
  imageContainer.src=image.src;

  // adicionar a classe active para este botao que foi clicado
  button.classList.add('active');

  
}

