# Verbeterpunten

Er staat niets meer open dat de site tegenhoudt. Alle gegevens zijn
ingevuld, de foto staat erin en er zijn geen placeholders meer. Deze branch
kan naar `main`, waarna de site live gaat op florianronsse.net.

Wat hieronder staat, is optioneel. Het maakt de site sterker, maar niets
ervan blokkeert.

## 1. Cijfers, veruit de grootste winst

Het blok "Waar ik dagelijks mee werkte" toont nu omschrijvingen in plaats
van getallen, omdat er geen cijfers uit de supportperiode beschikbaar zijn.
Dat werkt, maar bij een commerciële selectie weegt een getal zwaarder dan
een omschrijving.

Een exportbestand is niet nodig. Een eerlijke schatting uit het hoofd is
genoeg, zolang er `±` voor staat:

- Hoeveel klanten of tickets op een gemiddelde dag? Maal ongeveer 220
  werkdagen per jaar, maal 3,5 jaar, en je hebt een totaal.
- Hoeveel verschillende bedrijven kwamen regelmatig terug?
- Hoeveel tickets zelf opgelost zonder escalatie, ruwweg?

Vervang dan in `index.html` een `<dt class="proof-value">` door het getal
en pas het label eronder aan. Doe hetzelfde in de `.figures` rij in
`cv.html`. Twee getallen naast twee omschrijvingen mag perfect.

## 2. Een aanbeveling op LinkedIn

De site heeft nog geen enkele quote van iemand anders. Vraag je
oud-teamlead bij Cyncly om een aanbeveling: die noemt meestal vanzelf je
scope, dus je krijgt er mogelijk de cijfers uit punt 1 en het stuk sociale
bewijs in één keer mee.

## 3. Bewijsregel bij "Relaties opbouwen"

Die kaart is de enige van de zes zonder bewijsregel, waardoor ze in het
raster zichtbaar korter eindigt. Eén concreet voorbeeld vult dat, zoals een
klant die jou rechtstreeks bleef contacteren.

## 4. Een Engelstalig cv

De site is tweetalig, `cv.html` is alleen Nederlands. Wie op EN staat en
doorklikt, krijgt dus een Nederlands cv.

## Ter controle

De opzegtermijn op de site staat op "binnen twee weken". Bij ongeveer drie
maanden anciënniteit is de wettelijke termijn voor wie zelf ontslag neemt
1 week (onder 3 maanden) of 2 weken (3 tot 6 maanden), dus dat dekt beide
gevallen. Staat er iets anders in de arbeidsovereenkomst, pas het dan aan
in de hero, bij "Over mij" en in het cv.
