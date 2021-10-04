//->setTimeout roda uma função depois de X milissegundos
const timeOut1 = 3000;
const finish = () => console.log("done");

//setTimeout(finish, timeOut1);
console.log("mostrar");

//->clearTimeOut cancelar um timeOut

let timer = setTimeout(finish, timeOut1);
clearTimeout(timer);

//setInterval roda uma função N vezes
//depois de X milissegundos
const timeOut2 = 1000;
const checking = () => console.log("checking!");

let interval = setInterval(checking, timeOut2);

//->clearInterval irá cancelar um setInverval registrado
setTimeout(() => clearInterval(interval), 5000);
