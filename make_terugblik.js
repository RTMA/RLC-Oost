const pptxgen = require("pptxgenjs");

const C = {
  deepBlue: "065A82",
  teal: "1C7293",
  midnight: "21295C",
  white: "FFFFFF",
  lightBg: "F0F6FA",
  accentGray: "E8EEF2",
  textDark: "1A2638",
  textMid: "3A5068",
};

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "AI Vision Learning Community: Terugblik op 3 bijeenkomsten";
pres.author = "Klaas";

// ── helpers ──────────────────────────────────────────────────────────────────

function darkSlide(pres, titleText, subtitleText) {
  const slide = pres.addSlide();
  slide.background = { color: C.midnight };
  // diagonal accent top
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 1.1, fill: { color: C.deepBlue }, line: { color: C.deepBlue }
  });
  // bottom strip
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.9, w: 10, h: 0.725, fill: { color: C.teal }, line: { color: C.teal }
  });
  // title
  slide.addText(titleText, {
    x: 0.6, y: 1.4, w: 8.8, h: 2.2,
    fontSize: 36, fontFace: "Trebuchet MS", bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0
  });
  if (subtitleText) {
    slide.addText(subtitleText, {
      x: 0.6, y: 3.5, w: 8.8, h: 0.9,
      fontSize: 18, fontFace: "Calibri", color: "A8D4EC",
      align: "center", valign: "middle", margin: 0
    });
  }
  return slide;
}

function lightSlide(pres, titleText) {
  const slide = pres.addSlide();
  slide.background = { color: C.lightBg };
  // header bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.9, fill: { color: C.deepBlue }, line: { color: C.deepBlue }
  });
  // left accent stripe
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0.9, w: 0.12, h: 4.725, fill: { color: C.teal }, line: { color: C.teal }
  });
  slide.addText(titleText, {
    x: 0.25, y: 0.05, w: 9.5, h: 0.8,
    fontSize: 22, fontFace: "Trebuchet MS", bold: true, color: C.white,
    valign: "middle", margin: 0
  });
  return slide;
}

function addIcon(slide, emoji, x, y, size = 0.55, bg = C.teal) {
  slide.addShape(slide.parent ? slide.parent.shapes.OVAL : pres.shapes.OVAL, {
    x, y, w: size, h: size, fill: { color: bg }, line: { color: bg }
  });
  slide.addText(emoji, {
    x, y: y - 0.02, w: size, h: size,
    fontSize: size * 18, align: "center", valign: "middle", margin: 0
  });
}

function bulletList(slide, items, x, y, w, h, opts = {}) {
  const runs = items.map((item, i) => ({
    text: item,
    options: { bullet: true, breakLine: i < items.length - 1, fontSize: opts.fontSize || 16, fontFace: "Calibri", color: opts.color || C.textDark, paraSpaceAfter: 6 }
  }));
  slide.addText(runs, { x, y, w, h, valign: "top", margin: 0 });
}

// ── SLIDE 1: Titel ────────────────────────────────────────────────────────────
{
  const slide = pres.addSlide();
  slide.background = { color: C.midnight };
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 1.4, fill: { color: C.deepBlue }, line: { color: C.deepBlue }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.5, w: 10, h: 1.125, fill: { color: C.teal }, line: { color: C.teal }
  });
  slide.addText("AI Vision Learning Community", {
    x: 0.5, y: 1.35, w: 9, h: 0.9,
    fontSize: 30, fontFace: "Trebuchet MS", bold: true, color: "A8D4EC",
    align: "center", margin: 0
  });
  slide.addText("Terugblik op 3 bijeenkomsten", {
    x: 0.5, y: 2.15, w: 9, h: 1.1,
    fontSize: 40, fontFace: "Trebuchet MS", bold: true, color: C.white,
    align: "center", margin: 0
  });
  slide.addText("Computer Vision als Kwaliteitscontrole", {
    x: 0.5, y: 3.2, w: 9, h: 0.7,
    fontSize: 20, fontFace: "Calibri", color: "CCE8F5",
    align: "center", margin: 0
  });
  slide.addText("Learning Community AI Vision  •  2024–2025", {
    x: 0.5, y: 4.55, w: 9, h: 0.65,
    fontSize: 14, fontFace: "Calibri", color: C.white,
    align: "center", valign: "middle", margin: 0
  });
}

