# Hackatrix Voting Web App

This is a web application designed for the voting process in the hackatrix event, using AngularJS, Angular Material, Grunt and Bower.

#Features

- A simple way to managing your web applications.
- Index.html file generation and administration automatically.
- Bower components administration automatically.
- AngularJS project architecture integrated. 
- Controlling your web apps development and distributions (zip packaging)
- minifying css and js distribution automatically
- Developing with live-reload (in port: 3000) - http://localhost:3000
- Freddie task for to manage a server http with *.json mockups files [fixtures] and a scalable proxy reverse backend calls implementation - [https://www.npmjs.com/package/freddie]
- Sass for extend CSS language

Based in swam project [https://github.com/techfano/swamMaterial]

# Getting started

it's easy to use, first you need to install the follow

- Node.js https://nodejs.org/
- Bower http://bower.io/ (npm install -g bower)
- Grunt http://gruntjs.com/getting-started (npm install -g grunt grunt-cli)

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

For production versioning, execute in the console the next command:

<code>
grunt packing
</code>

This command create the "distro" folder with the css and js minified, ziped project into "distro/zip" folder and all the necesary (in advance).


this command is executed for activate the grunt tasks, for to import and order the bower dependencies, minifying css and js files, develop with live overload and other tasks in advance.

Thanks.

Estefano Castañeda.
