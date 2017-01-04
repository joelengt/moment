# Instalation

1.- Clone repository

``
	git clone https://joelgt@bitbucket.org/joelgt/wuf-perritos-lindos.git
``

2.- Install dev-dependencies (required stylus for css, and optional a local server static)

``
	npm install --dev
``

# Start on Local Static Server
1.- The project can open a local static server using http-server module from npm from Terminal.

``
	npm run server
``

# Development - Compile stylus changes
File moduls stylus are ./lib. and all the files can compile automaticly and watching your changes directly on public/css.

``
	npm run build-css
``

* The commands are only shortcuts, the scrips for config more options are on package.json file.
