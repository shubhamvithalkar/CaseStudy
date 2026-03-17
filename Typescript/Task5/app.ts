let surveyData: { [key: string]: any } = {}

function recordAnswer(questionId: string, answer: any) {
    surveyData[questionId] = answer
}

recordAnswer("q1", "Yes")
recordAnswer("q2", 10)
recordAnswer("q3", ["Option A", "Option B"])

console.log("Survey Results:")

for (let key in surveyData) {
    console.log(key + ":", surveyData[key])
}