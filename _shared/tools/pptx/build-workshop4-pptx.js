const pptxgen = require("pptxgenjs");
const pres = new pptxgen();

pres.layout = "LAYOUT_16x9";
pres.author = "Learning Community Smart Industry";
pres.title = "Workshop 4 — Eigen Dataset Labelen en Trainen";

// === COLOR PALETTE (Teal Trust) ===
const C = {
  dark:    "0B2027",
  primary: "028090",
  second:  "00A896",
  mint:    "02C39A",
  light:   "F0F7F4",
  white:   "FFFFFF",
  text:    "1E293B",
  muted:   "64748B",
  accent:  "F59E0B",
};

const mkShadow = () => ({ type: "outer", blur: 6, offset: 2, angle: 135, color: "000000", opacity: 0.12 });

// ─── SLIDE 1: TITLE ─────────────────────────────────────
let s1 = pres.addSlide();
s1.background = { color: C.dark };

s1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 5.625,
  fill: { color: C.primary, transparency: 15 },
});
s1.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 4.2, w: 10, h: 1.425,
  fill: { color: C.primary, transparency: 40 },
});

s1.addText("WORKSHOP 4", {
  x: 0.8, y: 1.0, w: 8.4, h: 0.8,
  fontSize: 18, fontFace: "Trebuchet MS", color: C.mint,
  charSpacing: 6, bold: true, margin: 0,
});
s1.addText("Eigen Dataset Labelen\nen Model Trainen", {
  x: 0.8, y: 1.7, w: 8.4, h: 2.0,
  fontSize: 40, fontFace: "Trebuchet MS", color: C.white,
  bold: true, margin: 0,
});
s1.addText("Learning Community Smart Industry — AI Vision", {
  x: 0.8, y: 4.5, w: 8.4, h: 0.6,
  fontSize: 14, fontFace: "Calibri", color: C.mint, margin: 0,
});

// ─── SLIDE 2: AGENDA ─────────────────────────────────────
let s2 = pres.addSlide();
s2.background = { color: C.light };

s2.addText("Programma vandaag", {
  x: 0.8, y: 0.4, w: 8.4, h: 0.7,
  fontSize: 32, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

const agenda = [
  { blok: "Blok 1", titel: "Kick-off + labelregels", tijd: "20 min" },
  { blok: "Blok 2", titel: "Labelen in Label Studio", tijd: "45 min" },
  { blok: "Blok 3", titel: "Export + dataset check", tijd: "20 min" },
  { blok: "Blok 4", titel: "Model trainen (YOLO)", tijd: "35 min" },
  { blok: "Blok 5", titel: "Evaluatie + live demo", tijd: "25 min" },
  { blok: "Blok 6", titel: "Reflectie + verbeterplan", tijd: "15 min" },
];

agenda.forEach((item, i) => {
  const y = 1.4 + i * 0.62;
  // Blok label
  s2.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: y, w: 1.2, h: 0.45,
    fill: { color: C.primary },
    rectRadius: 0.05,
  });
  s2.addText(item.blok, {
    x: 0.8, y: y, w: 1.2, h: 0.45,
    fontSize: 12, fontFace: "Calibri", color: C.white, bold: true,
    align: "center", valign: "middle", margin: 0,
  });
  // Titel
  s2.addText(item.titel, {
    x: 2.2, y: y, w: 5.5, h: 0.45,
    fontSize: 16, fontFace: "Calibri", color: C.text, valign: "middle", margin: 0,
  });
  // Tijd
  s2.addText(item.tijd, {
    x: 7.8, y: y, w: 1.4, h: 0.45,
    fontSize: 14, fontFace: "Calibri", color: C.muted, align: "right", valign: "middle", margin: 0,
  });
});

s2.addText("Totaal ± 2,5 uur", {
  x: 0.8, y: 5.1, w: 8.4, h: 0.4,
  fontSize: 14, fontFace: "Calibri", color: C.muted, italic: true, margin: 0,
});

// ─── SLIDE 3: WAAROM EIGEN DATA? ─────────────────────────
let s3 = pres.addSlide();
s3.background = { color: C.white };

