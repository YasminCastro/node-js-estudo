// ->EventEmitter é responsável por emitir e escutar eventos
const { EventEmitter } = require("events");
console.log(EventEmitter);

// ->criando um novo evento

const ev = new EventEmitter();

console.log(ev);

//->ligando evento, ouvindo varias vezes
ev.on("SaySomenthing", (message) => {
  console.log("eu ouvi você:", message);
});

// ->ouve apenas uma vez
ev.once("SaySomenthing", (message) => {
  console.log("eu ouvi você:", message);
});

//-> disparar eventos

ev.emit("SaySomenthing", "Yas");
ev.emit("SaySomenthing", "Joao");

//->herdando do event Emitter

//-> inherits é uma função que herda as funcionalidades do EventEmitter para a função que será criada
const { inherits } = require("util");
const { EventEmitter } = require("events");

function Character(name) {
  this.name = name;
}

inherits(Character, EventEmitter); //->a funçao inherits está recebendo como função Character

const chapolin = new Character("chapolin"); //->novo personagem
chapolin.on("help", () => console.log(`Eu! o ${chapolin.name} colorado!`));
console.log("oh! e agora, quem poderá me defender?");
chapolin.emit("help");
