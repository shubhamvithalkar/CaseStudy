var surveyData = {};
function recordAnswer(questionId, answer) {
    surveyData[questionId] = answer;
}
recordAnswer("q1", "Yes");
recordAnswer("q2", 10);
recordAnswer("q3", ["Option A", "Option B"]);
console.log("Survey Results:");
for (var key in surveyData) {
    console.log(key + ":", surveyData[key]);
}
