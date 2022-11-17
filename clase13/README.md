## Pasos para crear un repositorio local y asociarlo al remoto:
``` shell
git init 
git add .
git commit -m "first commit"
git branch -M main
git remote add origin LINK_GIT
git push -u origin main
```

## Pasos para crear rama(Branch)
``` shell
## Con este comando se crea una rama nueva a partir de otra rama
git checkout -b NOMBRE_RAMA_A_CREAR
## Este comando es para subir una rama creada en local
git push -u origin NOMBRE_RAMA_A_CREAR
```

# Para agregar nuevos cambios y subirlos debo hacer:
``` shell
## puedo subir todos o si quiero uno tengo que escribir la ruta donde este
git add .

git commit -m "El mensaje de commit"

## Con este se suben los cambios al repositorio
git push 
```
## Pasos para ser colaborador
- Aceptar la invitación del dueño
- Entrar al repositorio 
- Copiar el link del repo
- Entrar a la carpeta en la que quiero guardar los archivos
- Abrir vsCode
- Abrir la terminal
- git clone *pego lo que copie antes*
- cd nombreDeLaCarpeta
- editar