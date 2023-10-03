//Fetch es una función para obtener recursos
//nos retorna una promesa
//then y catch

console.log('Inicia Petición');
fetch('http://127.0.0.1:5500/respuesta.txt')
    .then(result => result.text())
    .then(datos => console.log(datos));

console.log('Inicia Petición 1');
fetch('http://127.0.0.1:5500/respuesta.json')
    .then(result => result.json())
    .then(datos => console.log(datos));