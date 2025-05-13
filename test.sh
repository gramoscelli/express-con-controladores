}#!/bin/bash

echo "1) Mostrar la lista actual"
curl -w "\n" http://localhost:3000/clients
echo "2) Cargar un cliente (Ana)"
curl -w "\n" -X POST http://localhost:3000/clients -H "Content-Type: application/json"   -d '{"nombre": "Ana", "apellido": "Sanchez", "dni": "45869587"}'
echo "3) Cargar otro cliente (Martin)"
curl -w "\n" -X POST http://localhost:3000/clients -H "Content-Type: application/json"   -d '{"nombre": "Martin", "apellido": "Perez", "dni": "476943584"}'
echo "4) Mostar la lista actual"
curl -w "\n" http://localhost:3000/clients
