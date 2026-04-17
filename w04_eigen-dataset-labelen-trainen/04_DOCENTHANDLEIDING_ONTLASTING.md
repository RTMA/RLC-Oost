# Workshop 4 — Docenthandleiding (ontlasting)

## Doel van deze handleiding
Docentbelasting verlagen door:
- strakke rolverdeling
- vaste checkmomenten
- standaard antwoorden op veelvoorkomende vragen
- snelle troubleshooting

---

## 1) Vooraf (docent, 30-45 min)

### Techniek
- Start Label Studio lokaal (`04_voorbereiding_docent/labelstudio/start.sh`)
- Test 1 project met 5 dummy-afbeeldingen
- Controleer export naar YOLO

### Inhoud
- Deel met studenten:
  1. `04_OPDRACHT_STUDENTEN.md`
  2. `04_LABELPROTOCOL.md`
  3. notebook `04_Labelen_En_Trainen_Eigen_Dataset.ipynb`

### Fallback klaarzetten
- Voorbeelddataset met labels paraat
- 1 getraind referentiemodel paraat

---

## 2) Tijdens workshop: docent hoeft niet alles te doen

## Blokindeling met docentacties

### Blok 1 (kick-off, 15-20 min)
Docent doet:
- 5 min context + doel
- 5 min protocol uitleg (waarom consistentie telt)
- 5 min teamafspraken klassen + randgevallen

Docent hoeft NIET:
- per team alle labels live te controleren

### Blok 2 (labelen, 40-50 min)
Docent doet alleen 3 checkpoints:
1. Na 10 min: klassen juist gebruikt?
2. Halverwege: tight boxes + randgevallen consistent?
3. Eind: 10–20% dubbel gelabeld?

### Blok 3/4 (export + training, 45-60 min)
Docent doet:
- 1 gezamenlijke exportdemo
- teams eigen notebook laten draaien
- alleen ingrijpen bij echte blockers

### Blok 5 (evaluatie, 20-25 min)
Docent doet:
- teams laten presenteren met vaste 4 vragen:
  1) wat werkte?  
  2) wat ging mis?  
  3) waar zat dat in: data/labels/training?  
  4) wat doen jullie in ronde 2?

---

## 3) Snelle FAQ (docentscript)

**Q: Onze foto’s hebben verschillende resoluties, is dat fout?**
A: Nee. Tijdens training worden ze geresized naar `imgsz` (bijv. 640). Let op kleine details.

**Q: Model ziet kleine objecten slecht.**
A: Eerst betere foto’s (dichterbij), daarna pas `imgsz` verhogen.

**Q: Waarom zoveel nadruk op labelprotocol?**
A: Slechte/inconsistente labels geven direct slechter modelgedrag.

**Q: Wat is belangrijker: veel data of perfecte labels?**
A: Eerst consistente labels, daarna data uitbreiden.

---

## 4) Snelle troubleshooting

1. **Export mislukt** → herlaad project, export opnieuw als YOLO
2. **Notebook vindt data niet** → pad `DATASET_ROOT` checken
3. **Training traag** → minder epochs of kleinere batch
4. **Geen detecties** → check class mapping + labels + confidence threshold

---

## 5) Eindcheck docent (10 min)
- [ ] Elk team heeft inleverbare dataset
- [ ] Elk team heeft modelrun gedaan
- [ ] Elk team heeft reflectie + verbeteracties
- [ ] Logboeken verzameld