// ── SLIDE 2: Ambitie ──────────────────────────────────────────────────────────
{
  const slide = lightSlide(pres, "Wat was de ambitie?");
  slide.addText("Computer Vision als Kwaliteitscontrole voor MKB", {
    x: 0.3, y: 1.0, w: 9.4, h: 0.65,
    fontSize: 20, fontFace: "Trebuchet MS", bold: true, color: C.deepBlue,
    margin: 0
  });

  const boxes = [
    { x: 0.3, emoji: "🏭", title: "MKB-praktijk", body: "Computer vision toegankelijk maken voor kleine en middelgrote bedrijven in de Achterhoek." },
    { x: 3.6, emoji: "🎓", title: "Onderwijs × Bedrijf", body: "MBO, HBO en innovatiecentrum werken samen met bedrijfsvertegenwoordigers aan échte toepassingen." },
    { x: 6.9, emoji: "🔬", title: "Hands-on leren", body: "Niet alleen theorie — deelnemers draaien modellen op eigen laptop, eigen producten, eigen camera." },
  ];

  boxes.forEach(b => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: b.x, y: 1.75, w: 3.0, h: 2.9,
      fill: { color: C.white }, line: { color: C.accentGray, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.1 }
    });
    slide.addText(b.emoji, {
      x: b.x + 0.1, y: 1.85, w: 2.8, h: 0.7,
      fontSize: 28, align: "center", margin: 0
    });
    slide.addText(b.title, {
      x: b.x + 0.1, y: 2.5, w: 2.8, h: 0.45,
      fontSize: 14, fontFace: "Trebuchet MS", bold: true, color: C.deepBlue,
      align: "center", margin: 0
    });
    slide.addText(b.body, {
      x: b.x + 0.15, y: 2.92, w: 2.7, h: 1.6,
      fontSize: 13, fontFace: "Calibri", color: C.textMid,
      align: "center", valign: "top", margin: 0
    });
  });
}

// ── SLIDE 3: Opzet ────────────────────────────────────────────────────────────
{
  const slide = lightSlide(pres, "Opzet: twee niveaus + notebooks als ruggengraat");
  
  // Two columns
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 1.05, w: 4.5, h: 3.5,
    fill: { color: C.white }, line: { color: C.accentGray, width: 1 }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.05, w: 4.5, h: 3.5,
    fill: { color: C.white }, line: { color: C.accentGray, width: 1 }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 1.05, w: 4.5, h: 0.55, fill: { color: C.teal }, line: { color: C.teal }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.1, y: 1.05, w: 4.5, h: 0.55, fill: { color: C.deepBlue }, line: { color: C.deepBlue }
  });

  slide.addText("🟢  Beginner", {
    x: 0.3, y: 1.05, w: 4.5, h: 0.55,
    fontSize: 15, fontFace: "Trebuchet MS", bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("🔵  Gevorderd", {
    x: 5.1, y: 1.05, w: 4.5, h: 0.55,
    fontSize: 15, fontFace: "Trebuchet MS", bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0
  });

  bulletList(slide, [
    "Instapniveau — geen CV-ervaring vereist",
    "Stap-voor-stap via notebook",
    "Kant-en-klaar model uitproberen",
    "Eigen dataset inbrengen",
    "Werkt met webcam of USB-camera",
  ], 0.5, 1.65, 4.1, 2.8, { fontSize: 14 });

  bulletList(slide, [
    "Bouwt voort op eigen ervaring",
    "Diepere technieken: anomaly detection, SAM2",
    "Demo-opstellingen bouwen",
    "Productiecontext: echte machineonderdelen",
    "Kritisch kijken naar modelkeuze",
  ], 5.3, 1.65, 4.1, 2.8, { fontSize: 14 });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.6, w: 10, h: 0.45,
    fill: { color: C.accentGray }, line: { color: C.accentGray }
  });
  slide.addText("📓  Elke bijeenkomst had een Jupyter notebook als ruggengraat — stap-voor-stap, direct uitvoerbaar op eigen laptop", {
    x: 0.2, y: 4.6, w: 9.6, h: 0.45,
    fontSize: 13, fontFace: "Calibri", italic: true, color: C.textMid,
    valign: "middle", margin: 0
  });
}

