const ical = require("ical");
const url =
  "https://planning2023.hetic.fr/hp/Telechargements/ical/Edt_THIRION.ics?version=2023.0.5.0&icalsecurise=06387909CFD0690DB89D0DBAE3C7D1BBA17B40ECEA9F6FF952D41F2B1DE98705B44CB1FAA165317A9F7A8D900B9EB35D&param=643d5b312e2e36325d2666683d3126663d31";
// console.log(ical);

var classDescrib = "Aucun cours trouvé";
var classHorraire = 0;
let test = [];

ical.fromURL(url, {}, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // formate the date
  function formatDate(date) {
    const jours = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const mois = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const jour = jours[date.getDay()];
    const moisAbr = mois[date.getMonth()];
    const jourNum = date.getDate().toString().padStart(2, "0");

    return `${jour} ${moisAbr} ${jourNum}`;
  }

  // Obtenir la date du jour
  const aujourdHui = new Date();

  // Formater la date
  const dateFormatee = formatDate(aujourdHui);

  // Afficher la date formatée
  //console.log(dateFormatee); // Exemple : "Ven Fév 02"

  // console.log(data);
  for (property in data) {
    if (data.hasOwnProperty(property)) {
      var ev = data[property];

      let start = String(ev.start);
      let soos = start.search(dateFormatee);

      // console.log(start);
      if (soos != -1) {
        classDescrib = ev.description.val;
        classHorraire = start;
        // console.log(classDescrib);
        // classDescrib = ev.description.val;
        test.push(classDescrib);
      }
    }
  }

  // const events = data.events();
  // const firstEvent = events[1]; // Accéder au premier événement
  // console.log(data);
  // if (firstEvent) {
  //   console.log(`Titre du premier événement: ${firstEvent.summary}`);
  // } else {
  //   console.log("Aucun événement trouvé dans le calendrier.");
  // }
  //});
  console.log(classHorraire);
  console.log(test);
  module.exports = {
    classDescrib,
    classHorraire,
  };
});
