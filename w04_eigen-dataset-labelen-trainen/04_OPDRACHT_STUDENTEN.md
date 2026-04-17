# Workshop 4 — Zelf data verzamelen, labelen en model trainen

## Waarom doen we dit?
In workshop 3 trainden jullie met bestaande data. In workshop 4 bouwen jullie de hele keten zelf:
**foto’s maken → labelen → trainen → evalueren**.

Doel: snappen waarom een model goed of slecht presteert, en hoe labelkwaliteit daar invloed op heeft.

---

## Opdracht
Bouw een werkende kwaliteitscontrole-case met 2 klassen (bijv. `product_ok` en `product_defect`).

### Eindresultaat
1. Eigen dataset in YOLO-structuur (`train/valid/test`)  
2. Getraind model (`best.pt`)  
3. Testresultaten + korte reflectie  
4. Ingeleverd labellogboek

---

## Deel A — Foto’s verzamelen (inputkwaliteit)
Gebruik deze richtlijnen:

### Wat heb je nodig?
- ±25–50 foto’s per klasse (totaal ±50–100)
- 2 duidelijk verschillende categorieën
- Telefooncamera is prima
- Gevarieerde achtergronden en hoeken
- Voldoende licht (niet te donker)

### Denk aan variatie
- Hoeken: boven / zij / schuin
- Afstanden: dichtbij / verder weg
- Achtergronden: werkbank, vloer, transportband
- Belichting: daglicht, kunstlicht, lichte schaduw
- 1 object per foto én enkele foto’s met meerdere objecten

### Praktijkvoorbeelden
- Productie/assemblage: goed gemonteerd vs fout gemonteerd
- Logistiek: beschadigd vs onbeschadigd
- Technisch onderhoud: schoon vs vervuild
- Elektrotechniek: correcte vs foute bedrading

---

## Deel B — Labelen in Label Studio (lokale server)
Jullie labelen op de lokale Label Studio omgeving van de docent.

### Basisregels
- Label **strak om het object** (geen grote marge)
- Gebruik alleen afgesproken klassen
- Label ook overlap/occlusie als object herkenbaar is
- Houd labeling **consistent** binnen team

### Teamkwaliteit
- Label 10–20% van de beelden dubbel (2 studenten)
- Bespreek verschillen en pas regels aan

---

## Deel C — Dataset export en controle
Exporteer in YOLO-formaat en zet in:

```text
dataset/
  train/images  train/labels
  valid/images  valid/labels
  test/images   test/labels
  data.yaml
```

Voer daarna de workshop-notebook uit:
`04_Labelen_En_Trainen_Eigen_Dataset.ipynb`

---

## Deel D — Training en evaluatie
Train met YOLO (zoals workshop 3) en evalueer op testset.

Let op bij beeldformaten:
- Jullie inputfoto’s mogen verschillende resoluties hebben
- Tijdens training worden beelden automatisch naar `imgsz` (bijv. 640) geresized
- Te kleine details kunnen dan verdwijnen → zorg dus voor voldoende objectgrootte in je foto’s

---

## Inleveren
1. Datasetmap (YOLO-structuur)
2. Modelresultaat (`best.pt` + metrics/screenshot)
3. Labellogboek (zie format)
4. Reflectie (max 1 pagina):
   - Wat werkte goed?
   - Wat liep mis?
   - Welke 3 verbeteringen doen jullie in ronde 2?

---

## Beoordeling (kort)
- **Datasetkwaliteit**: compleet, consistent, bruikbare variatie
- **Modelkwaliteit**: redelijke detectie op testdata
- **Analyse**: fouten kunnen verklaren en verbeterplan maken
- **Proces**: samenwerking en nette documentatie