// ── SLIDE 4: Bijeenkomst 1 — Setup & eerste detectie ─────────────────────────
{
  const slide = lightSlide(pres, "Bijeenkomst 1  —  Setup & Eerste Detectie");
  
  slide.addText("Beginner-niveau", {
    x: 0.3, y: 1.0, w: 3.5, h: 0.4,
    fontSize: 14, fontFace: "Trebuchet MS", bold: true, color: C.teal, margin: 0
  });
  slide.addText("Notebook: 01_Setup_en_Camera_Test.ipynb", {
    x: 0.3, y: 1.35, w: 6.5, h: 0.35,
    fontSize: 12, fontFace: "Calibri", italic: true, color: C.textMid, margin: 0
  });

  bulletList(slide, [
    "Python-omgeving installeren en configureren",
    "YOLO-packages installeren (ultralytics, opencv)",
    "Camera-drivers instellen: webcam & USB-camera",
    "Camera testen: live videostream in notebook",
    "Standaard YOLOv8-model draaien op eigen camera",
  ], 0.3, 1.75, 5.5, 3.0, { fontSize: 15 });

  // Right info box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.1, y: 1.0, w: 3.6, h: 3.7,
    fill: { color: C.deepBlue }, line: { color: C.deepBlue }
  });
  slide.addText("Wat bereikten deelnemers?", {
    x: 6.2, y: 1.05, w: 3.4, h: 0.5,
    fontSize: 14, fontFace: "Trebuchet MS", bold: true, color: C.white,
    align: "center", margin: 0
  });
  const results1 = [
    "✅ Werkende Python-omgeving",
    "✅ Live camerastream op eigen laptop",
    "✅ YOLO detecteert personen, objecten live",
    "✅ Eerste inzicht in bounding boxes & scores",
  ];
  results1.forEach((r, i) => {
    slide.addText(r, {
      x: 6.2, y: 1.6 + i * 0.55, w: 3.4, h: 0.5,
      fontSize: 13, fontFace: "Calibri", color: C.white, margin: 0
    });
  });
}

// ── SLIDE 5: Bijeenkomst 1 — Gevorderd: koffiemachine ────────────────────────
{
  const slide = lightSlide(pres, "Bijeenkomst 1  —  Gevorderd: De Koffiemachine-Demo");

  slide.addText("Gevorderd-niveau", {
    x: 0.3, y: 1.0, w: 3.5, h: 0.4,
    fontSize: 14, fontFace: "Trebuchet MS", bold: true, color: C.deepBlue, margin: 0
  });

  bulletList(slide, [
    "Demo-opstelling bouwen met echte productiecontext",
    "Etna koffiemachine als herkenningsobject",
    "Productdetectie: welk model staat in beeld?",
    "Camera correct positioneren voor consistente beelden",
    "Real-time inferentie op videostream",
    "Discussie: wat heb je nodig voor productieomgeving?",
  ], 0.3, 1.5, 5.4, 3.2, { fontSize: 15 });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.0, y: 1.0, w: 3.7, h: 3.7,
    fill: { color: C.teal }, line: { color: C.teal }
  });
  slide.addText("☕", {
    x: 6.0, y: 1.1, w: 3.7, h: 1.2,
    fontSize: 60, align: "center", margin: 0
  });
  slide.addText("Etna Koffiemachine", {
    x: 6.1, y: 2.2, w: 3.5, h: 0.5,
    fontSize: 15, fontFace: "Trebuchet MS", bold: true, color: C.white,
    align: "center", margin: 0
  });
  slide.addText("Als herkenningsobject voor productdetectie — direct herkenbaar voor bedrijfsdeelnemers en toepasbaar op eigen producten.", {
    x: 6.1, y: 2.7, w: 3.5, h: 1.8,
    fontSize: 13, fontFace: "Calibri", color: C.white,
    align: "center", valign: "top", margin: 0
  });
}

