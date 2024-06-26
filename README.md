"# Abarrotes_Mongo" 

Creacion del servidor:
mkdir server
cd server
npm init --yes
npm i express morgan cors
mkdir src
cd src
npm install -g typescript
tsc --init
tsc
node build/index.js
npm i nodemon -D
npm i @types/express -D
mkdir routes
npm i @types/morgan -D
npm i @types/cors -D

Base de Datos Mongo (previa instalación de MongoDB desde su página):
npm install mongoose
