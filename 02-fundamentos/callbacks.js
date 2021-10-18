const getUserById = (id, callback) => {
    const user = {
        id,
        nombre: 'Racso'
    }
    setTimeout( () => {
        callback(user)
    }, 1500);
}

getUserById(10, ({id, nombre}) => {
    console.log(id, nombre);
});