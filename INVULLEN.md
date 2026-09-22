# Nog zelf in te vullen

Alle plekken hieronder staan op de site met een **gele markering**. Zoek in de
code op `needs-input`: elke markering is één span of blok. Vervang de tekst
door de echte waarde en haal daarna `class="needs-input"` weg, zodat de gele
achtergrond verdwijnt.

> Zolang er nog gele markeringen staan, is deze branch niet klaar om naar
> `main` te gaan. Op `main` staat de live site.

## 1. Cijfers (index.html en cv.html)

Het blok "Mijn cijfers uit 3,5 jaar B2B support", vier waarden:

| Waarde | Wat |
| --- | --- |
| `±000` | Hoeveel verschillende zakelijke klanten je hebt geholpen |
| `±00` | Hoeveel klantgesprekken of tickets per week |
| `0,0` | Klanttevredenheid op 5, of vervang het label door een ander cijfer |
| `3,5` | Al ingevuld, jaren dagelijks klantcontact |

Weet je een cijfer niet exact? Een eerlijke schatting met `±` ervoor is
prima en nog altijd oneindig veel sterker dan geen cijfer. Vind je er echt
maar twee, verwijder dan de twee overige blokken in plaats van ze leeg te
laten staan.

Alternatieven als bovenstaande niet passen: aantal klanten dat je naar een
upgrade begeleidde, aantal escalaties dat je zelf oploste, gemiddelde
reactietijd, aantal leads of signalen dat je aan sales doorgaf.

## 2. Persoonlijke gegevens (index.html en cv.html)

- **E-mailadres.** Staat bij Contact en bovenaan het cv. Overweeg
  `florian@florianronsse.net` op je eigen domein in plaats van een
  gmail-adres, dat oogt professioneler op een cv.
- **Telefoonnummer.** Optioneel. Wil je het niet delen, verwijder dan het
  hele `<div>` met `contact.phoneLabel` en de regel in het cv.
- **Beschikbaar vanaf.** Datum in de hero.
- **Beschikbaarheid.** Opzegtermijn of startdatum, bij "Over mij" en in het cv.
- **Mobiliteit.** Rijbewijs B, eigen wagen, en tot welke afstand je wil
  pendelen. Voor sales is dit een harde filter.
- **Frans.** Vul je niveau in (bijvoorbeeld B1, of "passief goed, actief in
  ontwikkeling"). Heb je geen Frans, schrijf dat dan expliciet met de markt
  waar je op mikt, bijvoorbeeld "Vlaanderen en internationaal in het Engels".
  Een gat laten leest als een probleem, een keuze niet.

## 3. Foto (index.html)

Het gele vak bij "Over mij". Zet je foto als `assets/florian.jpg` en vervang
het blok door de `<img>` die er in commentaar boven staat. Gebruik dezelfde
foto als op LinkedIn, dat maakt je herkenbaar voor een recruiter die beide
bekijkt.

## 4. Roundfair (index.html en cv.html)

- **Status.** Bijvoorbeeld "In ontwikkeling", "TestFlight met 12 testers" of
  "In de App Store". Zonder status twijfelt een recruiter of de app bestaat.
- **Drie screenshots.** Zet ze als `assets/roundfair-1.png` tot
  `assets/roundfair-3.png` en vervang de gele vakken door de `<img>` die in
  commentaar boven de vakken staat.

## 5. Eén voorbeeld bij "Relaties opbouwen" (index.html)

De vijfde sterktekaart wacht op een concreet voorbeeld, bijvoorbeeld een
klant die je rechtstreeks bleef contacteren of een moeilijke klant die je
terugwon. Eén zin volstaat.

## Daarna

Controleer met `grep -rn "needs-input" index.html cv.html`. Blijft daar niets
over behalve de CSS-regel in `css/style.css`, dan is de site klaar.
