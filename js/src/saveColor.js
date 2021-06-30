const saveColor = value => {
    colorList.push(value);
    localStorage.setItem("colorValue", JSON.stringify(colorList));
    console.log(value);
  };