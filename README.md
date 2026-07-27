# florianronsse.net

Persoonlijke portfoliowebsite van Florian Ronsse, IT Support & Field Technology professional
uit Oudenaarde (België). De site positioneert werkervaring, homelabprojecten en vaardigheden
voor functies zoals IT Support Engineer, Desktop Support Engineer, Field Support Technician,
Junior System Administrator, Network Support Engineer en Technical Operations.

De site is tweetalig (Nederlands en Engels) en online op **<https://florianronsse.net>**.

---

## Technologieën

Bewust klein gehouden: geen framework, geen buildstap, geen externe afhankelijkheden.

| Onderdeel | Keuze |
|---|---|
| Markup | Semantische HTML5 |
| Styling | Moderne CSS (custom properties, Grid, Flexbox, `clamp()`), één stylesheet |
| Gedrag | Vanilla JavaScript (ES5-syntaxis, `IntersectionObserver`, `fetch`) |
| Lettertypes | System font stack, geen webfont-downloads |
| Formulier | [Formspree](https://formspree.io) |
| Hosting | GitHub Pages met custom domain |

Er is geen `package.json`, geen bundler en geen CI-pipeline nodig. Wat in de repository staat,
is exact wat de browser krijgt.

## Lokaal draaien

Elke statische webserver volstaat. Vanuit de repository-root:

```bash
python3 -m http.server 4173
```

Open daarna <http://localhost:4173>. Voor de Engelse versie: <http://localhost:4173/?lang=en>.

> Open `index.html` niet rechtstreeks via `file://`. De taalwissel en het contactformulier
> werken dan niet betrouwbaar.

## Mapstructuur

```
.
├── index.html          Volledige pagina: alle secties, metadata en structured data
├── css/
│   └── style.css       Alle styling, met genummerde secties bovenaan het bestand
├── js/
│   ├── i18n.js         Vertaaldictionary (nl + en) — hier staat alle tekst
│   └── main.js         Gedrag: taalwissel, navigatie, scrollspy, animaties, formulier
├── assets/             Afbeeldingen (logo, screenshots, cv, og-image)
├── robots.txt          Crawlerinstructies + verwijzing naar de sitemap
├── sitemap.xml         Eén URL, met hreflang-varianten
└── CNAME               Custom domain voor GitHub Pages
```

## Teksten aanpassen

Alle zichtbare tekst loopt via een sleutel-gebaseerd vertaalsysteem.

1. **`js/i18n.js`** bevat de dictionary met twee blokken: `nl` en `en`.
   Pas hier de tekst aan. **Werk altijd beide talen bij**, anders valt de site
   voor die sleutel terug op de andere taal.
2. **`index.html`** bevat dezelfde Nederlandse tekst hardcoded als fallback, zodat de
   pagina correct leest voordat JavaScript draait. Wijzig je een Nederlandse tekst in
   `i18n.js`, pas dan ook de tekst in het HTML-element met dezelfde `data-i18n`-sleutel aan.

De attributen die het systeem herkent:

| Attribuut | Effect |
|---|---|
| `data-i18n` | Vervangt de `textContent` van het element |
| `data-i18n-placeholder` | Vervangt het `placeholder`-attribuut |
| `data-i18n-aria-label` | Vervangt het `aria-label`-attribuut |
| `data-i18n-alt` | Vervangt het `alt`-attribuut van een afbeelding |

> **Belangrijk:** een element met `data-i18n` moet een *leaf* zijn, dus zonder child-elementen.
> `textContent` overschrijft namelijk alles wat erin staat. Heb je een titel met een icoon of
> een nummer erin, zet de vertaalbare tekst dan in een eigen `<span data-i18n="...">`.

De sleutels `meta.*` hebben geen HTML-element. Die worden door `js/main.js` rechtstreeks op de
`<title>`, de meta description en de Open Graph- en Twitter-tags gezet.

### Taalkeuze

- De gekozen taal wordt bewaard in `localStorage` onder de sleutel `lang`.
- `?lang=en` opent de site meteen in het Engels en onthoudt die keuze.
  Handig voor internationale sollicitaties: <https://florianronsse.net/?lang=en>
- Zonder parameter en zonder eerdere keuze start de site in het Nederlands.

## Projectbeelden toevoegen

In `index.html` staat per project een `<figure class="project-media">` met een
`<div class="media-placeholder">` erin. De site ziet er professioneel uit zolang die
placeholders er staan, dus je kan ze één voor één vervangen.

Vervang de placeholder-`div` door:

```html
<img src="assets/unifi-dashboard.png"
     alt="UniFi-dashboard met een overzicht van de aangesloten apparaten"
     width="1200" height="750" loading="lazy" decoding="async">
```

Verwachte bestanden (aanbevolen 1200 × 750 px, verhouding 16:10):

| Bestand | Project |
|---|---|
| `assets/unifi-dashboard.png` | UniFi-netwerk met VLAN-segmentatie |
| `assets/network-diagram.png` | Optioneel, naast het ingebouwde CSS-diagram |
| `assets/proxmox-dashboard.png` | Proxmox- en Linux-homeserver |
| `assets/homelab.jpg` | Foto van de homelab-opstelling |
| `assets/home-assistant.png` | Veilige remote toegang en domotica |
| `assets/og-image.png` | Sharing image voor sociale media (**1200 × 630 px**) |

Zoek in `index.html` op `TODO` en op `placeholder` om alle plekken terug te vinden.
Behoud de `width` en `height` attributen: die voorkomen layout shift tijdens het laden.

> ⚠️ **Lees eerst de beveiligingswaarschuwing hieronder voor je screenshots uploadt.**

## Cv toevoegen

1. Plaats het cv als `assets/cv-florian-ronsse.pdf`.
2. Open `index.html`, zoek op `TODO cv-knop` in de hero-sectie en haal de HTML-comment
   rond het `<a class="btn btn-outline" download>`-blok weg.

De vertalingen (`hero.ctaCv`) staan al klaar in `js/i18n.js`, dus de knop werkt meteen
in beide talen. De knop staat bewust uitgeschakeld zolang het bestand ontbreekt, zodat
bezoekers geen 404 krijgen.

## Profielfoto toevoegen

De rechterkolom van de hero is nu een infrastructuurkaart, opgebouwd in HTML en CSS.
Wil je daar een foto tonen: plaats `assets/florian-ronsse.jpg` en vervang het volledige
`<div class="hero-visual">`-blok door het alternatief dat als comment in `index.html`
boven dat blok staat. De stijl `.hero-photo` staat al in `css/style.css`.

## Deployment

De site draait op **GitHub Pages** en wordt rechtstreeks vanuit de repository geserveerd.
Er is geen buildstap: een push naar de gepubliceerde branch is de deploy.

1. Repository → **Settings → Pages**
2. **Source**: Deploy from a branch
3. **Branch**: de standaardbranch, map `/ (root)`

### Custom domain

Het bestand `CNAME` in de root bevat `florianronsse.net`. GitHub Pages leest dat bestand uit
en koppelt het domein automatisch. **Verwijder of hernoem `CNAME` niet** — het domein valt dan
terug op de `github.io`-URL.

Bij de DNS-provider staan de standaard GitHub Pages-records (`A`-records naar de GitHub Pages
IP's voor het apex-domein, of een `CNAME` naar `<gebruiker>.github.io` voor `www`).
Zet in de Pages-instellingen ook **Enforce HTTPS** aan.

Wijzigt het domein, pas dan ook aan:

- `CNAME`
- de canonical en `hreflang`-links in `index.html`
- de Open Graph- en Twitter-URL's in `index.html`
- `"url"` in het Schema.org-blok in `index.html`
- `robots.txt` en `sitemap.xml`

## ⚠️ Beveiligingswaarschuwing: screenshots en persoonlijke gegevens

Deze site is publiek en wordt geïndexeerd door zoekmachines. Screenshots van een dashboard
verraden vaak meer dan bedoeld. **Controleer elke afbeelding voor je ze commit** — eenmaal
gepusht blijft ze in de git-geschiedenis staan, ook nadat je het bestand verwijdert.

Knip weg of maak onleesbaar:

- publieke en private IP-adressen, subnetten en poortnummers
- hostnames, servernamen en interne domeinconfiguraties
- gebruikersnamen, e-mailadressen en accountgegevens
- MAC-adressen en serienummers van apparaten
- API-sleutels, tokens, QR-codes en sessie-URL's
- concrete firewallregels en VPN-configuraties
- apparaatnamen in Home Assistant die je adres of dagindeling prijsgeven

Het netwerkdiagram op de site is daarom bewust schematisch: het toont VLAN's bij naam
(hoofdnetwerk, gasten, IoT) en nooit bij adres.

Op de site staan verder bewust **geen telefoonnummer en geen woonadres**. Contact loopt via
het formulier en via LinkedIn. Wijzig dat niet zonder daar bewust voor te kiezen.

## Licentie

Broncode vrij te hergebruiken als referentie. Inhoud, teksten, logo's en afbeeldingen zijn
persoonlijk eigendom van Florian Ronsse.