s3.addText("Waarom eigen data?", {
  x: 0.8, y: 0.4, w: 8.4, h: 0.7,
  fontSize: 32, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

s3.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 1.3, w: 3.8, h: 1.6,
  fill: { color: C.light }, shadow: mkShadow(),
});
s3.addText([
  { text: "Workshop 3", options: { bold: true, fontSize: 16, color: C.primary, breakLine: true } },
  { text: "Trainen met bestaande data", options: { fontSize: 14, color: C.text, breakLine: true } },
  { text: "Focus: hoe werkt training?", options: { fontSize: 13, color: C.muted } },
], { x: 1.0, y: 1.4, w: 3.4, h: 1.4, fontFace: "Calibri", margin: 0 });

s3.addText("→", {
  x: 4.6, y: 1.7, w: 0.8, h: 0.8,
  fontSize: 36, fontFace: "Calibri", color: C.primary, align: "center", valign: "middle",
});

s3.addShape(pres.shapes.RECTANGLE, {
  x: 5.4, y: 1.3, w: 3.8, h: 1.6,
  fill: { color: C.primary }, shadow: mkShadow(),
});
s3.addText([
  { text: "Workshop 4", options: { bold: true, fontSize: 16, color: C.white, breakLine: true } },
  { text: "Volledige keten zelf bouwen", options: { fontSize: 14, color: C.mint, breakLine: true } },
  { text: "Focus: data → labels → model", options: { fontSize: 13, color: C.mint } },
], { x: 5.6, y: 1.4, w: 3.4, h: 1.4, fontFace: "Calibri", margin: 0 });

