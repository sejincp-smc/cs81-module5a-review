// This is an array of daily hobbies.
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// This is the total time spent - using reduce
function totalTime(log) {
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// This returns a list of new unique hobbies - using map.
function uniqueHobbies(log) {
  const names = log.map(entry => entry.hobby);
  // it removes duplicated hobby names from thw array.
  return [...new Set(names)];
}

// This shows the sessions which are longer than the specified minMinutes - using filter.
function longSessions(log, minMinutes) {
  return log.filter(entry => entry.minutes > minMinutes);
}

// This counts the mood - using filter.
function countMood(log, moodType) {
  return log.filter(entry => entry.mood === moodType).length;
}

// Output print: Total minutes spent on all hobby sessions.
console.log("Total time spent:", totalTime(hobbyLog), "minutes");

// Output print: List of new unique hobbies.
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));

// Output print: Sessions that lasted longer than 30 minutes.
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));

// Output print: Count of sessions with the mood was "relaxed".
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

// calling an existing function with new inputs.
console.log("Focused sessions:", countMood(hobbyLog, "calm"));

// Suggest an Improvement
// - Adding the favorite hobbies among the week.
// - Adding more data for weekends so that it could be the full weekly list.