
localStorage.setItem("colorValue", color.value);
color.value = storage;
colorList = [];
coloresGuardados = [];

setColor();

color.addEventListener("input", setColor); 
color.addEventListener("change", () => {
  saveColor(color.value);
});


