## Pasos para crear un repositorio local y asociarlo al remoto:
``` shell
git init 
git add .
git commit -m "first commit"
git branch -M main
git remote add origin LINK_GIT
git push -u origin main
```

# Pasos para crear rama(Branch)
``` shell
## Con este comando se crea una rama nueva a partir de otra rama
git checkout -b NOMBRE_RAMA_A_CREAR
## Este comando es para subir una rama creada en local
git push -u origin NOMBRE_RAMA_A_CREAR
```