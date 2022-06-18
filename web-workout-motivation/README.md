# Clean Architecture in react

# sample json, what will be required

```javascript
{
id: str,
name: "kiss cica", //str
email: sample@gmail.com, // str
bodyPartsProgress: [
  traps: 24, // num 0-100
  shoulders: 10,
  biceps: 70,
  triceps: 80,
  chest: 100,
  abs: 50,
  frontThigh: 6,
  backThigh: 6,
  calf: 2,
  back:30,
  lats: 20,
],
waterGoal: 3, // water in l
caloriGoal: 2600, // num
progressPicutres: [] // first day, first month, 3 month, half year picture to measure the perforamnce
todoList: [ // todos for the day
  something: false,
  somethingDone: true,
  asd: false
],
todayWourkoutPlan: [
  {
  workoutName: "Bench Press",
  sets: 4, // this determines the length of the reps and weights array, because you change the weights
  reps: [12,10,8,6],
  weights: [40,50,70,90],
  tags: ["triceps", "biceps"],
  isDone: false
  },
  {
  workoutName: "Squats",
  sets: 3, // this determines the length of the reps and weights array, because you change the weights
  reps: [12,12,12],
  weights: [80,80,120],
  tags: ["frontThigh", "backThigh"],
  isDone: false
  }
]
}

```
