# TP-2C-2017-groupe-CARRE-DUMONT

# Installation:

Avant de pouvoir lancer le programme,

Avec un terminal : 
-Utiliser la commande : cmd /c start https://github.com/TpLicorne/TP-2C-2017-groupe-CARRE-DUMONT pour accéder au repository.
-Cloner le projet

Avec Jetbrains webstorm :
-Installer yarn avec :
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install -y yarn puis configurer avec : yarn config set prefix ~/.yarn
add to you .bashrc or .zshrc : `export PATH=$PATH:$(yarn global bin)` pour linux

https://yarnpkg.com/en/docs/install pour windows

https://www.cakebrew.com/ pour Mac. 
-Installer npm avec la commande : npm install

# Commande d'utilisation:

Pour lancer le programme :
Dans le terminal de Jetbrains, utiliser les commandes :
-npm init
-npm start

# Composition du répertoire :

Le répectoire est composé d'un sous-répertoire , app , d'un fichier index.js et d'autres fichiers .

Le fichier index.js nous permet d'executer le programme. 

Dans le répertoire app, vous trouvez les fichiers suivant:
. deadpool.js
. spiderman.js
. licorne.js
. poney.js


# Licence :

Le programme utilise une licence MIT

