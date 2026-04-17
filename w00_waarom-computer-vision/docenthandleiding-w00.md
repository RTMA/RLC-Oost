---
titel: "Docenthandleiding W00 — Waarom computer vision?"
behorend_bij: workshop-w00-waarom-computer-vision.md
datum: 2026-03-27
duur: 60 minuten
niveau: MBO niveau 3-4
---

# Docenthandleiding — Workshop 0

## Doel van deze handleiding

Deze handleiding helpt je om Workshop 0 te begeleiden zonder de workshop letterlijk voor te lezen. De workshop is bedoeld als gesprekssessie, niet als hoorcollege. Jouw rol is die van gespreksleider, niet van docent die stof overdraagt.

---

## Voorbereiding (10 min van tevoren)

- Zet het whiteboard of flipover klaar — je schrijft tijdens de workshop een paar schema's op
- Optioneel: open de visualisatie `data-flywheel.html` of `architectuur-schema.html` als je die wil projecteren
- Zorg dat je het reCAPTCHA-verhaal goed kent, zodat je het in eigen woorden kunt vertellen (niet voorlezen)
- Geen technische voorbereiding nodig — er wordt geen code geschreven in deze workshop

---

## Toon en aanpak

Deze workshop werkt het best als je:

- Het verhaal vertelt alsof je het zelf net voor het eerst ontdekte — enthousiasme werkt besmettelijk
- Vragen openhoudt in plaats van direct het "goede antwoord" te geven
- Reacties beloont, ook als ze deels fout zijn — het gaat om nadenken, niet om kennis reproduceren
- De ethische discussie als echte discussie behandelt, niet als een les met een voorgeschreven conclusie

Studenten op MBO niveau 3-4 reageren goed op herkenbare voorbeelden. reCAPTCHA is zo'n voorbeeld: vrijwel iedereen heeft het gedaan, niemand heeft er ooit bij stilgestaan. Dat "ik deed dit zelf zonder het te weten" is de hefboom van de hele workshop.

---

## Blok 1 — Openingsvraag en verhaal (15 min)

### Wat te doen

Begin met de handopsteekvraag ("wie heeft ooit een CAPTCHA ingevuld?"). Geef daarna de opvolgende vraag ("wist je dat je gratis AI-trainingsdata gaf?") zonder uitleg — laat het even hangen.

Vertel dan het verhaal. Het staat uitgeschreven in de workshop, maar gebruik het als geheugensteun, niet als script. Kernpunten:

1. Google kocht reCAPTCHA in 2009
2. Ze vervingen tekst door foto's uit Street View
3. Gebruikers dachten ze bewezen dat ze menselijk waren — maar ze labelden data
4. Die data was de basis voor Waymo (45 miljard dollar) en Google Maps
5. Vandaag kijkt reCAPTCHA naar gedrag, niet naar beeldherkenning

### Let op

- Vertel het als een verhaal, niet als een opsomming
- Het "onbewust meedoen" is het kernmoment — zorg dat dat landt voordat je doorgaat
- De eerste discussievraag ("slim of bedrog?") hoeft niet beantwoord te worden — het is een opener

---

## Blok 2 — Uitleg data flywheel (10 min)

### Wat te doen

Schrijf het flywheel-schema op het bord terwijl je het uitlegt. Niet projecteren — schrijven terwijl je praat werkt beter voor begrip.

```
Meer gebruikers
    -> Meer gelabelde data
        -> Beter model
            -> Beter product
                -> Meer gebruikers
```

Verbind dit daarna direct met de kernboodschap: het model is niet het moeilijke deel. De data is het moeilijke deel.

### Veelgemaakte fout om te vermijden

Studenten — en ook collega-docenten — denken vaak dat AI-modellen "vanzelf leren" als je ze lang genoeg draait. Dat beeld klopt niet. Een model leert alleen van de data die het krijgt. Zonder gelabelde data leert het niets. Dit is het moment om dat recht te zetten, zonder een college te houden.

### Suggestie

Vraag wie denkt dat een model zonder data toch wel iets kan leren. Ga kort in op waarom dat niet werkt voor supervised learning (wat ze gaan gebruiken). Gebruik het reCAPTCHA-voorbeeld: stel je voor dat Google de beelden toonde maar de antwoorden van gebruikers weggooide. Dan leerde het model niets.

---

## Blok 3 — Groepsopdracht (10 min)

### Wat te doen

Verdeel in tweetallen of drietallen. Geef opdracht mondeling en schrijf hem eventueel op het bord. Laat 5 minuten werken, daarna 2-3 presentaties van 1 minuut.

