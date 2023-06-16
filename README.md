Applicazione FE (Solution Angular):

	Tale soluzione implementa i seguenti component:
		- Main - Wrapper di base che annette header, router-outlet, footer e spinner
		- Spinner - Layer di caricamento che viene mostrato durante le principali request verso il BE
		- Header - Navbar principale del site. Una volta autenticati, mostra il button "Logout"
		- Footer - Navbar secondaria con informazioni relative all'autore del site
		- Login - Component contenente la form (comprensiva del funzionamento di validazione) per l'autenticazione con 3 input:
			a) Username (Required)
			b) Password (Required)
			c) Session Expiration
		- Home - Component contenente due sezioni principali:
			a) Lista delle aziende presenti a sistema. Per ogni azienda, viene mostrata una card contenente le proprietà necessarie più i due button di "Edit" e "Delete"
				(per il funzionamento del button di "Delete", non è stata annessa una modale di richiesta conferma)
			b) Card per l'inserimento di una nuova azienda o la modifica di una pre-esistente. Questa contiene una form (comprensiva del funzionamento di validazione)
				ed i due button di "Submit" e "Cancel" (la cui visibilità è gestita condizionalmente)
		- NotFound - Component contenente un messaggio "user-friendly" ed il link di re-indirizzamento alla home.
			Questa viene mostrata nel caso la url digitata non corrisponda ad alcuna rotta attiva.
	
	Per le rotte il cui accesso va protetto, è stata gestita l'opzione "canActivate" tramite apposito costrutto "AuthGuardService"
	
	Ai fini dell'implementazione logica e grafica, è stato utilizzato il framework Angular Material
	
	Non sono state utilizzate librerie di terze parti per la manipolazione stilistica (ex. Angular Flex, Bootstrap), ma solo istruzioni di stile metacompilate (SCSS)
	
	Istruzioni per l'esecuzione:
		- APRIRE CON VISUAL STUDIO CODE LA FOLDER "Movesion Challenge\Code\FE\MovesionChallengeAngular"
		- APRIRE LA CONSOLE (Ctrl + ò) ED ESEGUIRE L'ISTRUZIONE "ng s"
		- ACCEDERE, TRAMITE UN QUALUNQUE BROWSER A DISPOSIZIONE, ALLA URL https://localhost:4200







# MovesionChallengeAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
