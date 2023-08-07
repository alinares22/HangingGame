
let words:string [] = [
    'COMPUTADORA',
    'AGUACATE',
    'NOTEBOOK',
    'LECHOSA',
    'SANDIA',
    'BANANA',
    'CELULAR',
    'TELEFONO'

]; 

export function getRandomWord() {
    
    const randomIndex = ( Math.floor( Math.random() * words.length ))
    return words[randomIndex];
}