// ── SLIDE 6: Bijeenkomst 2 — Eigen model Roboflow ────────────────────────────
{
  const slide = lightSlide(pres, "Bijeenkomst 2  —  Eigen Model Trainen met Roboflow");

  slide.addText("Beginner-niveau", {
    x: 0.3, y: 1.0, w: 3.5, h: 0.4,
    fontSize: 14, fontFace: "Trebuchet MS", bold: true, color: C.teal, margin: 0
  });
  slide.addText("Notebook: 02_YOLO_Object_Detection.ipynb", {
    x: 0.3, y: 1.35, w: 6.5, h: 0.35,
    fontSize: 12, fontFace: "Calibri", italic: true, color: C.textMid, margin: 0
  });

  bulletList(slide, [
    "Roboflow: cloud-platform voor dataset-beheer en labelen",
    "Gelabeld dataset-project downloaden via API",
    "YOLOv8 finetunen op eigen klassen",
    "Training volgen in notebook (loss, mAP, precision)",
    "Model evalueren op validatieset",
    "Inferentie met eigen getraind model op camerabeelden",
  ], 0.3, 1.75, 5.5, 3.0, { fontSize: 14 });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.1, y: 1.0, w: 3.6, h: 3.7,
    fill: { color: C.midnight }, line: { color: C.midnight }
  });
  slide.addText("Roboflow", {
    x: 6.2, y: 1.1, w: 3.4, h: 0.55,
    fontSize: 18, fontFace: "Trebuchet MS", bold: true, color: C.white,
    align: "center", margin: 0
  });
  slide.addText("🌐", {
    x: 6.2, y: 1.6, w: 3.4, h: 0.8,
    fontSize: 40, align: "center", margin: 0
  });
  const rfFeatures = ["Dataset uploaden & labelen", "Augmentatie instellingen", "YOLO-export klaar voor training", "Gratis voor kleine projecten"];
  rfFeatures.forEach((f, i) => {
    slide.addText("→  " + f, {
      x: 6.2, y: 2.45 + i * 0.52, w: 3.4, h: 0.48,
      fontSize: 13, fontFace: "Calibri", color: "A8D4EC", margin: 0
    });
  });
}

// ── SLIDE 7: Bijeenkomst 2 — Gevorderd: anomaly detection ────────────────────
{
  const slide = lightSlide(pres, "Bijeenkomst 2  —  Gevorderd: Anomaly Detection");

  slide.addText("Gevorderd-niveau", {
    x: 0.3, y: 1.0, w: 3.5, h: 0.4,
    fontSize: 14, fontFace: "Trebuchet MS", bold: true, color: C.deepBlue, margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 1.45, w: 5.5, h: 0.6,
    fill: { color: C.deepBlue }, line: { color: C.deepBlue }
  });
  slide.addText("Wat is anomaly detection?", {
    x: 0.3, y: 1.45, w: 5.5, h: 0.6,
    fontSize: 14, fontFace: "Trebuchet MS", bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("Afwijkende producten herkennen zónder gelabelde foutdata. Het model leert alleen van 'goede' producten en markeert alles wat afwijkt.", {
    x: 0.3, y: 2.05, w: 5.5, h: 0.9,
    fontSize: 14, fontFace: "Calibri", color: C.textDark,
    valign: "top", margin: 0
  });

  bulletList(slide, [
    "Geen foutdata nodig — alleen goede producten als trainingsset",
    "Toepasbaar als foutdata schaars of kostbaar is",
    "Vergelijking met klassieke supervised detectie",
    "Grenswaarden en drempelwaarden instellen",
    "Praktijkcasus: kwaliteitscontrole op productielijn",
  ], 0.3, 2.95, 5.5, 2.0, { fontSize: 14 });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.1, y: 1.0, w: 3.6, h: 3.7,
    fill: { color: C.teal }, line: { color: C.teal }
  });
  slide.addText("⚠️\nAnomaly\nDetection", {
    x: 6.1, y: 1.2, w: 3.6, h: 1.5,
    fontSize: 20, fontFace: "Trebuchet MS", bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0
  });
  slide.addText("Voordeel voor MKB:\nFouten herkennen zonder eerst duizenden foutbeelden te verzamelen.\nDirect inzetbaar na korte trainingsrun.", {
    x: 6.2, y: 2.7, w: 3.4, h: 1.9,
    fontSize: 13, fontFace: "Calibri", color: C.white,
    align: "center", valign: "top", margin: 0
  });
}

