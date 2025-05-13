# Proyecto con Controladores (Express.js)

Este proyecto es una aplicación web construida con Node.js y Express que implementa una estructura con controladores y modelos.

## Instalación

Clona este repositorio y navega al directorio del proyecto:

```bash
git clone https://github.com/usuario/proyecto-con-controladores.git
cd proyecto-con-controladores
````

Instala las dependencias necesarias:

```bash
npm install
```

Esto instalará todos los paquetes listados en `package.json`, como `express`, `body-parser`, `morgan`, entre otros.

## Uso

### Iniciar la aplicación web

Para correr el servidor Express:

```bash
npm start
```

Por defecto, el servidor estará disponible en `http://localhost:3000`. Puedes modificar el puerto en el archivo `app.js`.

### Estructura del proyecto

```
proyecto-con-controladores/
├── app.js                # Archivo principal
├── routes/               # Rutas de la aplicación
├── controllers/          # Lógica de controladores
├── models/               # Modelos de datos
├── public/               # Archivos estáticos
├── views/                # Plantillas HTML (si las hay)
├── test.sh               # Script de prueba con curl
└── package.json
```

## Pruebas

### Script `test.sh`

El archivo `test.sh` contiene una serie de pruebas automatizadas usando `curl` para verificar el comportamiento de la API.

Para ejecutarlo:

```bash
chmod +x test.sh
./test.sh
```

Este script realiza llamadas HTTP a los endpoints definidos en tu aplicación y muestra las respuestas. Útil para verificar si la API responde correctamente después de una modificación.

## Personalización

* Puedes modificar las rutas en `routes/`.
* La lógica se encuentra en `controllers/`.
* Los datos (si se simulan sin BD) se definen en `models/`.

