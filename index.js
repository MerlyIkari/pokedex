//usando axios//
const pokecontainer=document.querySelector(".pokecontainer");
const anterior=document.querySelector("#anterior");
const next=document.querySelector("#next");

const boton=document.createElement('button');
    boton.classList.add('btn-tarjeta');

let offset=1;
let limit=8;

anterior.addEventListener('click',()=>{
if (offset!=1){    
offset=offset-9;
quitarChild(pokecontainer);
listapokemon(offset,limit);
}
})

next.addEventListener('click',()=>{
    offset=offset+9;
    quitarChild(pokecontainer);
    listapokemon(offset,limit);
})

function obtenerPokemon(id){
    const URI = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    
    axios.get(URI)

     .then((response)=>{
         /*let html='';
          if (response.status === 200)
              {
                
                
                const infopokemon=response.data;
                html=`<h1>${infopokemon.name}</h1>`;
              }
          else
          {
              html=`<h1> No se encontró información </h1>`;
          }

          let body=document.getElementById("body");
          body.innerHTML=html;
    }).catch((e)=>{
            console.log(e);
    })*/
    const infopokemon=response.data;
    creaPokemon(infopokemon);
    console.log(infopokemon);
    // ultimo agregado
      
})
}

function listapokemon(offset,limit){
/*const URI=`https://pokeapi.co/api/v2/pokemon?limit=${number}/`;
axios.get(URI)
.then((response)=>{
    console.log(response.status);
    let html='';
    if (response.status===200){*/

        for(let i=offset; i<=offset+limit;i++){

           //const infopokemon=response.data.results[i];
           //html+=`<h1>${infopokemon.name}</h1>`;
           obtenerPokemon(i);
           
        }
    /*}
    else{
        html='<h1>NO SE ENCONTRO LA INFORMACION </h1>';
    }

    let body=document.getElementById("body");
    body.innerHTML=html;
})
.catch((e)=>{
    console.log(e);
})*/
    
}
//listapokemon(6);
//obtenerPokemon(9);

function creaPokemon(pokemon){

    const flipTarjeta=document.createElement('div');
    flipTarjeta.classList.add('flip-tarjeta');

    const tarjetaContainer=document.createElement('div');
    tarjetaContainer.classList.add('tarjeta-container');

    flipTarjeta.appendChild(tarjetaContainer);

    const tarjeta=document.createElement('div');
    tarjeta.classList.add('pokemon-block');

    const imagen=document.createElement('div');
    imagen.classList.add('img-container');

    const sprite=document.createElement('img');
    sprite.src=pokemon.sprites.front_default;

    imagen.appendChild(sprite);

    const number=document.createElement('p');
    number.textContent=`#${pokemon.id.toString().padStart(3,0)}`;

    const name=document.createElement('p');
    name.textContent=pokemon.name;

    const boton=document.createElement('button');
    boton.classList.add('btn-tarjeta');
    

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(number);
    tarjeta.appendChild(name);
    tarjeta.appendChild(boton);

    const tarjetaTrasera=document.createElement('div');
    tarjetaTrasera.classList.add('pokemon-block-back');

    tarjetaTrasera.appendChild(mostrarHabilidad(pokemon));

    tarjetaContainer.appendChild(tarjeta);
    tarjetaContainer.appendChild(tarjetaTrasera);
        
    pokecontainer.appendChild(flipTarjeta);

    
}
//mientras haya tarjeta en el contenedor hay que quitarla
function quitarChild(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
listapokemon(offset,limit);

/*boton.addEventListener('click',()=>{
    mostrarInformacion(pokemon);
})*/

function mostrarHabilidad(pokemon){
    
    /*const formulario=document.createElement('form');
    formulario.classList.add('pokemon-block');
    formulario.classList.add('formulario');

    const habilidad=document.createElement('p');
    habilidad.textContent=pokemon.name;*/
    const abilityContainer=document.createElement('div');
    abilityContainer.classList.add('ability-container');

    const altura=document.createElement('label');
    altura.textContent="Altura";

    const alto=document.createElement('p');
    alto.textContent=pokemon.height;

    const peso=document.createElement('label');
    peso.textContent="Peso";

    const masa=document.createElement('p');
    masa.textContent=pokemon.weight;

    abilityContainer.appendChild(altura);
    abilityContainer.appendChild(alto);
    abilityContainer.appendChild(peso);
    abilityContainer.appendChild(masa);

    for(let i=0; i<2;i++){
        const habilidad=pokemon.abilities[i];

        const habnum=document.createElement('label');
        habnum.textContent=`Habilidad ${i+1}`;

        const hab=document.createElement('p');
        hab.textContent=habilidad.ability.name;

        abilityContainer.appendChild(habnum);
        abilityContainer.appendChild(hab);

    }
    const imagen=document.createElement('div');
    imagen.classList.add('img-container');

    const sprite=document.createElement('img');
    sprite.src=pokemon.sprites.back_default;

    imagen.appendChild(sprite);

    abilityContainer.appendChild(imagen);

    return abilityContainer;
    
    //formulario.appendChild(habilidad);
    //pokecontainer.appendChild(formulario);
    

}