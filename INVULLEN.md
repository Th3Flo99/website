# Nog zelf in te vullen

Alle plekken hieronder staan op de site met een **gele markering**. Zoek in de
code op `needs-input`: elke markering is één span of blok. Vervang de tekst
door de echte waarde en haal daarna `class="needs-input"` weg, zodat de gele
achtergrond verdwijnt.

> Zolang er nog gele markeringen staan, is deze branch niet klaar om naar
> `main` te gaan. Op `main` staat de live site.

## 1. Persoonlijke gegevens (index.html en cv.html)

Mailadres en telefoonnummer staan er bewust niet op, om privacyredenen.
Recruiters bereiken je via het contactformulier (dat loopt via Formspree,
dus je adres blijft verborgen) en via LinkedIn. Rijbewijs en wagen zijn
ingevuld. Wat nog rest:

- **Beschikbaar vanaf.** Datum in de hero.
- **Beschikbaarheid.** Opzegtermijn of startdatum, bij "Over mij" en in het cv.

## 2. Foto (index.html)

Het gele vak bij "Over mij". Zet je foto als `assets/florian.jpg` en vervang
het blok door de `<img>` die er in commentaar boven staat. Gebruik dezelfde
foto als op LinkedIn, dat maakt je herkenbaar voor een recruiter die beide
bekijkt.

## 3. Eén voorbeeld bij "Relaties opbouwen" (index.html)

De vijfde sterktekaart wacht op een concreet voorbeeld, bijvoorbeeld een
klant die je rechtstreeks bleef contacteren of een moeilijke klant die je
terugwon. Eén zin volstaat.

## Optioneel, maar het sterkste dat je nog kan toevoegen: cijfers

Het blok "Waar ik dagelijks mee werkte" staat nu vol omschrijvingen in
plaats van getallen, omdat je geen cijfers uit je supportperiode hebt. Dat
werkt, maar een getal weegt zwaarder bij een commerciële selectie.

Je hoeft geen exportbestand te hebben. Een eerlijke schatting uit je hoofd
is genoeg, zolang je er `±` voor zet:

- Hoeveel klanten of tickets deed je op een gemiddelde dag? Maal ongeveer
  220 werkdagen per jaar, maal 3,5 jaar, en je hebt een totaal.
- Hoeveel verschillende bedrijven kwamen regelmatig bij jou terug?
- Hoeveel van je tickets loste je zelf op zonder escalatie, ruwweg?

Heb je zo'n schatting, vervang dan een `<dt class="proof-value">` door het
getal zelf en pas het label eronder aan. Twee getallen naast twee
omschrijvingen mag perfect.

Een tweede route: vraag je oud-teamlead bij Cyncly om een aanbeveling op
LinkedIn. Die noemt meestal vanzelf je scope, en levert meteen het stuk
sociale bewijs dat de site nu ook mist.

## Daarna

Controleer met `grep -rn "needs-input" index.html cv.html`. Blijft daar niets
over, dan is de site klaar voor `main`.
