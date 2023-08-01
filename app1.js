'use strict';

// 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.

// Output:

const meses = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  
  /*
  <ul>
      <li>Mes</li>
  </ul>
  */
  console.log('Lista de meses')
  meses.forEach((mes) => {
    console.log(mes);
  });