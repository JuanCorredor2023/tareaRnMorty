// fetch

function random(){
  let vacio = ""
  document.getElementById('cardContainer').innerHTML = vacio

  let numeros = document.getElementById("numCharacters").value;

  if(numeros === "0" || numeros === "" || isNaN(numeros)){
    alert("Error: No es valido")
}else{ 
  let rand=[]



  for(let i=1; i<=numeros; i++){

    var r = Math.floor(Math.random() * 671) + 1;
    rand.push(r)
  }
  console.log(rand)

 let masnumeros=numeros-1

  for (let n = 0; n<=masnumeros; n++){
    let id_ = rand[n]
    console.log(id_)
    let url = `https://rickandmortyapi.com/api/character/${id_}`

fetch(url)
    .then((res) => res.json())
    .then((data) => print(data))
    .catch((err) => console.log(err))

    const print = (data)=>{
        let card = `<div class="card" style="width: 18rem;">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">Name:${data.name}</p>
          <p><b>Specie:${data.species}</b></p>
          <p><b>Id:${data.id}</b></p>
        </div>
      </div>`
      document.getElementById('cardContainer').innerHTML += card
        }

    }


}

}

function tarjetasBorrar(){
  let vacio = ""
document.getElementById('cardContainer').innerHTML = vacio
}

function tarjetas(){
let vacio = ""
document.getElementById('cardContainer').innerHTML = vacio



let numeros = document.getElementById("numCharacters").value;
if(numeros === "0" || numeros === "" || isNaN(numeros)){
    alert("Error: No es valido")
}else{
for (let i = 1; i<=numeros; i++){
    
    let url = `https://rickandmortyapi.com/api/character/${i}`

fetch(url)
    .then((res) => res.json())
    .then((data) => print(data))
    .catch((err) => console.log(err))

    const print = (data)=>{
        let card = `<div class="card" style="width: 18rem;">
        <img src="${data.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${data.name}</p>
          <p><b>${data.species}</b></p>
        </div>
      </div>`
      document.getElementById('cardContainer').innerHTML += card
        }

    }
}
}

function tarjetasPerosnaje(){
  let vacio = ""
  document.getElementById('cardContainer').innerHTML = vacio
  
  
  
  let numeros = document.getElementById("numCharacters").value;
  if(numeros === "0" || numeros === "" || isNaN(numeros)){
      alert("Error: No es valido")
  }else{
      
      let url = `https://rickandmortyapi.com/api/character/${numeros}`
  
  fetch(url)
      .then((res) => res.json())
      .then((data) => print(data))
      .catch((err) => console.log(err))
  
      const print = (data)=>{
          let card = `<div class="card" style="width: 18rem;">
          <img src="${data.image}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">${data.name}</p>
            <p><b>${data.species}</b></p>
            <p><b>Id:${data.id}</b></p>
          </div>
        </div>`
        document.getElementById('cardContainer').innerHTML += card
          }
  
      }
  }
  