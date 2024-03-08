document.write("<h1>Centro Médico Ñuñoa</h1>");
let radiologia = [
  {
    hora: "11:00",
    especialista: "IGNACIO SCHULZ",
    paciente: "FRANCISCA ROJAS",
    rut: "9.878.782-1",
    prevision: "FONASA",
  },
  {
    hora: "11:30",
    especialista: "FEDERICO SUBERCASEAUX",
    paciente: "PAMELA ESTRADA",
    rut: "15.345.241-3",
    prevision: "ISAPRE",
  },
  {
    hora: "15:00",
    especialista: "FERNANDO WURTHZ",
    paciente: "ARMANDO LUNA",
    rut: "16.445.345-9",
    prevision: "ISAPRE",
  },
  {
    hora: "15:30",
    especialista: "ANA MARIA GODOY",
    paciente: "MANUEL GODOY",
    rut: "17.666.419-0",
    prevision: "FONASA",
  },
  {
    hora: "16:00",
    especialista: "PATRICIA SUAZO",
    paciente: "RAMON ULLOA",
    rut: "14.989.389-K",
    prevision: "FONASA",
  },
];

let traumatologia = [
  {
    hora: "8:00",
    especialista: "MARIA PAZ ALTUZARRA",
    paciente: "PAULA SANCHEZ",
    rut: "15.554.774-5",
    prevision: "FONASA",
  },
  {
    hora: "10:00",
    especialista: "RAUL ARAYA",
    paciente: "ANGÉLICA NAVAS",
    rut: "15.444.147-9",
    prevision: "ISAPRE",
  },
  {
    hora: "10:30",
    especialista: "MARIA ARRIAGADA",
    paciente: "ANA KLAPP",
    rut: "17.879.423-9",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "ALEJANDRO BADILLA",
    paciente: "FELIPE MARDONES",
    rut: "1.547.423-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "CECILIA BUDNIK",
    paciente: "DIEGO MARRE",
    rut: "16.554.741-K",
    prevision: "FONASA",
  },
  {
    hora: "12:00",
    especialista: "ARTURO CAVAGNARO",
    paciente: "CECILIA MENDEZ",
    rut: "9.747.535-8",
    prevision: "ISAPRE",
  },
  {
    hora: "12:30",
    especialista: "ANDRES KANACRI",
    paciente: "MARCIAL SUAZO",
    rut: "1.1254.785-5",
    prevision: "ISAPRE",
  },
];

let dental = [
  {
    hora: "8:30",
    especialista: "ANDREA ZUÑIGA",
    paciente: "MARCELA RETAMAL",
    rut: "1.123.425-6",
    prevision: "ISAPRE",
  },
  {
    hora: "11:00",
    especialista: "MARIA PIA ZAÑARTU",
    paciente: "ANGEL MUÑOZ",
    rut: "9.8787.89-2",
    prevision: "ISAPRE",
  },
  {
    hora: "11:30",
    especialista: "SCARLETT WITTING",
    paciente: "MARIO KAST",
    rut: "7.998.789-5",
    prevision: "FONASA",
  },
  {
    hora: "13:00",
    especialista: "FRANCISCO VON TEUBER",
    paciente: "KARIN FERNANDEZ",
    rut: "18.887.662-K",
    prevision: "FONASA",
  },
  {
    hora: "13:30",
    especialista: "EDUARDO VIÑUELA",
    paciente: "HUGO SANCHEZ",
    rut: "17665461-4",
    prevision: "FONASA",
  },
  {
    hora: "14:00",
    especialista: "RAQUEL VILLASECA",
    paciente: "ANA SEPULVEDA",
    rut: "14.441.281-0",
    prevision: "ISAPRE",
  },
];

// 1. Agregar horas a Trauma con push
console.log(traumatologia);

traumatologia.push({
  hora: "09:00",
  especialista: "RENÉ POBLETE ",
  paciente: "ANA GELLONA",
  rut: "13123329 - 7",
  prevision: "ISAPRE",
}),
  traumatologia.push({
    hora: "09:30",
    especialista: "MARIA SOLAR ",
    paciente: "RAMIRO ANDRADE",
    rut: "12221451-K",
    prevision: "FONASA",
  }),
  traumatologia.push({
    hora: "10:00",
    especialista: "RAUL LOYOLA ",
    paciente: "CARMEN ISLA",
    rut: "10112348-3",
    prevision: "ISAPRE",
  }),
  traumatologia.push({
    hora: "10:30",
    especialista: "ANTONIO LARENAS ",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    prevision: "ISAPRE",
  }),
  traumatologia.push({
    hora: "12:00",
    especialista: "MATIAS ARAVENA ",
    paciente: "SUSANA POBLETE",
    rut: "14345656 - 6",
    prevision: "FONASA",
  });
console.log(traumatologia);
// 2.eliminar el primer y último arreglo de Radio

console.log(radiologia);

let primerArreglo = radiologia.shift();
console.log(radiologia);

let ultimoArreglo = radiologia.pop(); //mostrar como cambia el array después de cada operación.
console.log(radiologia);

// 3.Impr en HTML con document.write y/o las funciones que desee, la lista de consultas de Dental.
document.write(`<hr>`);
document.write(`<h4>3. Horas Dentales:</h4>`);

// Iterar sobre el array dental utilizando forEach
dental.forEach((cita) => {
  // Crear un párrafo para cada cita dental y agregar información
  document.write(
    `<p>${cita.hora} - ${cita.especialista} - ${cita.paciente} - ${cita.rut} - ${cita.prevision}</p>`
  );
});

// 4. listado de nombre de todos los pctes del centro medico
document.write(`<hr>`);
document.write(`<h4>4.Registro Usuarios Centro Médico Ñuñoa</h4>`);
let allUsuarios = radiologia.concat(traumatologia, dental, radiologia);
allUsuarios.forEach((paciente) => {
  //Se itera sobre el array allUsuarios utilizando forEach para la info de los pctes
  document.write(`<p>${paciente.paciente}</p>`);
});

// 5.Filtrar pctes de Dental que sean ISAPRE
document.write(`<hr>`);
document.write(`<h4>5.Dental</h4>`);
document.write(`<h4>Usuarios ISAPRE</h4>`);

function filtrarUsuariosDental(pacientes) {
  return pacientes.filter((paciente) => paciente.prevision === "ISAPRE");
}
const usuariosDentalISAPRE = filtrarUsuariosDental(dental);

usuariosDentalISAPRE.forEach((paciente) => {
  document.write(`<p>${paciente.paciente} - ${paciente.prevision}</p>`); // Mostrar resultados en la página utilizando document.write()
});

//6.filtrar pctes Traumatologia que sean FONASA
document.write("<br>");
document.write("<h4>6.Consultas Traumatología, usuarios FONASA:</h4>");

let traumatologiaFonasa = traumatologia.filter((filtrar) => {
  return filtrar.prevision == "FONASA"; // filtración datos para obtener pctes fonasa
});

//length devuelve el número de caracteres de una cadena, for recorre los elementos
for (let i = 0; i < traumatologiaFonasa.length; i++) {
  document.write(
    `${traumatologiaFonasa[i].paciente} - ${traumatologiaFonasa[i].prevision}`
  );
  document.write("<br><p></p>");
}
