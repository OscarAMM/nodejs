const empleados = [
    {
        id: 1,
        nombre: 'racso'
    },
    {
        id: 2,
        nombre: 'asteroide'
    },
    {
        id: 3,
        nombre: 'chuleta'
    }
];
const salarios = [
    {
        id: 1,
        dinero: 1000
    },
    {
        id: 2,
        dinero: 1500
    }
];

//promesa
const getEmpleado = (id) => {
    const empleado = empleados.find(e => e.id === id)?.nombre

    return new Promise((resolve, reject) => {
        (empleado) ? resolve(empleado) : reject(`No existe empleado con id ${id}`);
    });
}
const getSalario = (id) => {
    const salario = salarios.find(s => s.id === id)?.dinero;

    return new Promise((resolve, reject) => {
        (salario) ? resolve(salario) : reject(`No existe el salario con id ${id}`);
    });
}

let nombre;
const id = 4;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id);
    })
    .then(salario => {
        console.log(`El empleado ${nombre} tiene un salario de ${salario}`);
    })
    .catch(err => console.error(err));