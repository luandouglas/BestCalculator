function clearAll() {
    let display = document.getElementById("display");
    display.innerHTML = "";
  }
  function deleteChar() {
    let display = document.getElementById("display");
    let string = display.innerHTML;
    display.innerHTML = string.substr(0, string.length - 1);
    if (display.innerHTML.length < 1) display.innerHTML = 0;
  }
  function addNumber(aux) {
    let display = document.getElementById("display");
    if (display.innerHTML[0] == "0") display.innerHTML = "";
    display.innerHTML = display.innerHTML + "" + aux.value;
  }
  function addOperador(operador) {
    let operacao = document.getElementById("display");
    if (operacao.innerHTML.indexOf("+") != -1) {
      return;
    }
    if (operacao.innerHTML.indexOf("-") != -1) {
      return;
    }
    if (operacao.innerHTML.indexOf("/") != -1) {
      return;
    }
    if (operacao.innerHTML.indexOf("*") != -1) {
      return;
    }
    if (operacao.innerHTML != 0)
      display.innerHTML = display.innerHTML + "" + operador;
  }
  function calcular(operador) {
    let result = document.getElementById("display");
    let valor = result.innerHTML;
    let [v1, v2] = valor.split(operador);
    let resultado = 0;
    switch (operador) {
      case "+":
        resultado = Number(v1) + Number(v2);
        break;
      case "-":
        resultado = Number(v1) - Number(v2);
        break;
      case "/":
        resultado = Number(v1) / Number(v2);
        break;
      case "*":
        resultado = Number(v1) * Number(v2);
        break;
      default:
        break;
    }
    result.innerHTML = resultado;
  }

  function result() {
    let result = document.getElementById("display");
    let str = result.innerHTML;
    let search = 0;
    search = str.indexOf("+");
    if (search != -1) {
      calcular("+");
      return;
    }
    search = str.indexOf("-");
    if (search != -1) {
      calcular("-");
      return;
    }
    search = str.indexOf("/");
    if (search != -1) {
      calcular("/");
      return;
    }
    search = str.indexOf("*");
    if (search != -1) {
      calcular("*");
      return;
    }
  }