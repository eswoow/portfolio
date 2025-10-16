function menuOpening(){
    let dropdwn = document.getElementById("dropdown").style.display;
    if (dropdwn === "none"){
        document.getElementById("dropdown").style.display = "block";
    }else{
        document.getElementById("dropdown").style.display = "none";
    }
}