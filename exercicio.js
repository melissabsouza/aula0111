const alunos = ["ana", "joao", 
    "maria", "jose", 
    "marcos"];


function contarAlunos(){
    return alunos.length;
}


function listarAlunos(){
    for(let aluno of alunos){
        console.log(aluno)
    }
}

function addAluno(){
    alunos.push(aluno)
}

function removerAluno(){
    alunos.pop()
}

const qntdAlunos = contarAlunos()
console.log(`tem ${qntdAlunos} alunos nessa classe`);

listarAlunos()

addAluno("Gustavo")
addAluno("melissa")
removerAluno()


