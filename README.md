### Pasos para nuevo repo en GIT:

- Inicializamos git: `git init`
- Añadimos los cambios: `git add .`
- Hacemos un commit de los cambios: `git commit -m "tu mensaje de commit"`
- Si queremos cambiamos el nombre de la branch: `git branch -M main`
- Añadimo el remoto de nuestro repo de github: `git remote add "url repo"`
- Subimos los cambios: `git push -u origin main`

### Pasos si ya tengo el repo iniciado y quero subir mis cambios

- Añadimos los cambios: `git add .`
- Hacemos un commit de los cambios: `git commit -m "menseje descriptivo de que estoy subiendo"`
- Subimos los cambios: `git push`

### Pasos como clonar un repo

- ir al repo en github que me quiera descargar.
- buscar el boton verde code
- copiar la url de https
- ir a la terminal, añadir la ruta donde quiero descargar mi codigo ( cd ../)
- una vez en la ruta usar el comando `git clone  https://github.com/"tu-nueva-ruta" `
