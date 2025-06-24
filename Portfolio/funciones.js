

function cerrar_menu() {
    document.getElementById("secdesp").style.display = "none";
    document.getElementById("cerrar").style.display = "none";
}
function resaltarB(id){
    if(window.innerWidth > 700)
        document.getElementById(id).style.boxShadow = "0px 0px 10px 10px white";
}
function apagar(id){
    document.getElementById(id).style.boxShadow = "none";
}
function aparecer(id){
    document.getElementById(id).style.display = "block";
}
function desaparecer(id){
    if(window.innerWidth > 700)
        document.getElementById(id).style.display = "none";
}
function sobreNosotros(){ 
    var e = document.getElementById("alex");
    var p =  document.getElementById("pablo");
    e.scrollIntoView(false);
    e.style.animationName = "resaltar";
    e.style.animationDuration = "4s";
    e.style.animationDelay = "0.5s";
    p.style.animationName = "resaltar";
    p.style.animationDuration = "4s";
    p.style.animationDelay = "0.5s";
}

function trabajos(){
    if(window.innerWidth < 701)
    {
        var e = document.getElementById("ANI");
        e.scrollIntoView();
    }
}

function scrollToTop(elemento){
    var e = document.getElementById(elemento);
    e.scrollIntoView(true);

}
function scrollToBot(elemento){
    var e = document.getElementById(elemento);
    e.scrollIntoView(false);

}
function resaltarG(id){
    if(window.innerWidth > 700)
        document.getElementById(id).style.boxShadow = "0px 0px 10px 10px grey";
}