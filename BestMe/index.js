const questions = [
  "o que aprendi hoje?",
  "o que me deixou aborrecido?O que eu poderia fazer para melhorar?",
  "o que me deixou feliz hoje?",
  "quantas pessoas ajudei hoje?",
];

const ask = (index = 0) => {
  process.stdout.write("\n" + questions[index] + " > "); //processo de escrita na saida do processo
};

ask();

const answers = [];
process.stdin.on("data", (data) => {
  //process.stdout.write(data.toString().trim() + "\n"); //pegando os dados, transformando em string e removendo espaços vazios

  answers.push(data.toString().trim()); //vai colocar no array, que tornará lenght 1
  if (answers.length < questions.length) {
    //se as answers forem menor que questions ele passa para proxima pergunta
    ask(answers.length);
  } else {
    //quando as answers for maior o processo "acaba"

    process.exit();
  }
});

//processo vai ficar ouvindo o exit
//quando o exite for chamado acima ele ira imprimir a função criada
process.on("exit", () => {
  console.log(`
    Legal!

    O que você aprendeu hoje foi:
    ${answers[0]}
    
    O que te aborreceu e você poderia melhorar foi:
    ${answers[1]}
    
    O que te deixou felix hoje:
    ${answers[2]}
    
    Você ajudou ${answers[3]} hoje!
    
    Muito daora!!!`);
});
