# Workshop 4 — Eigen dataset labelen en model trainen

## Doel
Deelnemers bouwen in één workshop een complete mini-pipeline:
1. Labelregels afspreken
2. Eigen beelden labelen
3. Dataset valideren
4. YOLO trainen
5. Resultaten evalueren en verbeteren

## Benodigdheden
- Laptop per deelnemer/team
- Python + Jupyter omgeving (zoals workshop 3)
- Label Studio op lokale server (docentomgeving)
- Minimaal 80-150 foto’s per team (eigen praktijkcontext)
- Notebook: `04_Labelen_En_Trainen_Eigen_Dataset.ipynb`
- Studentopdracht: `04_OPDRACHT_STUDENTEN.md`
- Labelprotocol: `04_LABELPROTOCOL.md`
- Labellogboek: `04_LABELLING_LOGBOEK_TEMPLATE.md`
- Docenthandleiding: `04_DOCENTHANDLEIDING_ONTLASTING.md`

## Tijdsindeling (± 3 uur)

- **Blok 1 (20 min): Kick-off + kwaliteitsregels**
  - Leg use-case en classes vast
  - Spreek randgevallen af (occlusie, half zichtbaar, kleine objecten)
  - Maak 1 A4 “labelregels”

- **Blok 2 (45 min): Labelen**
  - Teams labelen hun dataset
  - Docent loopt rond en checkt consistentie
  - Richtlijn: 10-20% dubbel labelen voor kwaliteitscheck

- **Blok 3 (20 min): Export + dataset check in notebook**
  - Export in YOLO formaat vanuit Label Studio
  - Plaats in mapstructuur: `train/valid/test`
  - Voer in notebook stap 2 t/m 5 uit (structuur + label-validatie + spot-check)

- **Blok 4 (35 min): Trainen**
  - Notebook stap 6
  - Start met `yolov8n.pt`, 30-50 epochs
  - Bespreek expliciet resizing: inputbeelden worden tijdens training naar `imgsz` geresized
  - Laat teams noteren: welke keuzes hebben we gemaakt (imgsz, epochs, conf) en waarom

- **Blok 5 (25 min): Evaluatie + realtime demo**
  - Notebook stap 7 t/m 9
  - Test op ongeziene voorbeelden
  - Korte live demo met webcam/testbeeld

- **Blok 6 (15 min): Reflectie**
  - Notebook stap 10
  - Team formuleert 3 verbeteracties voor trainingsronde 2

## Didactische focus
- Niet alleen “het werkt”, maar: **waarom werkt het wel/niet?**
- Labelkwaliteit expliciet koppelen aan modelkwaliteit
- Trade-offs laten benoemen (snelheid vs nauwkeurigheid)
- Best-practices expliciet behandelen:
  - tight bounding boxes
  - consistente klassedefinities
  - randgevallen (occlusie/deels zichtbaar/kleine objecten)
  - dubbel labelen voor kwaliteitscontrole (10-20%)

## Beoordelingssuggestie (lichtgewicht rubric)

- **Datasetkwaliteit (0-3):** structuur compleet, labels consistent, weinig fouten
- **Modelresultaat (0-3):** redelijke detectie op testdata, metrics geïnterpreteerd
- **Analyse (0-3):** team kan fouten verklaren en verbeteraanpak onderbouwen
- **Samenwerking/proces (0-1):** duidelijke rolverdeling en documentatie

## Output per team
- Gelabelde dataset (v1)
- Getraind model (`best.pt`)
- Korte reflectie (max 1 pagina):
  - wat ging goed
  - wat ging mis
  - verbeterplan voor v2

## Aansluiting op workshop 3
Workshop 3 ging over trainen met bestaande data/notebookflow.
Workshop 4 voegt daaraan toe:
- zelf data maken
- zelf labels ontwerpen en bewaken
- kwaliteit van labels expliciet toetsen

Daarmee ervaren deelnemers de volledige keten van dataproductie tot modelprestatie.