# TAKOFLY

[TakoFly](https://netlify.app/) proyecto desarrollado en React y CSS, por parte del frontend.

## Inicializando el proyecto

#### Dependecias

- Es necesario instalar las dependencias, tan pronto se clone el proyecto.

Librerias utilizadas

```shell
npm i axios
npm i react-router-dom
```

```shell
$ npm install
```

Una vez hecho esto, crear un archivo `.env` para generar las variables de entorno.

`.env`

```
REACT_APP_BACKEND_URL='API_BACKEND'
REACT_APP_APIKEY='APP_APIKEY'
```

Para correr la aplicación de manera local, deberá ejecutar:

### `npm run start`

puede visualizar el proyecto en el navegador:
[http://localhost:3000](http://localhost:3000).

##Estructura del proyecto

**El proyecto se estructura de la siguiente manera:**

- public
- src
  - componentes
  - config
  - context
  - routes
- Hoja de estilos
- Archivo principal de JS
- Router

## Páginas de TakoFly

- Home
- Flights
- Reservations
- User

#### Home

El home es una página que se renderiza solamente cuando el usuario busca opciones de vuelo [Home](http://localhost:3000)

#### Flights

Flights renderiza la información general de los vuelos que coinciden con su búsqueda, permitiendole al usuario elegir vuelo. [Vuelos](http://localhost:3000/flights)

Dentro de esta vista se renderiza el carrito de compras con los vuelos que el usuario ha ido agregando.

### Mis Reservaciones

En ésta vista se renderizan los vuelos agendados
[Nuestros cursos](http://localhost:3000/my-reservations)

### User

Para concluir el proceso, es necesario ingresar datos personales [UserForm](http://localhost:3000/user).