// ── SLIDE 8: Bijeenkomst 3 — Eigen dataset labelen ───────────────────────────
{
  const slide = lightSlide(pres, "Bijeenkomst 3  —  Eigen Dataset: Labelen en Trainen");

  slide.addText("Beginner-niveau", {
    x: 0.3, y: 1.0, w: 3.5, h: 0.4,
    fontSize: 14, fontFace: "Trebuchet MS", bold: true, color: C.teal, margin: 0
  });
  slide.addText("Notebooks: 03_Train_Je_Eigen_Model_Interactief.ipynb  +  04_Labelen_En_Trainen_Eigen_Dataset.ipynb", {
    x: 0.3, y: 1.35, w: 9.3, h: 0.35,
    fontSize: 11, fontFace: "Calibri", italic: true, color: C.textMid, margin: 0
  });

  // Steps flow
  const steps = [
    { emoji: "📷", label: "50–150 foto's van eigen product meenemen" },
    { emoji: "🏷️", label: "Labelen in Label Studio (lokaal of cloud)" },
    { emoji: "⚙️", label: "Dataset exporteren in YOLO-formaat" },
    { emoji: "🧠", label: "Model trainen op eigen klassen" },
    { emoji: "✅", label: "Valideren: mAP, precision, recall beoordelen" },
  ];

  steps.forEach((s, i) => {
    const x = 0.3;
    const y = 1.8 + i * 0.6;
    slide.addShape(pres.shapes.OVAL, {
      x, y: y + 0.05, w: 0.5, h: 0.5,
      fill: { color: C.teal }, line: { color: C.teal }
    });
    slide.addText(s.emoji, {
      x, y: y + 0.05, w: 0.5, h: 0.5,
      fontSize: 14, align: "center", valign: "middle", margin: 0
    });
    slide.addText(s.label, {
      x: 0.9, y, w: 5.0, h: 0.6,
      fontSize: 14, fontFace: "Calibri", color: C.textDark,
      valign: "middle", margin: 0
    });
    if (i < steps.length - 1) {
      slide.addShape(pres.shapes.LINE, {
        x: 0.55, y: y + 0.55, w: 0, h: 0.1,
        line: { color: C.teal, width: 2 }
      });
    }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.2, y: 1.0, w: 3.5, h: 3.7,
    fill: { color: C.midnight }, line: { color: C.midnight }
  });
  slide.addText("Label Studio", {
    x: 6.3, y: 1.1, w: 3.3, h: 0.5,
    fontSize: 16, fontFace: "Trebuchet MS", bold: true, color: C.white,
    align: "center", margin: 0
  });
  slide.addText("🏷️", {
    x: 6.3, y: 1.55, w: 3.3, h: 0.9,
    fontSize: 44, align: "center", margin: 0
  });
  slide.addText("Open-source labeltool\nBounding boxes tekenen\nExport naar YOLO-formaat\nWerkt volledig lokaal", {
    x: 6.3, y: 2.45, w: 3.3, h: 2.1,
    fontSize: 13, fontFace: "Calibri", color: "A8D4EC",
    align: "center", valign: "top", margin: 0
  });
}

// ── SLIDE 9: Bijeenkomst 3 — Gevorderd: SAM2 ────────────────────────────────
{
  const slide = lightSlide(pres, "Bijeenkomst 3  —  Gevorderd: SAM2 Segment Anything");

  slide.addText("Gevorderd-niveau", {
    x: 0.3, y: 1.0, w: 3.5, h: 0.4,
    fontSize: 14, fontFace: "Trebuchet MS", bold: true, color: C.deepBlue, margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 1.45, w: 5.5, h: 0.6,
    fill: { color: C.midnight }, line: { color: C.midnight }
  });
  slide.addText("SAM2 — Segment Anything Model 2  (Meta AI)", {
    x: 0.3, y: 1.45, w: 5.5, h: 0.6,
    fontSize: 14, fontFace: "Trebuchet MS", bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0
  });

  slide.addText("Automatische segmentatie als alternatief voor handmatig labelen.", {
    x: 0.3, y: 2.1, w: 5.5, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: C.textDark, margin: 0
  });

  bulletList(slide, [
    "Klik op object → SAM2 segmenteert automatisch",
    "Geen pixel-voor-pixel handmatig werk meer",
    "Versnelt het labelproces enorm",
    "Vergelijking: manueel labelen vs. SAM2-assisted",
    "Aandacht voor grenzen: wanneer werkt het niet?",
  ], 0.3, 2.6, 5.5, 2.1, { fontSize: 14 });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 6.1, y: 1.0, w: 3.6, h: 3.7,
    fill: { color: C.deepBlue }, line: { color: C.deepBlue }
  });
  slide.addText("🔍", {
    x: 6.1, y: 1.1, w: 3.6, h: 1.0,
    fontSize: 50, align: "center", margin: 0
  });
  slide.addText("Waarom SAM2?", {
    x: 6.2, y: 2.05, w: 3.4, h: 0.5,
    fontSize: 14, fontFace: "Trebuchet MS", bold: true, color: C.white,
    align: "center", margin: 0
  });
  slide.addText("Handmatig labelen is de grootste tijdsinvestering bij computer vision. SAM2 maakt dit tot 10× sneller — ook voor niet-technische medewerkers.", {
    x: 6.2, y: 2.55, w: 3.4, h: 2.0,
    fontSize: 13, fontFace: "Calibri", color: "A8D4EC",
    align: "center", valign: "top", margin: 0
  });
}

