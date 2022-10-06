import English from "../images/english.png";
import Erkunde from "../images/erkunde.jpeg";
import Math from "../images/math.jpeg";
import Deutsch from "../images/deutsch.jpeg";
import Kunst from "../images/kunst.jpeg";
import Klasse from "../images/class-meeting.jpeg";
import Bio from "../images/biology.jpeg";
import History from "../images/history.jpeg";
import Music from "../images/music.png";
import Sport from "../images/sport.jpeg";
import Werte from "../images/werte.jpeg";
import Physik from "../images/physik.jpeg";

export const detailsData = [
  {
    id: "EN",
    name: "English",
    teacher: "Mr. Buß Jann",
    room: "Classroom C21",
    src: English,
  },
  {
    id: "EK",
    name: "Explore",
    teacher: "Ms. Cassens Dennis",
    room: "Classroom C21",
    src: Erkunde,
  },
  {
    id: "MA",
    name: "Mathematics",
    teacher: "Mr. Busse Karsten",
    room: "Classroom C21",
    src: Math,
  },
  {
    id: "DE",
    name: "German",
    teacher: "Mr. Bartsch David",
    room: "Classroom C21",
    src: Deutsch,
  },
  {
    id: "KU",
    name: "Art",
    teacher: "Ms. Bedenbecker Karina",
    room: "Halle 33 Kunst 1",
    src: Kunst,
  },
  {
    id: "KL",
    name: "Class Meeting",
    teacher: "Mr. Marcouly Pascal",
    room: "Classroom C21",
    src: Klasse,
  },
  {
    id: "GE",
    name: "History",
    teacher: "Ms. Boshke Nadine",
    room: "Classroom C21",
    src: History,
  },
  {
    id: "WN",
    name: "Werte Normen",
    teacher: "Mr. Brammer Micheal",
    room: "Classroom C11",
    src: Werte,
  },
  {
    id: "PH",
    name: "Physics",
    teacher: "Ms. Drepper Michelle",
    room: "Classroom C15",
    src: Physik,
  },
  {
    id: "MU",
    name: "Music",
    teacher: "Ms. Helberg Laura",
    room: "B18 - Music 1",
    src: Music,
  },
  {
    id: "BI",
    name: "Biology",
    teacher: "Ms. Franz Katharina",
    room: "Classroom C15",
    src: Bio,
  },
  {
    id: "SP",
    name: "Sport",
    teacher: "Mr. Loock Timo",
    room: "Rosen Halle",
    src: Sport,
  },
];
export const getDayDetail = dayMethod => {
  //get every method by the selected day and only the method exist (EN or DE not "-")
  let methodArr = dayMethod.filter(day => day.length === 2);

  //get array of daily methods
  let detailsArr = [];
  methodArr.forEach(method => {
    for (let i = 0; i < detailsData.length; i++) {
      if (detailsData[i].id === method) detailsArr.push(detailsData[i]);
    }
  });
  return detailsArr;
};
