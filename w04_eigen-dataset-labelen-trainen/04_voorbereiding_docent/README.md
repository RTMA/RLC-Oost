# Voorbereiding docent — Workshop 4

Deze map bevat alles wat je als docent vooraf klaarzet voor Workshop 4.

## Inhoud

- `labelstudio/docker-compose.yml` → lokale Label Studio server
- `labelstudio/.env.example` → instellingen (poort, admin-account)
- `labelstudio/label_config.xml` → standaard labeling-config (bounding boxes)
- `labelstudio/start.sh` / `stop.sh` → snel starten/stoppen
- `labelstudio/backup.sh` → backup van Label Studio data
- `dataset_template/README.md` → verwachte YOLO datasetstructuur
- `docent-checklist.md` → stap-voor-stap voorbereiding

## Snelle start (docent)

```bash
cd ai-vision/workshops/04_voorbereiding_docent/labelstudio
cp .env.example .env
# pas eventueel admin wachtwoord en poort aan
./start.sh
```

Open daarna: `http://localhost:8080`

## Belangrijk

- Deze setup draait volledig lokaal op jouw server/laptop (geen cloud nodig).
- Data staat in `labelstudio/data/`.
- Maak vóór de workshop altijd een backup met `./backup.sh`.
