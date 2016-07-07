$(function(){
    console.log("Hola jQuery");

    $("p").click(function(){
        $(this).hide();
    });
    
    $("#boton").on("click",function(){
        $("p").fadeIn("slow",function(){alert("ya aparecio!")});
    });
    


});

function appendText() {
    var txt1 = "<p>Text.</p>";               // Create element with HTML  
    var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
    var txt3 = document.createElement("p");  // Create with DOM
    txt3.innerHTML = "Text.";
    $("#demo").append(txt1, txt2, txt3);      // Append the new elements 
}

function emptyText() {
    $("#demo").empty();
}

