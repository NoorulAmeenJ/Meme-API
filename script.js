var API= "https://api.imgflip.com/get_memes"
fetch(API)
.then((response) => response.json())
.then((data) =>{

var oltag = document.getElementById("carousel-indicators")  ; 
var carouselinner = document.getElementById("carousel-inner");
for(i=0;i<data.data.memes.length;i++){

  


oltag.innerHTML +=
  `<li data-target="#carouselExampleCaptions" data-slide-to="${i}" ></li>`;

carouselinner.innerHTML +=
   ` 
  <div class="carousel-item ">
    <img src="${data.data.memes[i].url}" class="d-block w-100" alt="${data.data.memes[i].name}'meme">
    <div class="carousel-caption d-none d-md-block">
      <h1 class="innerline">${data.data.memes[i].name}</h1>
    </div>
  </div>
  `
  
}

    
})

  // console.log(kur)
// var idname = `slide${i}`
// var litag= document.getElementById(idname);
// console.log(oltag)

// console.log(litag)
// oltag.append(litag)
 

//     https://api.imgflip.com/get_memes
// console.log(data.data.memes[0])
// data.data.memes[0].url
// data.data.memes[0].name
//




// var litag= document.getElementById("slide[i]")
// // oltag.append(litag)

// var carouselinner = document.getElementById("carousel-inner");

// console.log(carouselinner)
// console.log(oltag.litag