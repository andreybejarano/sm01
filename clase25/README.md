# Pasos para crear un proyecto de express desde cero

1. Crear carpeta del proyecto
2. Abrir VS code ir a File->Open Folder(Archivo->Abrir Carpeta) y buscar la carpeta y abrirla.
3. En una terminal intregada correger `npm init -y`
4. Instalar dependecias base, en nuestro caso va a ser `express` y `nodemon`.
``` shell
npm i express
npm i nodemon -D
```
5. Si se va a usar git se debe crear un archivo llamado `.gitignore` en la raiz proyecto y en este escribir `node_modules` para que ignore esta carpeta al subir el proyecto a GIT.
6. Crear el archivo `App.js` y configurar express.
    - Agregar `app.use(express.static('public'));` despues de instancear express, para servir los estaticos(CSS, IMGs, Fonts)
7. En el `App.js` configurar el servidor de expres osea ejecutar la funcion `listen` de la constante `app`.
8. Crear estructura base de carpetas y archivos(controllers, views, public, routes, etc).
9. Crear logica del controlador.
10. Crear router para cada controlador.
