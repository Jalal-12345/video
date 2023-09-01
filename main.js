// varbail
let showAdd = document.querySelector(".fa-plus");
let divCreate = document.querySelector(".create");
let hideAdd = document.querySelector(".fa-xmark");
let submit = document.getElementById("submit");
let poster = document.getElementById("imgPoster");
let addVideo = document.getElementById("file");
let titleVideo = document.getElementById("titlevideo");
console.log(submit);



// إظهار إنشاء الفيديوهات

showAdd.addEventListener("click", ()=>{
   divCreate.style.display = "block"
})

// إخفاء إنشاء الفيديوهات 
hideAdd.addEventListener("click", ()=>{
    divCreate.style.display = "none";
})


// إنشاء الفيديوهات 
let dataPro;
if(localStorage.video != null){
   dataPro = JSON.parse(localStorage.getItem("video"));
}else{
    dataPro = [];
}


submit.onclick = function(){
    let newPro = {
        addVideo: addVideo.value,
        titleVideo:titleVideo.value
    }
  
    
    dataPro.push(newPro);
    console.log(dataPro);
 
    localStorage.setItem("video" , JSON.stringify(dataPro));
    showData();
}

// show data 

function showData(){

    let table = ""
  for (let i = 0; i < dataPro.length; i++) {
 

  table += `
  <div class="card">
     ${dataPro[i].addVideo}
    <p>${dataPro[i].titleVideo}</p>
</div>
  `
  document.querySelector(".project-card").innerHTML = table;
    
  }
}

showData();








