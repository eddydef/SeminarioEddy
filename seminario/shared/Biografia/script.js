// Array
const frameworks = [
  
  
    {
        name:"1 año", 
        description:"Empece a hablar"
    },
    {
        name:"3 años", 
        description:"Entre al Jardin de niños"
    },
    {
        name:"5 años", 
        description:"Entre a la prepa"
    },
    {
        name:"6 años", 
        description:"La muerte de mi abuelo (parte paterna)"
    },
    {
        name:"13 años", 
        description:"Se mudaron mi mamá y mi hermano"
    },
    {
        name:"14 años", 
        description:"Me mude con mi mamá y con mi hermano"
    },
    {
        name:"15 años", 
        description:"Me gradue de básicos"
    },
    {
        name:"16 años", 
        description:"Entre a bachiller y saque buenas notas"
    }
]

// render html
var html = "";
frameworks.forEach(e=>{
    html +="<div class='child'><div class='content'><h4>"+e.name+"</h4><p>"+e.description+"</p></div> </div>"
})
timeline.innerHTML = html

// ANIMACION TIMELINE

var _items = document.querySelectorAll(".child")
_items.forEach(element =>{
    if(element.offsetTop < 300)
        element.classList.add('_show')
})

window.addEventListener("scroll",e=>{
    var scroll = document.documentElement.scrollTop
    var items = document.querySelectorAll(".child")
    items.forEach(elem=>{
        if(elem.offsetTop - window.innerHeight/2 < scroll){
            elem.classList.remove('_hide')
            elem.classList.add('_show')
        }else{
            elem.classList.remove('_show')
            elem.classList.add('_hide')
        }

    })
})
