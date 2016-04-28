# Hackatrix Vote Client

This web application has been designed for the hackatrix voting process, using:

- [AngularJS] (https://angularjs.org/)
- [Angular Material] (https://material.angularjs.org/)
- [Sass] (http://sass-lang.com/)
- [Grunt] (http://gruntjs.com/)
- [Bower] (http://bower.io/)
- [NodeJS] (https://nodejs.org/)

#Features

- A simple way to managing your web applications.
- Index.html file generation and administration automatically.
- Bower components administration automatically.
- AngularJS project architecture integrated. 
- Controlling your web apps development and distributions (zip packaging)
- minifying css and js distribution automatically
- Developing with live-reload (in port: 3000) - http://localhost:3000
- Freddie tool for to manage a server http using *.json mockups [fixtures] and a scalable proxy reverse backend calls implementation - for more details visit [https://www.npmjs.com/package/freddie]
- Sass for extend CSS language

Based in [Swam] (https://github.com/techfano/swamMaterial) project

# Getting started

First you need to install following

**Installing Node.js**

**Windows**
> You can download the .exe installer [here] (https://nodejs.org/en/download/) and follow the wizard to installation

**Linux - Ubuntu/Debian**

1- Open your terminal and execute the next commands
```bash
sudo apt-get update && sudo apt-get install git-core curl build-essential openssl libssl-dev
```
2- Then cloning the nodeJS repository in a desired location
```bash
git clone https://github.com/nodejs/node.git node && cd node
```
3- If you wish choose a version, but if you want to work with the latest skip this step
```bash
git checkout v4.4.3
```
4- Creating the makefile
```bash
./configure
```
5- Preparing the installation
```bash
make
```
6- Installing
```bash
sudo make install
```

**Installing Bower**
```bash
npm install -g bower
```
for more details visit [Bower website] (http://bower.io/)

**Installing Grunt**
```bash
npm install -g grunt grunt-cli
```
for more details visit [Grunt website] (http://gruntjs.com/getting-started)

**Installing Sass**

> First Install Ruby

```bash
sudo apt-get install ruby-full
```

> Second install sass 

```bash
sudo su -c "gem install sass"
```

#Finally

Enter with the console to the main project folder, example:

<code>
cd C:/main or cd /var/html/main - for example.
</code>


when you are into the main folder execute the follow commands:

- npm install (for install the nodejs dependencies and grunt plugins, configured in package.json file)
- bower install (for install the bower components for to develop configures in bower.json file)

Finally execute in the console the grunt tasks configured previously into grunfile.js file:

<code>
grunt swam
</code>

The command "grunt swam", create automatically the index.html into "source" folder and you´ll can edit all the application here, copy and incorporate inside index the tags for bower dependencies and javascript files, you can administrate too the index.html in the template folder for example:

- template/source
  - index.html
  - header.html
  - footer.html

For production packaging, compress only execute in the terminal the next command:

<code>
grunt distro
</code>

This command create the "distro" folder with the css and js minified, ziped project into "distro/zip" folder and all the necesary (in advance).

this command is executed for activate the grunt tasks, for to import and order the bower dependencies, minifying css and js files, develop with live overload and other tasks in advance.

Thanks help to improve this document.

Estefano Castañeda.
