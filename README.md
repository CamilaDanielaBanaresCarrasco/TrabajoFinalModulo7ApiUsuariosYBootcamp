# TrabajoFinalModulo7ApiUsuariosYBootcamp

# Consultas API

Aquí te presentamos varias consultas que puedes realizar utilizando la API.

## Bootcamp

1. **Consultar un Bootcamp por ID, incluyendo los usuarios**: Para hacer esto, debes utilizar el siguiente endpoint:

    ```
    http://localhost:8080/bootcamp/bootcamps/{id}
    ```
    Reemplaza `{id}` con el ID del Bootcamp que deseas consultar.

2. **Listar todos los Bootcamps con sus usuarios**: Para hacer esto, debes utilizar el siguiente endpoint:

    ```
    http://localhost:8080/bootcamp/bootcamps
    ```

## Usuarios

1. **Consultar un usuario por ID, incluyendo los Bootcamps**: Para hacer esto, debes utilizar el siguiente endpoint:

    ```
    http://localhost:8080/user/usuarios/{id}
    ```
    Reemplaza `{id}` con el ID del usuario que deseas consultar.

2. **Listar los usuarios con sus Bootcamps**: Para hacer esto, debes utilizar el siguiente endpoint:

    ```
    http://localhost:8080/user/usuarios/
    ```

3- **Actualizar el usuario según su id:**   
Para actualizar un usuario necesitarás hacer un PUT a la siguiente URL:   
http://localhost:8080/user/usuarios/{id}

El cuerpo de la solicitud debe ser un JSON que contiene los datos actualizados del usuario. Por ejemplo:

```json
{
    "firstname": "Pedro",
    "lastname": "Sanchez",
    "email": "pedro.sanchez@correo.com"
}
```
4- **Eliminar un usuario según su id:**   
Para eliminar un usuario necesitarás hacer un DELETE a la siguiente URL:   
```
http://localhost:8080/user/usuarios/{id}
```
No necesitas incluir ningún cuerpo en la solicitud. Simplemente reemplaza `{id}` con el id del usuario que quieres eliminar.
