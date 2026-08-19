# Books API

## Aufgabe 1: Projektstart mit npm

Das Projekt wurde mit npm initialisiert.

Verwendeter Befehl:

```bash
npm init
```

Ergebnis:

- Eine `package.json` wurde erstellt.
- Der Projektname ist `books-api`.
- Die Version ist `1.0.0`.
- Die Beschreibung ist `books API`.
- Der Einstiegspunkt ist `src/server.js`.
- Das Projekt verwendet ES Modules mit `"type": "module"`.
- Es gibt ein `start`-Script und ein `dev`-Script.

Wichtige Scripts:

```json
{
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}
```

## Aufgabe 2: Projektstruktur anlegen

Es wurde eine einfache Backend-Struktur vorbereitet.

Aktuelle Struktur:

```text
src/
  server.js
  routes/
    books.js
  data/
    books.js
```

Bedeutung der Dateien:

- `src/server.js` startet spaeter den Express-Server.
- `src/routes/books.js` enthaelt spaeter die Routes fuer die Buecher-API.
- `src/data/books.js` enthaelt spaeter die In-Memory-Daten fuer die Buecherliste.

## Aufgabe 3: Pakete mit npm verwalten

Verwendete Befehle:

```bash
npm install express
npm install -D nodemon
npm install dayjs
npm outdated
npm update
npm uninstall dayjs
```

Was die Befehle bedeuten:

- `npm install express` installiert `express` als normale lokale Abhaengigkeit. Das Paket steht danach in `dependencies`, weil der Server Express zur Laufzeit braucht.
- `npm install -D nodemon` installiert `nodemon` als Entwicklungsabhaengigkeit. Das Paket steht danach in `devDependencies`, weil es nur beim Entwickeln hilft.
- `npm install dayjs` installiert ein temporaeres Testpaket.
- `npm outdated` zeigt, ob installierte Pakete veraltet sind.
- `npm update` aktualisiert Pakete innerhalb der erlaubten Versionen.
- `npm uninstall dayjs` entfernt das temporaere Testpaket wieder.

Erwarteter Zustand nach Aufgabe 3:

- `express` steht in `dependencies`.
- `nodemon` steht in `devDependencies`.
- `dayjs` wurde wieder entfernt.
- `node_modules` und `package-lock.json` wurden durch npm erstellt.

## Aufgabe 4: Eine einfache Buecher-API erstellen

Die einfache Buecher-API wurde mit Express erstellt.

Umgesetzt:

- Express-Server in `src/server.js` eingerichtet.
- `express.json()` aktiviert.
- Route `GET /` erstellt.
- Route `GET /api/books` erstellt.
- Buecherliste mit mindestens 3 Buechern in `src/data/books.js` erstellt.
- Books-Router in `src/routes/books.js` angelegt.

Test-URLs:

- `http://localhost:3000/`
- `http://localhost:3000/api/books`
