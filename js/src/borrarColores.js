
function borrarGuardados() {
    for (let i = coloresGuardados.length; i > 0; i--) {
        coloresGuardados.pop();
      }
      coloresGuardados[0] = "<h3 id='listaColores'>Ninguno Guardado</h3>";
}