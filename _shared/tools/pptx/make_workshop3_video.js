const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const gTTS = require('gtts');

const outDir = path.resolve(__dirname, 'media');
fs.mkdirSync(outDir, { recursive: true });

const narration = `Welkom bij workshop 3: train je eigen YOLO model, interactieve versie.
In deze begeleidende video loop ik met je mee alsof ik naast je zit.
Je kunt deze video gebruiken als je de klassikale uitleg gemist hebt, of als je het rustig wilt herhalen.

We starten bij stap nul: de setup check.
Voer de eerste codecel uit en kijk of je Python versie en packages kloppen.
Los eventuele fouten nu op, want elke fout hier veroorzaakt later ruis tijdens trainen.

Daarna gaan we naar de import-cel en het configuratieblok.
In dit blok stel je alle kernparameters in: paden, aantal epochs, image size, confidence threshold en camera index.
Dit is jouw cockpit. Als je iets wilt experimenteren, begin je altijd hier.

Dan verkennen we de dataset.
Je leest data dot yaml in, bekijkt de class names en toont voorbeeldafbeeldingen.
Let op variatie in licht, hoek en achtergrond.
Hoe meer variatie, hoe robuuster je model meestal wordt.

Daarna kijk je naar labels in YOLO-formaat.
Die zijn genormaliseerd tussen nul en één.
Dat betekent dat labels onafhankelijk zijn van resolutie.
Dit is belangrijk als je later met andere cameraformaten werkt.

In de visualisatiecel zie je bounding boxes op de afbeelding.
Controleer hier kritisch: zitten de boxen netjes om het object?
Als labels rommelig zijn, leert je model rommel.
Garbage in is garbage out.

Nu transfer learning.
Je start niet vanaf nul, maar bouwt voort op een voorgetraind model.
Daardoor kun je met relatief weinig data toch snel een bruikbaar model maken.
Dit is precies waarom YOLO in onderwijsprojecten zo praktisch is.

Dan start de training.
Tijdens training let je op drie dingen.
Eén: loss moet over tijd dalen.
Twee: er mogen geen vreemde pieken of crashes blijven terugkomen.
Drie: je training moet logisch stoppen volgens de ingestelde epochs.

Na training open je de confusion matrix.
Die laat zien waar je model goed zit en waar het klassen door elkaar haalt.
Rijen zijn de echte klasse, kolommen de voorspelling.
Sterke modellen hebben vooral hoge waarden op de diagonaal.

Bekijk daarna ook de results grafiek met de curves.
Zie je verbetering die stabiliseert, dan zit je meestal goed.
Blijft het chaotisch, dan kun je later spelen met datasetkwaliteit, epochs of augmentatie.

Vervolgens laad je best dot pt en test je op ongeziene testbeelden.
Dat is cruciaal: je model moet niet alleen trainen, maar generaliseren.
Gebruik hier de confidence threshold bewust.
Een lagere waarde geeft meer detecties, maar vaak ook meer foute detecties.

In het experiment met confidence zie je die trade-off direct.
Bij nul komma twee krijg je vaak veel detecties.
Bij nul komma zes vaak minder, maar betrouwbaarder.
Kies niet blind een getal: kies op basis van je toepassing.

Daarna de debug challenge.
Hier train je je foutzoek-spier.
Lees foutmeldingen rustig, fix één ding tegelijk, run opnieuw.
Dit is exact hoe je in echte projecten sneller wordt als engineer.

En dan realtime detectie met je eigen model.
Camera aan, model laden, live voorspellen.
Als dit werkt, heb je de volledige keten doorlopen:
van data, naar training, naar evaluatie, naar live inferentie.
Dat is een grote stap.

Tot slot de eindquiz en reflectie.
Belangrijkste vraag is niet alleen of het werkt,
maar of jij kunt uitleggen waarom het werkt, en wanneer het faalt.
Dat onderscheidt iemand die alleen code draait van iemand die AI echt begrijpt.

Samenvatting.
In deze workshop heb je geleerd:
dataset begrijpen,
labels controleren,
trainen met transfer learning,
resultaten interpreteren,
thresholds afwegen,
en je eigen model realtime inzetten.

Top dat je dit serieus oppakt.
Pauzeer gerust, test dingen opnieuw, en noteer je bevindingen.
Zo bouw je niet alleen een model, maar ook vakmanschap.`;

const scriptTxt = path.join(outDir, 'workshop3_voiceover_script_nl.txt');
fs.writeFileSync(scriptTxt, narration, 'utf8');

const scriptMd = path.join(outDir, 'workshop3_begeleid_script_nl.md');
fs.writeFileSync(scriptMd, `# Workshop 3 — Begeleid script (NL)\n\n${narration.split('\n').map(l=>l.trim()).filter(Boolean).map(l=>`- ${l}`).join('\n')}\n`, 'utf8');

const mp3Path = path.join(outDir, 'workshop3_voiceover_nl.mp3');
const srtPath = path.join(outDir, 'workshop3_subtitles_nl.srt');
const outVideo = path.join(outDir, 'workshop3_train_eigen_model_begeleid.mp4');

function secToSrt(t) {
  const h = String(Math.floor(t/3600)).padStart(2,'0');
  const m = String(Math.floor((t%3600)/60)).padStart(2,'0');
  const s = String(Math.floor(t%60)).padStart(2,'0');
  const ms = String(Math.floor((t-Math.floor(t))*1000)).padStart(3,'0');
  return `${h}:${m}:${s},${ms}`;
}

function makeSrt() {
  const lines = narration.split('\n').map(l=>l.trim()).filter(Boolean);
  let t = 0;
  let i = 1;
  const blocks = [];
  for (const line of lines) {
    const dur = Math.max(2.8, Math.min(7.5, line.length / 16));
    blocks.push(`${i}\n${secToSrt(t)} --> ${secToSrt(t+dur)}\n${line}\n`);
    t += dur;
    i += 1;
  }
  fs.writeFileSync(srtPath, blocks.join('\n'), 'utf8');
}

function makeVideo() {
  makeSrt();
  const ffmpeg = '/opt/openclaw/workspace/.tools/audio/node_modules/ffmpeg-static/ffmpeg';
  const cmd = `${ffmpeg} -y -f lavfi -i color=c=#0b1020:s=1920x1080:r=30 -i "${mp3Path}" -filter_complex "[0:v]drawbox=x=80:y=80:w=1760:h=760:color=#111827@0.78:t=fill,subtitles='${srtPath}':force_style='FontName=DejaVu Sans,FontSize=22,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,BackColour=&H64000000,BorderStyle=3,Outline=1,Shadow=0,MarginV=40'[v0];[1:a]showwaves=s=1500x170:mode=line:colors=0x38bdf8[vw];[v0][vw]overlay=(W-w)/2:870:shortest=1[v]" -map "[v]" -map 1:a -c:v libx264 -pix_fmt yuv420p -c:a aac -b:a 192k -shortest "${outVideo}"`;
  execSync(cmd, { stdio: 'inherit' });
  console.log('Video gemaakt:', outVideo);
}

const tts = new gTTS(narration, 'nl');
tts.save(mp3Path, (err) => {
  if (err) {
    console.error('TTS fout:', err);
    process.exit(1);
  }
  console.log('Audio gemaakt:', mp3Path);
  makeVideo();
});
