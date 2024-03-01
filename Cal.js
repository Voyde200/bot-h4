const ical = require('ical.js');

const url = 'https://planning2023.hetic.fr/hp/Telechargements/ical/Edt_THIRION.ics?version=2023.0.5.0&icalsecurise=06387909CFD0690DB89D0DBAE3C7D1BBA17B40ECEA9F6FF952D41F2B1DE98705B44CB1FAA165317A9F7A8D900B9EB35D&param=643d5b312e2e36325d2666683d3126663d31';

ical.fromURL(url, {}, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const events = data.events();
  const firstEvent = events[1]; // Accéder au premier événement

  if (firstEvent) {
    console.log(`Titre du premier événement: ${firstEvent.summary}`);
  } else {
    console.log("Aucun événement trouvé dans le calendrier.");
  }
});