// ── SLIDE 10: Leeropbouw ──────────────────────────────────────────────────────
{
  const slide = lightSlide(pres, "De Leeropbouw: Van Standaard → Eigen → Autonoom");

  const steps = [
    { n: "1", label: "Bijeenkomst 1", sub: "Kant-en-klaar\nYOLOv8-model", color: C.teal },
    { n: "2", label: "Bijeenkomst 2", sub: "Eigen model via\nRoboflow", color: C.deepBlue },
    { n: "3", label: "Bijeenkomst 3", sub: "Volledig eigen\ndataset & model", color: C.midnight },
    { n: "→", label: "Volgende fase", sub: "Productie-\ninzet MKB", color: "8B4513" },
  ];

  steps.forEach((s, i) => {
    const x = 0.4 + i * 2.35;
    slide.addShape(pres.shapes.OVAL, {
      x, y: 1.3, w: 1.8, h: 1.8,
      fill: { color: s.color }, line: { color: s.color }
    });
    slide.addText(s.n, {
      x, y: 1.3, w: 1.8, h: 1.8,
      fontSize: 32, fontFace: "Trebuchet MS", bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0
    });
    slide.addText(s.label, {
      x: x - 0.1, y: 3.15, w: 2.0, h: 0.5,
      fontSize: 13, fontFace: "Trebuchet MS", bold: true, color: C.textDark,
      align: "center", margin: 0
    });
    slide.addText(s.sub, {
      x: x - 0.1, y: 3.6, w: 2.0, h: 0.9,
      fontSize: 12, fontFace: "Calibri", color: C.textMid,
      align: "center", valign: "top", margin: 0
    });
    if (i < steps.length - 1) {
      slide.addShape(pres.shapes.LINE, {
        x: x + 1.8, y: 2.2, w: 0.55, h: 0,
        line: { color: C.teal, width: 3 }
      });
    }
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.6, w: 10, h: 0.45,
    fill: { color: C.teal }, line: { color: C.teal }
  });
  slide.addText("Elke stap bouwt voort op de vorige — deelnemers werken naar autonomie toe.", {
    x: 0.3, y: 4.6, w: 9.4, h: 0.45,
    fontSize: 14, fontFace: "Calibri", bold: true, color: C.white,
    valign: "middle", margin: 0
  });
}

// ── SLIDE 11: Key takeaways ───────────────────────────────────────────────────
{
  const slide = lightSlide(pres, "Wat Hebben We Geleerd? — Key Takeaways");

  const takeaways = [
    { emoji: "🚀", title: "Computer vision is toegankelijker dan gedacht", body: "Met de juiste tools (YOLOv8, Roboflow, Label Studio) kunnen ook niet-AI-specialisten werkende modellen bouwen." },
    { emoji: "📊", title: "Data is de bottleneck, niet het model", body: "50–150 eigen foto's zijn genoeg voor een werkende proof-of-concept. Kwaliteit gaat boven kwantiteit." },
    { emoji: "🏭", title: "MKB-context maakt het concreet", body: "De koffiemachine-demo en eigen productbeelden maakten abstracte AI tastbaar voor bedrijfsdeelnemers." },
    { emoji: "🤝", title: "Twee niveaus versterken de groep", body: "Gevorderde deelnemers helpen beginners; beginners stellen de vragen die gevorderden niet meer stellen." },
  ];

  takeaways.forEach((t, i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const x = 0.3 + col * 4.85;
    const y = 1.05 + row * 1.85;
    
    slide.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 4.55, h: 1.7,
      fill: { color: C.white }, line: { color: C.accentGray, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 4, offset: 2, angle: 135, opacity: 0.08 }
    });
    slide.addText(t.emoji, {
      x: x + 0.1, y: y + 0.1, w: 0.6, h: 0.6,
      fontSize: 22, align: "center", margin: 0
    });
    slide.addText(t.title, {
      x: x + 0.7, y: y + 0.1, w: 3.7, h: 0.55,
      fontSize: 13, fontFace: "Trebuchet MS", bold: true, color: C.deepBlue,
      valign: "middle", margin: 0
    });
    slide.addText(t.body, {
      x: x + 0.15, y: y + 0.65, w: 4.2, h: 0.95,
      fontSize: 12, fontFace: "Calibri", color: C.textMid,
      valign: "top", margin: 0
    });
  });
}

