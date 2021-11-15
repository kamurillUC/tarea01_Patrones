

let generos = [
    {
        nombre: 'rock',
        contenido: ['Linkin Park', 'The Killers', 'Green Day', 'Blink-182']    
    },
    {
        nombre: 'metal',
        contenido: ['Trivium', 'Veil of Maya', 'Kreator', 'Black Sabbath']    
    },
    {
        nombre: 'nacional',
        contenido: ['424', 'Voodoo', 'Magpie Jay', 'Cocofunka']    
    }
];


let animales = [
    {
        nombre: 'gato',
        contenido: ['miau']    
    },
    {
        nombre: 'perro',
        contenido: ['guau', 'Veil of Maya', 'Kreator', 'Black Sabbath']    
    },
    {
        nombre: 'cerdo',
        contenido: ['oink']    
    },
    {
        nombre: 'pollito',
        contenido: ['pio']    
    },
    {
        nombre: 'vaca',
        contenido: ['mu']    
    }
];

function getResultados(pregunta, resultado) {
    switch(pregunta) {
        case 1:
            console.log(searchInArray(generos, resultado));            
        break;
        case 2:
            console.log(searchInArray(animales, resultado));
        break;
        case 3:

        break;
        
    }
}

function searchInArray(myArray, result){
    let text = 'Ese elemento no existe aún...';
    
    myArray.forEach(element => {        
        if(element.nombre.includes(result)) {            
            text = showArray(element.contenido);
        }
    });

    return text;
}

function showArray(myArray) {
    let text = '';

    myArray.forEach(element => {
        text += `${element}, `
    });

    return text.slice(0,-2);
}
//console.log(checkInArray(generos, resultado));
//console.log(searchInArray(generos, resultado));

let pregunta = 1;

let resultado = window.prompt("¿Cuál es su género musical favorito?").toLowerCase(); 

getResultados(pregunta, resultado);

resultado = window.prompt("¿Cuál es su animal favorito?"); 
pregunta++;

getResultados(pregunta, resultado);

