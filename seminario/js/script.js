// Array
const frameworks = [
  
  
    {
        name:"2años", 
        description:"dije mi primer palabra y di mis primeros pasos y me gustaban los carros "
    },
    {
        name:"5años", 
        description:"entre a estudiar , converse con mis compañeros y a platicar con los maestros"
    },
    {
        name:"8años", 
        description:"aqui sufri de bulling , sufri golpes de compañeos , y un poco de hambre "
    },
    {
        name:"10años", 
        description:"aprendi ,dibuje graficos,empeze a exponer"
    },
    {
        name:"13años", 
        description:"sabia q hecer , logre lo que queria , fui libre de todo"
    },
    {
        name:"15años", 
        description:"pase tercer bacico, me gradue , me vacune"
    },
    {
        name:"16años", 
        description:"empeze el 1er año de bachillerato , aprendi algo nuevo , hise amigos nuevos"
    },
    {
        name:"17 años", 
        description:"esperando a lo que pase esta año"
    },
    {
        name:"17 años", 
        description:"esperando a lo que pase esta año"
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