// ── SLIDE 12: Uitdagingen ─────────────────────────────────────────────────────
{
  const slide = lightSlide(pres, "Uitdagingen en Observaties");

  const items = [
    { emoji: "💻", title: "Hardware-diversiteit", body: "Laptops varieerden sterk in CPU/GPU. YOLO-inferentie op CPU is mogelijk maar traag; dit vraagt geduld of aanpassing." },
    { emoji: "📸", title: "Datakwaliteit wisselend", body: "Niet iedereen had 50+ bruikbare foto's meegenomen. Belichting en achtergrond beïnvloeden modelprestaties sterk." },
    { emoji: "⚡", title: "Snelheid vs. diepgang", body: "Twee niveaus bedienen vraagt dynamisch modereren. Gevorderden waren soms klaar terwijl beginners nog instelden." },
    { emoji: "🔧", title: "Installatieproblemen", body: "Camera-drivers en Python-omgevingen vereisten troubleshooting. Voorbereide fallback-notebooks hielpen dit op te vangen." },
    { emoji: "📝", title: "Labelkwaliteit vraagt oefening", body: "Consistent en nauwkeurig labelen is een vaardigheid op zich. Label Studio-oefening vroeg meer tijd dan verwacht." },
    { emoji: "🔄", title: "Transfer naar eigen context", body: "De stap van demo-opstelling naar eigen producten/processen vraagt begeleiding — dit is waar de volgende fase op inspeelt." },
  ];

  items.forEach((item, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.3 + col * 4.85;
    const y = 1.05 + row * 1.2;

    slide.addText(item.emoji + "  " + item.title, {
      x, y, w: 4.55, h: 0.45,
      fontSize: 13, fontFace: "Trebuchet MS", bold: true, color: C.deepBlue,
      valign: "middle", margin: 0
    });
    slide.addText(item.body, {
      x: x + 0.1, y: y + 0.42, w: 4.45, h: 0.7,
      fontSize: 12, fontFace: "Calibri", color: C.textMid,
      valign: "top", margin: 0
    });
  });
}

// ── SLIDE 13: Notebook-aanpak ─────────────────────────────────────────────────
{
  const slide = lightSlide(pres, "De Notebook-aanpak: Waarom het Werkt");

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.3, y: 1.0, w: 9.4, h: 0.55,
    fill: { color: C.deepBlue }, line: { color: C.deepBlue }
  });
  slide.addText("📓  Jupyter Notebooks als interactieve werkomgeving per workshop", {
    x: 0.5, y: 1.0, w: 9.0, h: 0.55,
    fontSize: 15, fontFace: "Trebuchet MS", bold: true, color: C.white,
    valign: "middle", margin: 0
  });

  const cols = [
    {
      title: "Voordelen",
      color: C.teal,
      items: [
        "Stap-voor-stap — elke cel één concept",
        "Direct uitvoerbaar — geen aparte IDE nodig",
        "Markdown-uitleg naast code — context altijd zichtbaar",
        "Eigen tempo — gevorderden springen door, beginners herhalen",
        "Resultaten direct zichtbaar (afbeeldingen, grafieken)",
      ]
    },
    {
      title: "Notebooks per workshop",
      color: C.midnight,
      items: [
        "01_Setup_en_Camera_Test.ipynb",
        "02_YOLO_Object_Detection.ipynb",
        "03_Train_Je_Eigen_Model_Interactief.ipynb",
        "04_Labelen_En_Trainen_Eigen_Dataset.ipynb",
        "Totaal: 4 notebooks, volledig gedocumenteerd",
      ]
    }
  ];

  cols.forEach((col, i) => {
    const x = 0.3 + i * 4.85;
    slide.addShape(pres.shapes.RECTANGLE, {
      x, y: 1.6, w: 4.55, h: 0.5,
      fill: { color: col.color }, line: { color: col.color }
    });
    slide.addText(col.title, {
      x, y: 1.6, w: 4.55, h: 0.5,
      fontSize: 14, fontFace: "Trebuchet MS", bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0
    });
    bulletList(slide, col.items, x + 0.1, 2.15, 4.35, 2.5, { fontSize: 13 });
  });
}

