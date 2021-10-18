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
const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`El empleado con id ${id} no existe`);
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        console.log('Error!');
        return console.log(err);
    }
    console.log('Empleado existe!');
    return console.log(empleado);
});

//se establece callback para indicar en la función que se va a llamar
const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.dinero; //? null check operator available at node 14.x
    //se establece null para evitar que salga error al momento de llamar a la función
    if(salario){
        callback(null, salario);
    }else{
        callback(`El salario con id ${id} no existe`);
    }
}

getSalario(2, (err, salario) => {
    if(err){
        console.log('Error!');
        return console.log(err);
    }else{
        console.log('Salario encontrado');
        return console.log(salario);
    }
});