const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                      "Thursday", "Friday", "Saturday"];
function dayName(date)  {

  return daysOfTheWeek[date.getDay()];
}

function greeting(date) {
  return `Hello, World! Happy ${daysOfTheWeek[date.getDay()]}`
}
