# Pilot Zelfstudie+ — Workshop 2 (YOLO Object Detection)

Doel: van klassikale notebook naar begeleide zelfstudie met video + AI-hints.

Bronnotebook: `02_YOLO_Object_Detection.ipynb`

## 1) Opzet (wat studenten krijgen)

1. **Slidevideo** (12-15 min totaal, in korte hoofdstukken)
2. **Notebook** met checkpoints en hintblokken
3. **Zelftest** (5 vragen + mini-opdracht)
4. **AI-coach prompt** voor hulp zonder direct antwoorden weg te geven

---

## 2) Slide-structuur (deck)

1. Intro + leerdoelen
2. Wat is YOLO in 30 seconden
3. Setup-check (Python, OpenCV, ultralytics)
4. Libraries importeren
5. Model laden (`yolov8n.pt`)
6. Welke objecten kent YOLO? (80 klassen)
7. Test op 1 foto: capture
8. Test op 1 foto: detectie en confidence
9. Visualisatie van detecties
10. Realtime detectie-loop
11. Debugging: 5 veelgemaakte fouten
12. Afronding + challenge

---

## 3) Volledig videoscript (voice-over per slide)

> Spreektempo: rustig, didactisch, ±130 woorden/min.
> Toon: coachend, praktijkgericht, weinig jargon.

### Slide 1 — Intro + leerdoelen
**Voice-over**
Welkom bij workshop 2: YOLO object detectie. In deze sessie ga je een bestaand AI-model gebruiken om objecten te herkennen op een foto en in realtime video. Aan het einde kun je uitleggen wat YOLO doet, een model laden, detecties interpreteren en eenvoudige fouten zelfstandig oplossen. Werk stap voor stap. Het doel is niet snelheid, maar begrijpen wat er gebeurt.

### Slide 2 — Wat is YOLO?
**Voice-over**
YOLO betekent You Only Look Once. Het model bekijkt één beeld en voorspelt direct waar objecten staan en wat ze zijn. Je krijgt dus twee dingen terug: een klasse, bijvoorbeeld persoon of fles, en een confidence-score. Die score is de zekerheid van het model. In deze workshop gebruiken we YOLOv8 nano, een snelle variant die goed werkt op een gewone laptop.

### Slide 3 — Setup-check
**Voice-over**
Voer altijd eerst de setup-check uit. Controleer je Python-versie, beschikbare libraries en camera-toegang. Als hier iets fout gaat, dan hoeft de rest nog niet geprobeerd te worden. Zie je een foutmelding, los die eerst op. Dit is professioneel werken: eerst je omgeving stabiel, daarna pas modelcode.

### Slide 4 — Libraries importeren
**Voice-over**
Nu importeren we de libraries: OpenCV voor camera en beeldverwerking, NumPy voor arrays, ultralytics voor het YOLO-model, en matplotlib voor visualisatie. Als deze cel zonder fouten draait, is je basis klaar. Krijg je een import error, noteer exact welke package ontbreekt en installeer alleen die package.

### Slide 5 — Model laden
**Voice-over**
In deze stap laden we `yolov8n.pt`. De eerste keer wordt het model meestal gedownload; daarna uit cache geladen. Let op dat model laden geen detectie is. Je zet alleen het model klaar in geheugen. Controleer of het modelobject bestaat en of de namenlijst met klassen beschikbaar is.

### Slide 6 — 80 objectklassen
**Voice-over**
YOLO kent hier 80 standaard objecten uit de COCO-dataset. Bekijk de lijst en let op de beperkingen: als een object niet in de lijst staat, kan het model het niet correct labelen. Dit is een belangrijk inzicht voor de praktijk: modelprestatie hangt af van trainingsdata en labelset.

### Slide 7 — Eén foto maken
**Voice-over**
We starten met een enkele foto in plaats van direct realtime video. Dat maakt debugging veel makkelijker. Kies de juiste camera-index, maak een frame en controleer of `frame` gevuld is. Zwart beeld of `None` betekent: camera nog niet goed geopend of bezet door een andere app.

### Slide 8 — Detectie uitvoeren
**Voice-over**
Nu voeren we detectie uit met bijvoorbeeld `conf=0.5`. Dat betekent: alleen voorspellingen boven vijftig procent zekerheid tonen. Verlaag je de drempel, dan krijg je meer detecties maar ook meer ruis. Verhoog je de drempel, dan mis je soms objecten. Dit is de klassieke trade-off tussen gevoeligheid en precisie.

### Slide 9 — Resultaat visualiseren
**Voice-over**
Met `results[0].plot()` teken je bounding boxes en labels op het beeld. Kijk niet alleen of er vakjes staan, maar ook of labels logisch zijn en confidence past bij wat je ziet. Als iets fout gelabeld wordt, is dat geen bug in jouw code; vaak is het een beperking van model of beeldkwaliteit.

### Slide 10 — Realtime detectie
**Voice-over**
Daarna ga je naar realtime. Elk cameraframe wordt geanalyseerd en teruggeplaatst in een venster met annotaties. Let op performance: YOLO nano is snel, maar licht, resolutie en hardware beïnvloeden de framerate. Stoppen doe je met de q-toets in het videovenster.

### Slide 11 — Debugging top 5
**Voice-over**
Vijf veelvoorkomende problemen: één, camera opent niet. Twee, import errors door ontbrekende package. Drie, model download blokkeert door internet of rechten. Vier, geen detecties door te hoge confidence. Vijf, trage realtime door hoge resolutie. Los systematisch op: één variabele tegelijk aanpassen en opnieuw testen.

### Slide 12 — Afronding + challenge
**Voice-over**
Je hebt nu een complete basisworkflow gedaan: setup, model laden, foto-detectie en realtime inferentie. Challenge: test drie verschillende objecten, noteer per object de confidence en bedenk waarom die score hoger of lager uitvalt. Zo leer je niet alleen code runnen, maar ook AI-resultaten kritisch beoordelen.

---

## 4) AI-begeleiding (prompt voor in notebook/LMS)

Gebruik deze standaardprompt voor studenten:

```text
Je bent mijn AI-practicumcoach voor YOLO.
Regels:
- Geef eerst een hint, geen volledig antwoord.
- Werk in 3 niveaus: Hint 1 (richting), Hint 2 (concrete stap), Hint 3 (bijna-oplossing).
- Vraag mij na elke hint wat ik zie in output/foutmelding.
- Corrigeer mij op denkfouten, maar blijf kort.
- Als ik "geef oplossing" zeg, geef dan pas volledige oplossing met uitleg.
Context:
- Ik werk in 02_YOLO_Object_Detection.ipynb
- Doel: begrijpen, niet copy-pasten.
```

---

## 5) Productie-aanpak (praktisch, herhaalbaar)

1. Exporteer deze slide-opzet naar PPTX (12 slides)
2. Neem schermflow op terwijl je door notebook-cellen loopt
3. Gebruik dezelfde voice-over tekst (of TTS) per slide
4. Publiceer per hoofdstuk als losse clip (2-4 min)
5. Voeg onder elke video toe:
   - startcel/eindcel
   - checkpoint
   - "vastloper?" AI-coach prompt

Resultaat: studenten kunnen zelfstandig doorwerken met begeleide hulp in plaats van frontale instructie.