s3.addText("Kernboodschap", {
  x: 0.8, y: 3.3, w: 8.4, h: 0.5,
  fontSize: 18, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

s3.addText([
  { text: "Labelkwaliteit bepaalt modelkwaliteit", options: { bold: true, fontSize: 15, color: C.text, breakLine: true } },
  { text: "Slechte labels → slecht model, ongeacht hoeveel data je hebt", options: { fontSize: 14, color: C.muted } },
], { x: 0.8, y: 3.8, w: 8.4, h: 1.0, fontFace: "Calibri", margin: 0 });

// ─── SLIDE 4: FOTO'S VERZAMELEN ──────────────────────────
let s4 = pres.addSlide();
s4.background = { color: C.white };

s4.addText("Deel A — Foto's verzamelen", {
  x: 0.8, y: 0.4, w: 8.4, h: 0.7,
  fontSize: 32, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

// Left column - requirements
s4.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 1.3, w: 4.0, h: 3.6,
  fill: { color: C.light },
});
s4.addText("Minimumvereisten", {
  x: 1.0, y: 1.4, w: 3.6, h: 0.5,
  fontSize: 16, fontFace: "Calibri", color: C.primary, bold: true, margin: 0,
});
s4.addText([
  { text: "25–50 foto's per klasse", options: { bullet: true, breakLine: true } },
  { text: "2 duidelijke categorieën", options: { bullet: true, breakLine: true } },
  { text: "Telefooncamera is prima", options: { bullet: true, breakLine: true } },
  { text: "Gevarieerde achtergronden", options: { bullet: true, breakLine: true } },
  { text: "Voldoende belichting", options: { bullet: true } },
], { x: 1.0, y: 1.95, w: 3.6, h: 2.8, fontSize: 14, fontFace: "Calibri", color: C.text, margin: 0 });

// Right column - variatie
s4.addShape(pres.shapes.RECTANGLE, {
  x: 5.2, y: 1.3, w: 4.0, h: 3.6,
  fill: { color: C.light },
});
s4.addText("Variatie is essentieel", {
  x: 5.4, y: 1.4, w: 3.6, h: 0.5,
  fontSize: 16, fontFace: "Calibri", color: C.primary, bold: true, margin: 0,
});
s4.addText([
  { text: "Hoeken: boven / zij / schuin", options: { bullet: true, breakLine: true } },
  { text: "Afstanden: dichtbij / ver", options: { bullet: true, breakLine: true } },
  { text: "Achtergronden: werkbank, vloer", options: { bullet: true, breakLine: true } },
  { text: "Belichting: dag / kunstlicht", options: { bullet: true, breakLine: true } },
  { text: "1 object + meerdere objecten", options: { bullet: true } },
], { x: 5.4, y: 1.95, w: 3.6, h: 2.8, fontSize: 14, fontFace: "Calibri", color: C.text, margin: 0 });

// ─── SLIDE 5: LABELPROTOCOL - BOUNDING BOXES ─────────────
let s5 = pres.addSlide();
s5.background = { color: C.white };

s5.addText("Labelprotocol — Bounding Boxes", {
  x: 0.8, y: 0.4, w: 8.4, h: 0.7,
  fontSize: 32, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

// Tight fit explanation
s5.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 1.3, w: 8.4, h: 1.4,
  fill: { color: C.light },
});
s5.addText([
  { text: "Tight fit", options: { bold: true, fontSize: 18, color: C.primary, breakLine: true } },
  { text: "Label strak om het object — geen grote lege ruimte rondom.", options: { fontSize: 14, color: C.text, breakLine: true } },
  { text: "YOLO leert positie en omvang uit die boxen. Te losse of inconsistente boxen verlagen nauwkeurigheid.", options: { fontSize: 13, color: C.muted } },
], { x: 1.0, y: 1.4, w: 8.0, h: 1.2, fontFace: "Calibri", margin: 0 });

// Key rules
s5.addText("Gouden regels", {
  x: 0.8, y: 3.0, w: 8.4, h: 0.5,
  fontSize: 18, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

const rules = [
  { num: "1", text: "Consistentie boven perfectie — hetzelfde labelen is belangrijker dan pixel-perfect" },
  { num: "2", text: "Gebruik alleen de afgesproken klassenamen — geen variaties" },
  { num: "3", text: "Niet 'gokken' buiten beeldranden — box stopt bij de rand" },
];
rules.forEach((r, i) => {
  const y = 3.6 + i * 0.55;
  s5.addShape(pres.shapes.OVAL, {
    x: 0.8, y: y, w: 0.4, h: 0.4,
    fill: { color: C.primary },
  });
  s5.addText(r.num, {
    x: 0.8, y: y, w: 0.4, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: C.white, bold: true,
    align: "center", valign: "middle", margin: 0,
  });
  s5.addText(r.text, {
    x: 1.4, y: y, w: 7.8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: C.text, valign: "middle", margin: 0,
  });
});

// ─── SLIDE 6: RANDGEVALLEN ───────────────────────────────
let s6 = pres.addSlide();
s6.background = { color: C.white };

s6.addText("Labelprotocol — Randgevallen", {
  x: 0.8, y: 0.4, w: 8.4, h: 0.7,
  fontSize: 32, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

const edges = [
  {
    title: "Deels zichtbaar (beeldrand)",
    desc: "Wel labelen als herkenbaar (≥30% zichtbaar). Box loopt door tot beeldrand.",
    color: C.second,
  },
  {
    title: "Overlap / occlusie",
    desc: "Elk herkenbaar object apart labelen. Overlappende boxes zijn toegestaan.",
    color: C.primary,
  },
  {
    title: "Kleine objecten",
    desc: "Wel labelen als betrouwbaar herkenbaar. Overweeg hogere imgsz of dichterbij fotograferen.",
    color: C.dark,
  },
];

edges.forEach((e, i) => {
  const y = 1.3 + i * 1.3;
  s6.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: y, w: 0.15, h: 1.1,
    fill: { color: e.color },
  });
  s6.addShape(pres.shapes.RECTANGLE, {
    x: 0.95, y: y, w: 8.25, h: 1.1,
    fill: { color: C.light },
  });
  s6.addText(e.title, {
    x: 1.2, y: y + 0.1, w: 7.8, h: 0.4,
    fontSize: 16, fontFace: "Calibri", color: C.dark, bold: true, margin: 0,
  });
  s6.addText(e.desc, {
    x: 1.2, y: y + 0.5, w: 7.8, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: C.text, margin: 0,
  });
});

// ─── SLIDE 7: KWALITEITSCONTROLE ─────────────────────────
let s7 = pres.addSlide();
s7.background = { color: C.white };

s7.addText("Kwaliteitscontrole op labels", {
  x: 0.8, y: 0.4, w: 8.4, h: 0.7,
  fontSize: 32, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

// Big stat
s7.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 1.3, w: 3.5, h: 2.8,
  fill: { color: C.primary }, shadow: mkShadow(),
});
s7.addText([
  { text: "10–20%", options: { fontSize: 48, bold: true, color: C.white, breakLine: true } },
  { text: "van de beelden\ndubbel labelen", options: { fontSize: 16, color: C.mint } },
], { x: 0.8, y: 1.5, w: 3.5, h: 2.4, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });

// Steps
s7.addText("Werkwijze", {
  x: 4.8, y: 1.3, w: 4.4, h: 0.5,
  fontSize: 18, fontFace: "Calibri", color: C.dark, bold: true, margin: 0,
});
s7.addText([
  { text: "Twee studenten labelen dezelfde beelden", options: { bullet: true, breakLine: true } },
  { text: "Vergelijk de bounding boxes", options: { bullet: true, breakLine: true } },
  { text: "Bespreek verschillen in teamcheck", options: { bullet: true, breakLine: true } },
  { text: "Pas het protocol aan bij ambiguïteit", options: { bullet: true, breakLine: true } },
  { text: "Documenteer in het labellogboek", options: { bullet: true } },
], { x: 4.8, y: 1.9, w: 4.4, h: 2.2, fontSize: 14, fontFace: "Calibri", color: C.text, margin: 0 });

s7.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 4.4, w: 8.4, h: 0.8,
  fill: { color: C.light },
});
s7.addText("Consistentie tussen annotators is belangrijker dan pixel-perfectie", {
  x: 1.0, y: 4.4, w: 8.0, h: 0.8,
  fontSize: 15, fontFace: "Calibri", color: C.primary, italic: true,
  align: "center", valign: "middle", margin: 0,
});

// ─── SLIDE 8: LABEL STUDIO ───────────────────────────────
let s8 = pres.addSlide();
s8.background = { color: C.white };

s8.addText("Labelen in Label Studio", {
  x: 0.8, y: 0.4, w: 8.4, h: 0.7,
  fontSize: 32, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

s8.addText([
  { text: "Waarom Label Studio?", options: { bold: true, fontSize: 16, color: C.primary, breakLine: true } },
], { x: 0.8, y: 1.2, w: 8.4, h: 0.4, fontFace: "Calibri", margin: 0 });

const lsReasons = [
  { title: "Privacy", desc: "Data blijft op lokale server — geen cloud uploads" },
  { title: "Open Source", desc: "Apache 2.0 licentie — gratis voor iedereen" },
  { title: "Flexibel", desc: "Ondersteunt bounding boxes, polygonen, en meer" },
  { title: "Export", desc: "Directe export naar YOLO-formaat" },
];

lsReasons.forEach((r, i) => {
  const x = 0.8 + (i % 2) * 4.4;
  const y = 1.8 + Math.floor(i / 2) * 1.4;
  s8.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 4.0, h: 1.15,
    fill: { color: C.light }, shadow: mkShadow(),
  });
  s8.addText(r.title, {
    x: x + 0.2, y: y + 0.1, w: 3.6, h: 0.4,
    fontSize: 15, fontFace: "Calibri", color: C.primary, bold: true, margin: 0,
  });
  s8.addText(r.desc, {
    x: x + 0.2, y: y + 0.5, w: 3.6, h: 0.5,
    fontSize: 13, fontFace: "Calibri", color: C.text, margin: 0,
  });
});

s8.addText("Toegang: http://<server-ip>:8080", {
  x: 0.8, y: 4.8, w: 8.4, h: 0.5,
  fontSize: 14, fontFace: "Consolas", color: C.muted, margin: 0,
});

// ─── SLIDE 9: RESIZING BIJ TRAINING ─────────────────────
let s9 = pres.addSlide();
s9.background = { color: C.white };

s9.addText("Beeldformaten & resizing", {
  x: 0.8, y: 0.4, w: 8.4, h: 0.7,
  fontSize: 32, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

// Warning box
s9.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 1.3, w: 8.4, h: 1.2,
  fill: { color: "FEF3C7" },
});
s9.addText([
  { text: "⚠  Belangrijk: ", options: { bold: true, fontSize: 15, color: C.accent } },
  { text: "Tijdens training worden alle beelden automatisch geresized naar ", options: { fontSize: 15, color: C.text } },
  { text: "imgsz", options: { fontSize: 15, color: C.primary, bold: true } },
  { text: " (standaard 640 pixels). Kleine details kunnen hierdoor verdwijnen!", options: { fontSize: 15, color: C.text } },
], { x: 1.0, y: 1.4, w: 8.0, h: 1.0, fontFace: "Calibri", margin: 0 });

// Three tips
const tips = [
  { title: "Objectgrootte", desc: "Zorg dat objecten voldoende groot in beeld staan" },
  { title: "Kleine objecten?", desc: "Test met imgsz=960 of 1280 (trager maar nauwkeuriger)" },
  { title: "Afweging", desc: "Hoger imgsz = betere detectie, maar langere trainingstijd" },
];
tips.forEach((t, i) => {
  const x = 0.8 + i * 3.0;
  s9.addShape(pres.shapes.RECTANGLE, {
    x: x, y: 2.9, w: 2.7, h: 1.8,
    fill: { color: C.light }, shadow: mkShadow(),
  });
  s9.addText(t.title, {
    x: x + 0.15, y: 3.0, w: 2.4, h: 0.5,
    fontSize: 15, fontFace: "Calibri", color: C.primary, bold: true, margin: 0,
  });
  s9.addText(t.desc, {
    x: x + 0.15, y: 3.5, w: 2.4, h: 1.0,
    fontSize: 13, fontFace: "Calibri", color: C.text, margin: 0,
  });
});

// ─── SLIDE 10: DATASET STRUCTUUR ─────────────────────────
let s10 = pres.addSlide();
s10.background = { color: C.white };

s10.addText("Dataset structuur (YOLO)", {
  x: 0.8, y: 0.4, w: 8.4, h: 0.7,
  fontSize: 32, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

// Folder structure
s10.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 1.3, w: 4.5, h: 3.4,
  fill: { color: C.dark },
});
s10.addText([
  { text: "dataset/", options: { bold: true, color: C.mint, breakLine: true } },
  { text: "  train/", options: { color: C.white, breakLine: true } },
  { text: "    images/   labels/", options: { color: C.muted, breakLine: true } },
  { text: "  valid/", options: { color: C.white, breakLine: true } },
  { text: "    images/   labels/", options: { color: C.muted, breakLine: true } },
  { text: "  test/", options: { color: C.white, breakLine: true } },
  { text: "    images/   labels/", options: { color: C.muted, breakLine: true } },
  { text: "  data.yaml", options: { color: C.accent, bold: true } },
], { x: 1.2, y: 1.5, w: 3.8, h: 3.0, fontSize: 15, fontFace: "Consolas", margin: 0 });

// Split verdeling
s10.addText("Verdeling", {
  x: 5.8, y: 1.3, w: 3.4, h: 0.5,
  fontSize: 18, fontFace: "Calibri", color: C.dark, bold: true, margin: 0,
});

const splits = [
  { name: "Train", pct: "70%", color: C.primary, w: 2.94 },
  { name: "Valid", pct: "15%", color: C.second, w: 0.63 },
  { name: "Test", pct: "15%", color: C.mint, w: 0.63 },
];

// Stacked bar
let barX = 5.8;
splits.forEach((sp) => {
  s10.addShape(pres.shapes.RECTANGLE, {
    x: barX, y: 2.0, w: sp.w, h: 0.5,
    fill: { color: sp.color },
  });
  barX += sp.w;
});

splits.forEach((sp, i) => {
  const y = 2.8 + i * 0.55;
  s10.addShape(pres.shapes.RECTANGLE, {
    x: 5.8, y: y, w: 0.3, h: 0.3,
    fill: { color: sp.color },
  });
  s10.addText(`${sp.name} — ${sp.pct}`, {
    x: 6.3, y: y, w: 3.0, h: 0.3,
    fontSize: 14, fontFace: "Calibri", color: C.text, valign: "middle", margin: 0,
  });
});

// ─── SLIDE 11: TRAINING ──────────────────────────────────
let s11 = pres.addSlide();
s11.background = { color: C.white };

s11.addText("Training — net als workshop 3", {
  x: 0.8, y: 0.4, w: 8.4, h: 0.7,
  fontSize: 32, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

// Config block
s11.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 1.3, w: 8.4, h: 1.4,
  fill: { color: C.dark },
});
s11.addText([
  { text: "model = YOLO(\"yolov8n.pt\")", options: { color: C.mint, breakLine: true } },
  { text: "model.train(data=\"data.yaml\", epochs=40, imgsz=640, batch=8)", options: { color: C.white } },
], { x: 1.2, y: 1.5, w: 7.8, h: 1.0, fontSize: 15, fontFace: "Consolas", margin: 0 });

// Key decisions
s11.addText("Noteer jullie keuzes", {
  x: 0.8, y: 3.0, w: 8.4, h: 0.5,
  fontSize: 18, fontFace: "Calibri", color: C.dark, bold: true, margin: 0,
});

const choices = [
  { param: "imgsz", uitleg: "Inputresolutie — hoger = betere detectie, trager" },
  { param: "epochs", uitleg: "Trainingsronden — meer = langer, risico op overfitting" },
  { param: "batch", uitleg: "Beelden per stap — groter = sneller, meer geheugen" },
  { param: "conf", uitleg: "Confidence drempel — hoger = minder maar zekerder detecties" },
];

choices.forEach((c, i) => {
  const y = 3.6 + i * 0.5;
  s11.addText(c.param, {
    x: 0.8, y: y, w: 1.4, h: 0.4,
    fontSize: 14, fontFace: "Consolas", color: C.primary, bold: true, valign: "middle", margin: 0,
  });
  s11.addText(c.uitleg, {
    x: 2.4, y: y, w: 6.8, h: 0.4,
    fontSize: 14, fontFace: "Calibri", color: C.text, valign: "middle", margin: 0,
  });
});

// ─── SLIDE 12: EVALUATIE ─────────────────────────────────
let s12 = pres.addSlide();
s12.background = { color: C.white };

s12.addText("Evaluatie — begrijpen wat je model doet", {
  x: 0.8, y: 0.4, w: 8.4, h: 0.7,
  fontSize: 32, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

const metrics = [
  { name: "Precision", desc: "Van alle detecties: hoeveel % is correct?", icon: "🎯" },
  { name: "Recall", desc: "Van alle echte objecten: hoeveel % gevonden?", icon: "🔍" },
  { name: "mAP@50", desc: "Gemiddelde precisie over alle klassen (IoU≥0.5)", icon: "📊" },
];

metrics.forEach((m, i) => {
  const y = 1.3 + i * 1.2;
  s12.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: y, w: 8.4, h: 1.0,
    fill: { color: C.light },
  });
  s12.addText(m.icon, {
    x: 1.0, y: y + 0.1, w: 0.7, h: 0.8,
    fontSize: 28, align: "center", valign: "middle", margin: 0,
  });
  s12.addText(m.name, {
    x: 1.8, y: y + 0.1, w: 2.0, h: 0.8,
    fontSize: 18, fontFace: "Calibri", color: C.primary, bold: true, valign: "middle", margin: 0,
  });
  s12.addText(m.desc, {
    x: 3.8, y: y + 0.1, w: 5.2, h: 0.8,
    fontSize: 14, fontFace: "Calibri", color: C.text, valign: "middle", margin: 0,
  });
});

s12.addShape(pres.shapes.RECTANGLE, {
  x: 0.8, y: 4.2, w: 8.4, h: 0.8,
  fill: { color: "FEF3C7" },
});
s12.addText("Kijk niet naar 1 metric — bekijk het totaalplaatje!", {
  x: 1.0, y: 4.2, w: 8.0, h: 0.8,
  fontSize: 15, fontFace: "Calibri", color: C.accent, bold: true,
  align: "center", valign: "middle", margin: 0,
});

// ─── SLIDE 13: REFLECTIE ─────────────────────────────────
let s13 = pres.addSlide();
s13.background = { color: C.white };

s13.addText("Reflectie — 4 teamvragen", {
  x: 0.8, y: 0.4, w: 8.4, h: 0.7,
  fontSize: 32, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

const questions = [
  "Wat werkte goed?",
  "Wat ging er mis?",
  "Lag het aan de data, de labels of de training?",
  "Welke 3 verbeteringen doen jullie in ronde 2?",
];

questions.forEach((q, i) => {
  const y = 1.4 + i * 1.0;
  s13.addShape(pres.shapes.OVAL, {
    x: 0.8, y: y + 0.05, w: 0.5, h: 0.5,
    fill: { color: C.primary },
  });
  s13.addText(String(i + 1), {
    x: 0.8, y: y + 0.05, w: 0.5, h: 0.5,
    fontSize: 18, fontFace: "Calibri", color: C.white, bold: true,
    align: "center", valign: "middle", margin: 0,
  });
  s13.addText(q, {
    x: 1.6, y: y, w: 7.6, h: 0.6,
    fontSize: 20, fontFace: "Calibri", color: C.text, valign: "middle", margin: 0,
  });
});

// ─── SLIDE 14: INLEVEREN ─────────────────────────────────
let s14 = pres.addSlide();
s14.background = { color: C.white };

s14.addText("Inleveren", {
  x: 0.8, y: 0.4, w: 8.4, h: 0.7,
  fontSize: 32, fontFace: "Trebuchet MS", color: C.dark, bold: true, margin: 0,
});

const deliverables = [
  { title: "Dataset", desc: "YOLO-structuur (train/valid/test)", color: C.primary },
  { title: "Model", desc: "best.pt + screenshot metrics", color: C.second },
  { title: "Labellogboek", desc: "Afspraken, dubbel-check, aanpassingen", color: C.mint },
  { title: "Reflectie", desc: "Max 1 pagina: goed/fout/verbeterplan", color: C.accent },
];

deliverables.forEach((d, i) => {
  const x = 0.8 + (i % 2) * 4.4;
  const y = 1.3 + Math.floor(i / 2) * 1.8;
  s14.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 4.0, h: 1.5,
    fill: { color: C.white },
    line: { color: d.color, width: 2 },
    shadow: mkShadow(),
  });
  s14.addShape(pres.shapes.RECTANGLE, {
    x: x, y: y, w: 4.0, h: 0.08,
    fill: { color: d.color },
  });
  s14.addText(d.title, {
    x: x + 0.2, y: y + 0.2, w: 3.6, h: 0.5,
    fontSize: 18, fontFace: "Calibri", color: C.dark, bold: true, margin: 0,
  });
  s14.addText(d.desc, {
    x: x + 0.2, y: y + 0.75, w: 3.6, h: 0.5,
    fontSize: 14, fontFace: "Calibri", color: C.muted, margin: 0,
  });
});

// ─── SLIDE 15: AFSLUITING ────────────────────────────────
let s15 = pres.addSlide();
s15.background = { color: C.dark };

s15.addShape(pres.shapes.RECTANGLE, {
  x: 0, y: 0, w: 10, h: 5.625,
  fill: { color: C.primary, transparency: 15 },
});

s15.addText("Onthoud", {
  x: 0.8, y: 1.2, w: 8.4, h: 0.7,
  fontSize: 18, fontFace: "Trebuchet MS", color: C.mint, charSpacing: 4, bold: true, margin: 0,
});
s15.addText("Goed labelen = goed model", {
  x: 0.8, y: 1.8, w: 8.4, h: 1.2,
  fontSize: 38, fontFace: "Trebuchet MS", color: C.white, bold: true, margin: 0,
});
s15.addText("Data → Labels → Training → Evaluatie → Verbeteren", {
  x: 0.8, y: 3.2, w: 8.4, h: 0.6,
  fontSize: 18, fontFace: "Calibri", color: C.mint, margin: 0,
});
s15.addText("Vragen? Succes met ronde 2!", {
  x: 0.8, y: 4.3, w: 8.4, h: 0.5,
  fontSize: 16, fontFace: "Calibri", color: C.muted, margin: 0,
});

// ─── WRITE FILE ──────────────────────────────────────────
const outPath = "/opt/openclaw/workspace/projects/learning-community/ai-vision/workshops/Workshop_4_Labelen_en_Trainen.pptx";
pres.writeFile({ fileName: outPath }).then(() => {
  console.log("PPTX geschreven naar:", outPath);
}).catch(err => {
  console.error("Fout:", err);
});