Stuur daarna bij naar het universele architectuurpatroon:

```
CAMERA / SENSOR -> RAW BEELD -> MODEL -> BESLISSING
```

met daaronder:

```
TRAININGSDATA (gelabeld) -> MODEL WORDT BETER
```

### Doel van de opdracht

Studenten moeten zelf ontdekken dat er een structuur achter zit — jij bevestigt die structuur daarna. Dat werkt beter dan de structuur eerst uitleggen.

---

## Blok 4 — Van Google naar de fabriek (10 min)

### Wat te doen

Leg de parallellen uit met de vergelijkingstabel uit de workshop. Als je de tabel projecteert, werkt dat goed. Anders kun je het schema mondeling behandelen aan de hand van twee kolommen op het bord.

Gebruik een concreet voorbeeld dat aansluit bij de praktijk van de deelnemers. In de workshop staat het voorbeeld van metalen beugels — pas dit aan als je weet welke bedrijven of sectoren de deelnemers kennen.

### Kernboodschap

Herhaal kort maar expliciet: het patroon is hetzelfde. De technologie is grotendeels dezelfde (YOLO-achtige modellen). Het verschil is schaal en context.

---

## Blok 5 — Ethische discussie (10 min)

### Aanpak

Dit blok vraagt de meeste begeleiding. Kies 1 of 2 discussievragen uit de workshop. Leid de discussie zonder een gewenste uitkomst op te leggen.

Typische reacties die je kunt verwachten:

- "Ze hadden het gewoon moeten zeggen" — goed aanknopingspunt voor toestemming en transparantie
- "Als je hun product gratis gebruikt, is het toch logisch?" — goed aanknopingspunt voor het idee van wederzijdse waardecreatie
- "Dat is gewoon handig bedacht" — goed aanknopingspunt voor de vraag wanneer slim zakendoen overgaat in exploitatie

### Wat je wil bereiken

Geen consensus afdwingen. Wel: studenten laten nadenken over het feit dat data een waarde heeft, dat die waarde ergens terechtkomt, en dat de vraag "wie profiteert?" relevant is — ook in hun eigen toekomstige projecten.

### Afsluiting van het ethiekblok

Sluit af met de zin die in de workshop staat: in hun eigen projecten doen ze het met bewust toestemming, in een duidelijke context. Maar de vragen blijven relevant.

---

## Blok 6 — Afsluiting (5 min)

### Wat te doen

Korte samenvatting van de vijf kernpunten (zie workshop). Daarna de brug naar de volgende workshops — geef een kort vooruitblik op wat er in w01 t/m w04 gaat gebeuren.

Eindig met de centrale vraag die ze mee moeten nemen:

> "Is mijn data goed genoeg?"

---

## Veelgestelde vragen van studenten

**"Wat is YOLO precies?"**
Kort antwoord: een algoritme dat in één keer door een beeld kijkt en objecten herkent en localiseert. Ze gaan er in workshop 2 mee werken — nu is het genoeg om te weten dat het bestaat.

**"Kan een model ook leren zonder labels?"**
Ja, maar dat valt buiten de scope van deze reeks. De modellen die ze gaan gebruiken zijn supervised — ze leren van voorbeelden die al gelabeld zijn. Ongesupervised of self-supervised learning is een apart veld.

**"Hoe weet een model of het goed is?"**
Door het te testen op beelden die het nog nooit heeft gezien. Dat heet validatie. Dat doen ze in workshop 3 en 4.

**"Wordt Google hier ooit voor aangeklaagd?"**
Er zijn juridische discussies geweest, maar reCAPTCHA viel binnen de gebruiksvoorwaarden die mensen accepteerden. Of die voorwaarden eerlijk zijn, is een andere vraag — een goede voor de ethische discussie.

---

## Alternatieve tijdsverdeling

Als je maar 45 minuten hebt:

- Laat blok 3 (groepsopdracht) weg of maak er een plenaire vraag van
- Verkort de ethische discussie naar 5 minuten, kies 1 vraag
- Houd blok 1, 2, 4 en 6 intact — dit zijn de inhoudelijke kern

Als je meer tijd hebt (90 minuten):

- Verleng de groepsopdracht: laat teams ook de industriele variant tekenen naast de Google-variant
- Verdiep de ethische discussie met een tweede scenario (bijvoorbeeld gezichtsherkenning in openbare ruimte)
- Laat studenten aan het einde individueel opschrijven: "wat is mijn eerste stap als ik morgen een kwaliteitssysteem zou bouwen?"

---

*Onderdeel van de AI Vision Learning Community — reeks computer vision als kwaliteitscontrole.*
