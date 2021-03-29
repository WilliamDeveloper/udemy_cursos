// create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);

// create and add tileLayer
L.tileLayer( 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

// create icon
const icon = L.icon({
  "iconUrl": "/images/map-marker.svg"
  ,"iconSize": [58,68]
  ,"iconAnchor" : [29,68]
});


let marker;


 //create and add marker
map.on("click",function(event){
  const lat = event.latlng.lat
  const lng = event.latlng.lng

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  // remove icon from
  marker && map.removeLayer(marker);

 //add icon layer
  marker = L.marker([lat,lng],{icon : icon});
  marker.addTo(map)
});


//adicionar o campo de fotos
function addPhotoField(){
  //pegar o container de photos #images
  const container = document.querySelector('#images');
  //pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll('.new-upload');
  //realizar o clone da ultima imagem adionada
  const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true);

  //verificar se o campo esta vazio, se sim nao adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if(input.value == ""){
    return;
  }
  //limpar o campo antes de adicionar ao container de imagens
  input.value="";

  //adicionar o clone ao conteiner de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event){  
  const span = event.currentTarget;
  
  const fieldsContainer = document.querySelectorAll('.new-upload');

  if( fieldsContainer.length < 2){
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();

}

// troca do sim e nao
function toggleSelect(event){

  // remover o atributo class active de todos
  const listaBotoes = document.querySelectorAll('.button-select button')
  listaBotoes.forEach( function (botao) { 
    botao.classList.remove('active'); 
  });
  
  // adicionar o atributo class active no botao clicado
  const button = event.currentTarget
  button.classList.add('active');

  // atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');

  input.value = button.dataset.value;  
  console.log(input, button.dataset.will);
}


function validate(event) {
  
  const lat= document.querySelector('[name=lat]').value
  const lng= document.querySelector('[name=lng]').value

  if (lat=="" || lng==""){
    event.preventDefault();  
    alert('Selecione um ponto no mapa')
  }  

}
