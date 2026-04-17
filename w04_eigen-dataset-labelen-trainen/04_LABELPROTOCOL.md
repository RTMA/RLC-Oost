# Workshop 4 — Labelprotocol (met motivatie)

> Dit protocol geldt voor alle teams. Doel: consistente labels, betere modelkwaliteit.

## 1. Klassen en definities
- Gebruik exact de afgesproken klassenamen.
- Elke klasse heeft:
  - **wel voorbeelden**
  - **geen voorbeelden**

**Waarom:** model leert patronen per klasse. Onduidelijke klassen = verwarring = slechtere prestaties.

---

## 2. Bounding boxes
- Label strak om het object (tight fit).
- Geen grote lege ruimte rondom object.
- Geen “gokken” buiten beeldranden.

**Waarom:** YOLO leert de positie/omvang van objecten uit die boxen.
Te losse of inconsistente boxen verlagen nauwkeurigheid.

---

## 3. Randgevallen
### 3.1 Deels zichtbaar object (beeldrand)
- Wel labelen als object duidelijk herkenbaar is.
- Minimumrichtlijn: ongeveer ≥30% zichtbaar.

### 3.2 Overlap/occlusie
- Label elk herkenbaar object apart.
- Overlappende boxen zijn toegestaan.

### 3.3 Kleine objecten
- Wel labelen als nog betrouwbaar herkenbaar.
- Als objecten structureel te klein zijn: dichterbij fotograferen of hogere `imgsz` testen.

**Waarom:** randgevallen bepalen vaak de robuustheid in de praktijk.

---

## 4. Kwaliteitscontrole op labels
- 10–20% van de beelden dubbel labelen door twee studenten.
- Bespreek verschillen in teamcheck.
- Pas protocol aan als ambiguïteit terugkomt.

**Waarom:** consistentie tussen annotators is belangrijker dan pixel-perfectie.

---

## 5. Fotokwaliteit en variatie
- Variatie in hoek, afstand, achtergrond en belichting.
- Niet alleen “mooie” voorbeelden; neem ook lastige situaties op.

**Waarom:** model moet werken buiten ideale lab-situatie.

---

## 6. Resizing bij training (belangrijk)
- Inputbeelden mogen verschillende resoluties hebben.
- Tijdens YOLO-training worden ze geresized naar `imgsz` (bijv. 640).
- Kleine details kunnen hierdoor verloren gaan.

**Praktische regels:**
- Zorg dat relevante objecten voldoende groot in beeld staan.
- Test bij kleine objecten eventueel `imgsz=960` of `1280`.
- Houd afweging in de gaten: hoger `imgsz` = trager trainen.

---

## 7. Labellogboek (verplicht)
Per team minimaal:
1. Klassen + definities
2. Randgeval-regels
3. Dubbel-gelabelde voorbeelden en gevonden verschillen
4. Afspraken die tijdens workshop zijn aangepast
5. Verwachte impact op modelkwaliteit
