function confirmaRegistre(){
    alert("registrant estudiant");
    document.getElementById("formDiv").innerHTML = "<p class='important'>T'has registrat amb èxit!</p>";
    console.log("registrant estudiant");
    return false;
}

async function carregaMencions(){
    //completa
    let response    = await fetch("http://localhost:80/mencions.php?grau=" + document.getElementById("graus").value);
    let options     = await response.text()
    document.getElementById("mencions").innerHTML = options;
}