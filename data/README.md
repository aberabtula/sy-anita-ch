# SY Anita - Statische Website

Statische Version der alten TYPO3-Website www.sy-anita.ch.
Funktioniert ohne Server, PHP oder Datenbank.

## Verwendung

### Lokal anschauen

```bash
cd /Users/rboner/Sites/sy-anita/static-site/sy-anita-static
python3 -m http.server 8000
```

Dann im Browser: http://localhost:8000

### Auf Webserver hochladen

Einfach den Ordner `sy-anita-static` auf einen beliebigen Webserver kopieren.

## Seiten

- **Home** - Startseite
- **Logbuch/Aktuell** - Blog mit allen Reiseberichten (2013-2020)
- **Yacht** - Informationen zur Yacht (Kaufentscheid, Technik, Sicherheit, Ausrüstung)
- **Route** - Reiseroute
- **Crew** - Crew-Informationen
- **Törns** - Törn-Informationen
- **Impressionen** - Fotogalerie

## Hinweise

- Die Blog-Einzelansichten und Kommentarfunktionen sind nicht verfügbar (benötigen PHP)
- Alle Bilder und Inhalte sind vollständig enthalten
- Die Paginierung im Logbuch funktioniert (5 Seiten)

## Inhalt

- 25 HTML-Seiten
- ~450 Bilder
- 62 MB Gesamtgrösse
