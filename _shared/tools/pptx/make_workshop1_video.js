const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const gTTS = require('gtts');

const outDir = path.resolve(__dirname, 'media');
fs.mkdirSync(outDir, { recursive: true });

const narration = `Welkom bij workshop 1: setup en camera test. In deze video begeleid ik je stap voor stap, zodat je zonder docent toch zelfstandig kunt starten met computer vision.

Eerst het doel. Aan het einde van deze workshop heb je drie dingen bereikt. Eén: je Python-omgeving werkt. Twee: je benodigde libraries zijn geïnstalleerd. En drie: je camera is getest en je hebt je eerste foto vanuit Python gemaakt.

We beginnen met de setup check in de notebook. Voer die eerste cel altijd uit. Zie je groene checks, dan kun je verder. Zie je fouten, stop dan even en los eerst die basis op. Dit voorkomt dat je later vastloopt op onduidelijke meldingen.

Daarna komt stap 1: packages installeren. Dit kan twee tot vijf minuten duren. Dat is normaal. Sluit de notebook niet tussendoor af. Laat de installatie rustig uitlopen tot je weer een prompt ziet.

Belangrijk daarna is stap 2: kernel herstarten. De kernel is het brein van je notebook. Zonder herstart weet je sessie nog niet dat nieuwe packages beschikbaar zijn. Veel studenten vergeten dit en krijgen dan import errors die eigenlijk geen echte fout zijn.

In stap 3 importeer je de libraries. Denk aan OpenCV, NumPy en eventueel andere tools die in de notebook staan. Als deze cel zonder foutmelding draait, weet je dat je omgeving technisch klaarstaat voor de rest.

Nu naar de camera. In de notebook kies je een camera index. Meestal is nul de ingebouwde webcam. Heb je een externe camera, dan kan één of twee nodig zijn. Test rustig welke index beeld geeft.

Vervolgens maak je in stap 5 een foto. Controleer of het beeld logisch is: scherpte, licht, en framing. Als het beeld donker of korrelig is, pas dan je omgeving aan. Goede input levert betere AI-resultaten op.

Daarna visualiseer je de gemaakte afbeelding in het notebook. Dit is jouw eerste mini-pipeline: camera openen, frame pakken, en resultaat tonen. Simpel, maar essentieel voor alle volgende workshops.

In stap 6 kun je experimenteren. Probeer bijvoorbeeld rotatie, grayscale of resize. Daarmee leer je hoe beelddata reageert op bewerkingen. Dit helpt je later begrijpen waarom een detectiemodel soms beter of slechter presteert.

Afronding. Als je deze workshop goed hebt doorlopen, dan is je fundament klaar voor workshop 2 met YOLO object detectie. Mijn advies: noteer kort wat werkte, welke camera index je gebruikt, en welke fouten je bent tegengekomen. Dat maakt je vervolgtraject veel sneller.

Top dat je dit doet. Je bent nu niet alleen code aan het uitvoeren, je bouwt echt begrip op.`;

const scriptPath = path.join(outDir, 'workshop1_voiceover_script_nl.txt');
fs.writeFileSync(scriptPath, narration, 'utf8');

const mp3Path = path.join(outDir, 'workshop1_voiceover_nl.mp3');

function makeVideo() {
  const ffmpeg = '/opt/openclaw/workspace/.tools/audio/node_modules/ffmpeg-static/ffmpeg';
  const outVideo = path.join(outDir, 'workshop1_setup_camera_begeleid.mp4');
  const safeText = "Workshop 1 - Setup & Camera Test | Zelfstudie+";

  const cmd = `${ffmpeg} -y -f lavfi -i color=c=#0f172a:s=1920x1080:r=30 -i "${mp3Path}" -filter_complex "[0:v]drawtext=fontcolor=white:fontsize=56:text='${safeText}':x=(w-text_w)/2:y=120,drawtext=fontcolor=#93c5fd:fontsize=34:text='Computer Vision Workshop':x=(w-text_w)/2:y=220,drawtext=fontcolor=#cbd5e1:fontsize=28:text='Volg de stappen in notebook 01_Setup_en_Camera_Test.ipynb':x=(w-text_w)/2:y=300[v0];[1:a]showwaves=s=1400x220:mode=line:colors=0x38bdf8[vw];[v0][vw]overlay=(W-w)/2:760:shortest=1[v]" -map "[v]" -map 1:a -c:v libx264 -pix_fmt yuv420p -c:a aac -b:a 192k -shortest "${outVideo}"`;
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
