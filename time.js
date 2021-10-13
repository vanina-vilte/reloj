//horas
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

function time(){
    hours.textContent= new Date().getHours();
    minutes.textContent= new Date().getMinutes();
    seconds.textContent= new Date().getSeconds();
}

setInterval(time, 1000)


//fecha
let date = document.querySelector('.date');
let month = document.querySelector('.month');
let year = document.querySelector('.year');

date.textContent= new Date().getDate();
//month.textContent= new Date().getMonth()+1;
year.textContent= new Date().getFullYear();

let numeroMes= new Date().getMonth();
let nombreMes= '';
switch (numeroMes) {
    case 0: nombreMes='Enero';
        break;
    case 1: nombreMes='Febrero';
        break;
    case 2: nombreMes='Marzo';
        break;
    case 3: nombreMes='Abril';
        break;
    case 4: nombreMes='Mayo';
        break;
    case 5: nombreMes='Junio';
        break;
    case 6: nombreMes='Julio';
        break;
    case 7: nombreMes='Agosto';
        break;
    case 8: nombreMes='Septiembre';
        break;
    case 9: nombreMes='Octubre';
        break;
    case 10: nombreMes='Noviembre';
        break;
    case 11: nombreMes='Diciembre';
        break;
}
month.textContent=nombreMes;

//dia
let day = document.querySelector('.day');

let numeroDia= new Date().getDay();
let nombreDia= '';
switch (numeroDia) {
    case 0: nombreDia='Domingo';
        break;
    case 1: nombreDia='Lunes';
        break;
    case 2: nombreDia='Martes';
        break;
    case 3: nombreDia='Miercoles';
        break;
    case 4: nombreDia='Jueves';
        break;
    case 5: nombreDia='Viernes';
        break;
    case 6: nombreDia='Sábado';
        break;
    
}
day.textContent=nombreDia;