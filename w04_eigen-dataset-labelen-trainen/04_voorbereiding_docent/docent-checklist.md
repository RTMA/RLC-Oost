# Docent-checklist — Workshop 4 voorbereiding

## 1) Techniek (1-2 dagen vooraf)

- [ ] Docker en Docker Compose werken op de lokale server
- [ ] Label Studio draait via `docker compose up -d`
- [ ] Inloggen op `http://<server-ip>:8080` lukt
- [ ] Admin-account getest
- [ ] Firewall/poort 8080 alleen bereikbaar voor workshopnetwerk

## 2) Project setup in Label Studio

- [ ] Project aangemaakt: `Workshop 4 - Eigen dataset`
- [ ] Label config geladen (`label_config.xml`)
- [ ] Classes aangepast naar workshopthema
- [ ] Test met 5 afbeeldingen en labels

## 3) Datasethygiëne

- [ ] Teammappen voorbereid (per groep)
- [ ] Bestandsnamen gecontroleerd (geen spaties/gekke tekens)
- [ ] Minimale dataset per team: 80-150 beelden
- [ ] Richtlijn train/valid/test uitgelegd (bijv. 70/15/15)

## 4) Kwaliteitsafspraken (inhoud)

- [ ] Class-definities op 1 pagina
- [ ] Randgevallen afgesproken (occlusie, half zichtbaar, tiny objects)
- [ ] Minimum zichtbaarheid afgesproken (bijv. >=30%)
- [ ] 10-20% dubbel labelen ingepland

## 5) Workshopdag

- [ ] Notebook `04_Labelen_En_Trainen_Eigen_Dataset.ipynb` gedeeld
- [ ] Label export (YOLO) oefening gedaan met 1 testproject
- [ ] Fallback klaar: voorbeeld-dataset als iets misgaat
- [ ] Backup gemaakt aan begin en einde van de sessie