// ── SLIDE 14: Volgende fase ───────────────────────────────────────────────────
{
  const slide = lightSlide(pres, "Wat Brengt de Volgende Fase?");

  slide.addText("Van prototypen naar productie", {
    x: 0.3, y: 1.0, w: 9.4, h: 0.5,
    fontSize: 20, fontFace: "Trebuchet MS", bold: true, color: C.deepBlue,
    margin: 0
  });

  const nexts = [
    { emoji: "🏗️", title: "Productie-inzet", body: "Modellen integreren in bestaande productieprocessen bij deelnemende bedrijven. Van laptop-demo naar edge-device of server." },
    { emoji: "📡", title: "Edge computing", body: "Inferentie op Raspberry Pi, Jetson Nano of vergelijkbare hardware — dichtbij de productielijn." },
    { emoji: "📊", title: "Monitoring & drift", body: "Hoe houd je een model betrouwbaar? Datadrift detecteren, hertrainen plannen, KPI's definiëren." },
    { emoji: "🔗", title: "Integratie met bestaande systemen", body: "Koppeling met PLC's, MES-systemen, dashboards (Grafana/Node-RED) — de stap die MKB bedrijven echt nodig hebben." },
    { emoji: "🎓", title: "Studentprojecten", body: "Studenten Smart Industry koppelen aan bedrijfsvraagstukken — leeromgeving wordt praktijkomgeving." },
    { emoji: "🔄", title: "Community groeit door", body: "Nieuwe bedrijven aansluiten, kennis delen, gezamenlijk dataset-beleid — learning community blijft leren." },
  ];

  nexts.forEach((n, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.3 + col * 3.2;
    const y = 1.6 + row * 1.65;

    slide.addShape(pres.shapes.OVAL, {
      x, y: y + 0.05, w: 0.55, h: 0.55,
      fill: { color: i < 3 ? C.teal : C.deepBlue }, line: { color: i < 3 ? C.teal : C.deepBlue }
    });
    slide.addText(n.emoji, {
      x, y: y + 0.05, w: 0.55, h: 0.55,
      fontSize: 16, align: "center", valign: "middle", margin: 0
    });
    slide.addText(n.title, {
      x: x + 0.65, y, w: 2.45, h: 0.45,
      fontSize: 13, fontFace: "Trebuchet MS", bold: true, color: C.deepBlue,
      valign: "middle", margin: 0
    });
    slide.addText(n.body, {
      x: x + 0.05, y: y + 0.5, w: 3.05, h: 1.1,
      fontSize: 12, fontFace: "Calibri", color: C.textMid,
      valign: "top", margin: 0
    });
  });
}

// ── SLIDE 15: Dank & Contact ──────────────────────────────────────────────────
{
  const slide = pres.addSlide();
  slide.background = { color: C.midnight };
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 1.4, fill: { color: C.deepBlue }, line: { color: C.deepBlue }
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 4.5, w: 10, h: 1.125, fill: { color: C.teal }, line: { color: C.teal }
  });

  slide.addText("Dank voor jullie betrokkenheid!", {
    x: 0.5, y: 1.5, w: 9, h: 0.9,
    fontSize: 34, fontFace: "Trebuchet MS", bold: true, color: C.white,
    align: "center", margin: 0
  });
  slide.addText("Samen hebben we computer vision van abstract concept\ntot werkende praktijkdemo gebracht.", {
    x: 0.5, y: 2.35, w: 9, h: 0.9,
    fontSize: 18, fontFace: "Calibri", color: "CCE8F5",
    align: "center", margin: 0
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 2.5, y: 3.3, w: 5.0, h: 0.02, fill: { color: C.teal }, line: { color: C.teal }
  });

  slide.addText("AI Vision Learning Community  •  Achterhoek  •  2024–2025", {
    x: 0.5, y: 4.55, w: 9, h: 0.6,
    fontSize: 14, fontFace: "Calibri", color: C.white,
    align: "center", valign: "middle", margin: 0
  });
}

// ── WRITE ─────────────────────────────────────────────────────────────────────
const outPath = "projects/learning-community/ai-vision/workshops/terugblik-learning-community-ai-vision.pptx";
pres.writeFile({ fileName: outPath })
  .then(() => console.log("✅ PPTX written:", outPath))
  .catch(e => { console.error("❌ Error:", e); process.exit(1); });
