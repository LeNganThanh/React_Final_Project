export const timeTable = [
  {
    id: 0,
    time: "7.50 - 8.35",
    monday: "-",
    tuesday: "BI - C15",
    wednesday: "DE - C21",
    thursday: "SP - Rosen-Halle",
    friday: "MA - C21",
  },
  {
    id: 1,
    time: "8.40 - 9.25",
    monday: "KL - C21",
    tuesday: "BI - C15",
    wednesday: "DE - C21",
    thursday: "SP - Rosen-Halle",
    friday: "MA - C21",
  },
  {
    id: 2,
    time: "9.45 - 10.30",
    monday: "WN - C11",
    tuesday: "EN - C21",
    wednesday: "MA - C21",
    thursday: "KU - H33Ku1",
    friday: "MU - B18Mu1",
  },
  {
    id: 3,
    time: "10.40 - 11.35",
    monday: "WN - C11",
    tuesday: "EN - C21",
    wednesday: "MA - C21",
    thursday: "KU - H33Ku1",
    friday: "MU - B18Mu1",
  },
  {
    id: 4,
    time: "11.40 - 12.25",
    monday: "GE - C21",
    tuesday: "DE - C21",
    wednesday: "EK - C21",
    thursday: "PH - C15",
    friday: "EN - C21",
  },
  {
    id: 5,
    time: "12.25 - 13.20",
    monday: "GE - C21",
    tuesday: "DE - C21",
    wednesday: "EK - C21",
    thursday: "PH - C15",
    friday: "EN - C21",
  },
  {
    id: 6,
    time: "14.00 - 14.45",
    monday: "-",
    tuesday: "-",
    wednesday: "-",
    thursday: "-",
    friday: "-",
  },
];
export const handleDayClick = day => {
  let valArr = [];
  let setMethod = [];
  for (let i = 0; i < timeTable.length; i++) {
    for (let [key, val] of Object.entries(timeTable[i])) {
      if (key === day) valArr.push(val.substring(0, 2));
    }
    setMethod = Array.from(new Set(valArr)); //get unique method in the day (ex. EN - MA....)
  }
  return setMethod;
};

//get only the weekday out of obj (ex. monday - tuesday...)
export const getWeekday = () => {
  let weekdayArr = [];
  let dayDetails = Object.keys(timeTable[0]);
  for (let i = 2; i < dayDetails.length; i++) {
    weekdayArr.push(dayDetails[i]);
  }
  return weekdayArr;
};
