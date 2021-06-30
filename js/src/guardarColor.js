
function guardarColor() {
    if (coloresGuardados[0] == "<h3 id='listaColores'>Ninguno Guardado</h3>") {
        coloresGuardados.pop();
        coloresGuardados.push("<h3 id='listaColores' style=background-color:"+colorList[colorList.length -1]+";>"+colorList[colorList.length -1]+"</h3>"); 
    } else {
        coloresGuardados.push("<h3 id='listaColores' style=background-color:"+colorList[colorList.length -1]+";>"+colorList[colorList.length -1]+"</h3>"); 
    }

 console.log(coloresGuardados);
};