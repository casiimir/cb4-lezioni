## 25/07/2022
### Esercizio 1
Sulla base della lezione del giorno:
- Continuare la stesura del file /utils/api.js includendo i metodi per la chiamata di tipo GET e DELETE.

- Sostituire la semplice chiamata fetch del componente `MessageCardList` con il nuovo metodo creato come sopra.

### Esercizio 2
- Creare il componente o i componente per la gestione degli amici e aggiungerlo ad `App` all'interno di `<div className="App__friends"></div>`.

### Avanzato
- Provare a scrivere un algoritmo (funzione) che ordini la lista dei messaggi (di `MessageCardList`) in base alla data presente nell'array alla chiave `date`.

<br>
<hr>
<br>

## 26/07/2022
### Esercizio 1
- Sostituire il metodo `confirm` con una modale. Questa deve essere un componente. - Attenzione: rendiamola quanto più riutilizzabile possibile, perchè vorremo solo una modale per tutta l'app.

### Esercizio 2
- Creare un filtro per la lista dei messaggi, che agisca tramite `<input>` (collocarla sotto il bottone 'Invia')
- La lista deve poter filtrare per `sender`
- Attenzione! Ricordatevi dei `controlled component`

### Avanzato
- Il filtro funzionarà anche per click sulla lista degli amici
- Attenzione: badate bene che ci sia almeno un messaggio con il nome che state cercando (anche nel caso del filtro per input)

## 27/07/2022
### Esercizio 1
- Creare un componente Navbar che implementi (a scelta) i classici elementi di una navbar. È indispensabile l'aggiunta di un logo.

### Esercizio 2
- Come utente finale, sotto la lista degli amici, vorrei poter visualizzare una sezione (create un componente) che permetta di aggiungere un nuovo amico. (Esatto! Proprio come abbiamo fatto per la lista dei messaggi!)

### Avanzato
- Ogni amico può essere rimosso dalla lista, cliccando appositamente sulla sua icona.

## 28/07/2022
### Esercizio 1
- Sostituire il comportamento della Splashscreen riutilizzando il componente Modale. Attenzione: siate liberi di implementare la funzionalità come più vi aggrada.

### Esercizio 2
- Se qualche esercizio precedente è stato saltato, recuperarlo oggi, è il momento giusto!

### Avanzato
- (solo per chi ha già finito tutto il resto sopra)
- Completare la pagina ottimizzandone il design e aggiungendo eventualmente nuovi componenti (non logici, ma solo di stile) al fine di rendere la pagina più piacevole alla vista (per esempio una `Hero` o/e un `Carosello` o/e `Slider` o/e ... ).

## 29/07/2022
### Esercizio 1
- Per chi non avesse completato gli esercizi passati, oggi è l'ultimo giorno per poterlo fare!!!

### Esercizio 2
- Creare un button o una sezione di log-out che una volta premuto riporti alla splash-screen (o alla modale, in base a come l'avete fatto) che richiede nuovamente il nome dell'utente.
- Attenzione: pertanto lavorate sulla rimozione dei valori in localStorage.

### Avanzato
- È tempo di `Refactoring`! Adesso che avete il vostro progettino social personale, cancellare:
- - tutti i `console.log`
- - tutti i commenti che non siano utili
- - sellire giusto un pochino la logica se possibile (usare ternario al posto di if e cose cosi...)