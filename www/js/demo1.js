
function demoConsole(){
    console.log("Hola mundo");
}

function demoAlert(){
    otraFuncion();
}

function otraFuncion(){
    alert("Esto en mobile no se usa");
}

function demoObjeto() {
    var objetoJS = { 
        nombre:"Juan", 
        funcionJs: function(){return ("Hasta la vista baby");}
    }
    
    console.log(objetoJS.nombre);
    console.log(objetoJS.funcionJs);
    console.log(objetoJS.funcionJs());
}