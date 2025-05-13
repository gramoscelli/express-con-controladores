// simulación de un modelo en memoria

class ClientsModel {
    constructor () {
        this.data =[];
        this.id = 0;
    }
    // crea un dato nuevo (alta de cliente)
    create(nombre, apellido, dni) {
        let info = { id:this.id, nombre: nombre, apellido: apellido, dni: dni};
        this.id++;
        this.data.push(info);
        return info;
    }
    // actualiza los datos del cliente con id = id
    update (id, nombre, apellido, dni) {
        try {
            let pos = this.data.map((object) => object.id).find(id);
            let info = { id:id, nombre: nombre, apellido: apellido, dni: dni};
            this.data[pos] = info;
        } catch(error) {
            console.log('Error: el id no existe');
        }
        return info;
    }
    // elimina el cliente con id = id
    delete (id) {
        try {
            let pos = this.data.map((object) => object.id).find(id);
            this.data.splice(pos, 1); // elimina el elemento de la posición pos del arreglo
        } catch(error) {
            console.log('Error: el id no existe');
        }
    }
    // devuelve la lista completa en un arreglo de strings
    list() {
        return this.data.map( (object) =>  object.apellido.concat(", ").concat(object.nombre) );

    }
}

module.exports = new ClientsModel();
