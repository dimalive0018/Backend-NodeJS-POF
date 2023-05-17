<h1 align="center">Backend-NodeJS-POF</h1>
<br/>
<p align="center">
  <h2 align="center">Backend generico costruito per ipotetica azienda di cibo plant based</h3>
  <h3 align="center">Trovi il progetto [qui](https://codesandbox.io/p/github/liviodimola/Backend-NodeJS-POF/main?file=%2FinitDB.js%3A1%2C38&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clhsakznk000b3n6k4lvp8cfu%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522panelType%2522%253A%2522TABS%2522%252C%2522id%2522%253A%2522clhsakznk000d3n6kdcpf1n4w%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clhsakznk000b3n6k4lvp8cfu%2522%253A%257B%2522id%2522%253A%2522clhsakznk000b3n6k4lvp8cfu%2522%252C%2522activeTabId%2522%253A%2522clhsalb7v00g53n6ku1govns9%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clhsakznk000a3n6kgaqbx7pu%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FinitDB.js%2522%257D%252C%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Frest.http%2522%252C%2522id%2522%253A%2522clhsalb7v00g53n6ku1govns9%2522%252C%2522mode%2522%253A%2522temporary%2522%257D%255D%257D%252C%2522clhsakznk000d3n6kdcpf1n4w%2522%253A%257B%2522id%2522%253A%2522clhsakznk000d3n6kdcpf1n4w%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522id%2522%253A%2522clhsal1d6007m3n6kcbf9vrk6%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clhsal1d6007m3n6kcbf9vrk6%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)</h3>
</p>

![Forks](https://img.shields.io/github/forks/liviodimola/Backend-NodeJS-POF?style=social) ![Stargazers](https://img.shields.io/github/stars/liviodimola/Backend-NodeJS-POF?style=social) 

## Costruito con
* [Node](https://nodejs.org/it)
* [Express](https://expressjs.com/it/)
* [MongoDB](https://www.mongodb.com/it-it)
* [Mongoose](https://mongoosejs.com/)
* [Nodemon](https://nodemon.io/)
* [Multer](https://www.npmjs.com/package/multer)
* [Sinon](https://www.npmjs.com/package/dotenv)
* [Mongo-sanitize](https://www.npmjs.com/package/mongo-sanitize)
* [Http-errors](https://www.npmjs.com/package/http-errors/v/1.6.)
* [Dotenv](https://www.npmjs.com/package/dotenv)
## Utilizzo
Questo codice rappresenta un'applicazione per gestire ordini, prodotti e utenti.

Le principali funzionalità dell'applicazione includono:

<h3>Gestione dei prodotti:</h3>

Ricevere tutti i prodotti.
Creare un nuovo prodotto fornendo il nome.
Creare un nuovo prodotto con un'immagine.
Trovare un prodotto specifico tramite ID.
Aggiornare un prodotto esistente tramite ID fornendo un nuovo nome.
Aggiornare un prodotto esistente con un'immagine.
Eliminare un prodotto tramite ID.
Gestione degli utenti:

<h3>Gestione utenti:</h3>

Ricevere tutti gli utenti.
Creare un nuovo utente fornendo nome, cognome ed email.
Creare un nuovo utente con un'immagine.
Trovare un utente specifico tramite ID.
Aggiornare un utente esistente tramite ID fornendo nuovi dati (nome, cognome, email).
Aggiornare un utente esistente con un'immagine.
Eliminare un utente tramite ID.
Gestione degli ordini:

<h3>Gestione ordini:</h3>

Ricevere tutti gli ordini.
Creare un nuovo ordine fornendo prodotti, utenti e data di inserimento.
Creare un nuovo ordine con un documento.
Trovare un ordine specifico tramite ID.
Aggiornare un ordine esistente tramite ID fornendo nuovi dati (prodotti, utenti, data di inserimento).
Aggiornare un ordine esistente con un documento.
Eliminare un ordine tramite ID.


Il progetto segue l'architettura MVC.
## Autore
* [Livio Dimola](https://github.com/liviodimola) - *novello Full Stack Developer*
