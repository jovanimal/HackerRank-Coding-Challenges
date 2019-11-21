function gradingStudents(grades) {
  for (let i=0; i < grades.length; i++) {
    let next5 = Math.ceil(grades[i]/5) * 5;
    if (next5 - grades[i] < 3 && grades[i] >= 38) grades[i] = next5;
  }
  return grades;
}
console.log(gradingStudents([73,67,38,33]))
