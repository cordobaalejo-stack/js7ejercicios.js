// (a) calcularPromedio(notas)
const calcularPromedio = (notas) => {
  if (!notas.length) return 0;
  const suma = notas.reduce((acc, num) => acc + num, 0);
  return suma / notas.length;
};

// Prueba
console.log("Promedio:", calcularPromedio([7, 8, 6, 9]));


// (b) filtrarAprobados(alumnos)
const filtrarAprobados = (alumnos) => {
  return alumnos.filter(alumno => alumno.nota >= 6);
};

// Prueba
const alumnos = [
  { nombre: "Juan", nota: 7 },
  { nombre: "Ana", nota: 5 },
  { nombre: "Pedro", nota: 8 }
];

console.log("Aprobados:", filtrarAprobados(alumnos));


// (c) formatearAlumnos(alumnos)
const formatearAlumnos = (alumnos) => {
  return alumnos.map(alumno => `Nombre: ${alumno.nombre} - Nota: ${alumno.nota}`);
};

// Prueba
console.log("Formateados:", formatearAlumnos(alumnos));


// (d) buscarAlumno(alumnos, nombre)
const buscarAlumno = (alumnos, nombre) => {
  return alumnos.find(alumno => alumno.nombre === nombre);
};

// Prueba
console.log("Buscar alumno:", buscarAlumno(alumnos, "Ana"));
