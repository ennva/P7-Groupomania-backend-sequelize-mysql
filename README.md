# Projet-7

Pour le faire fonctionner il faut te rendre dans la console et suivre les étapes suivantes:

1- lancer la commande "npm install"

2- créer une base de donnée mysql avec la commande "CREATE DATABASE database_developpment_groupomania". 

3- effectuer la création de la structure de la base de donnée avec la commande "npx sequelize-cli db:migrate". Si tu n'as pas  déja installer npx, installe le avec "npm i -g npx"

4- J'ai créé quelques données pour la démo dans le fichier seeders/20220313212244-demo-user.js. pour inserer ces données dans la base de donné il faut lancer la commande "npx sequelize-cli db:seed:all"

5- une fois compléter les précédentes étapes sans erreurs, tu peux lancer le server backend "nodemon server"

6- fais des tests sur les différentes routes, particulièrement sur la userRoutes.


Le projet utilise sequelize pour se connecter à la base de donné et non mysql comme library.
