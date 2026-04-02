/* Create a system that processes student data, calculates grades, filters results, and generates reports. It should handle real-world logic like grade calculations, filtering by criteria, and data transformations.

What to Build:
An array of student objects, where each student has: name, marks (array of subject scores), attendance percentage
Functions that:
Calculate average marks and assign grades (A/B/C/D based on ranges)
Filter students by criteria (e.g., "show only students with > 75 average")
Find top performer and lowest scorer
Check eligibility (average > 40 AND attendance > 75%)
Loops to iterate through data and transform it
Conditionals to apply grading rules (use switch for grade assignment or if/else for eligibility)
Generate a summary report showing: total students, pass count, fail count, average class score
How to Approach It:
Start with data structure — Create realistic student objects with nested arrays (marks per subject)
Build utility functions — Each function should do ONE thing (calculate average, assign grade, filter students)
Use loops strategically — .map() mindset (though not required): transform data from one form to another
Apply game logic — Use conditionals creatively (e.g., bonus points if attendance > 90%)
Combine everything — Chain functions and loops to build the final report
Challenge Twist (Optional):
Add a pass/fail rule: If marks < 40, fail regardless of attendance
Add a merit scholarship checker: Show students eligible for scholarship (average > 80 AND attendance 100)
Export data to a formatted string report using template literals
This project forces them to design with objects, organize logic with functions, and process data with loops — all core pillars.
 */
// Sample student data
const students = [
    { name: "Ram", marks: [85, 90, 78], attendance: 92 },  
    { name: "Shyam", marks: [70, 75, 80], attendance: 85 },
    { name: "Hari", marks: [60, 65, 58], attendance: 80 },
    { name: "Gita", marks: [30, 35, 28], attendance: 70 },
    { name: "Sita", marks: [95, 98, 92], attendance: 100 }
];

// Function to calculate average marks and assign grades
function calculateGrade(student) {
    const average = student.marks.reduce((sum, mark) => sum + mark, 0) / student.marks.length;  
    let grade;
    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    }   
    else if (average >= 70) {
        grade = 'C';
    } else if (average >= 40) {
        grade = 'D';
    }   
    else {
        grade = 'F';
    }       
    return { ...student, average, grade };
}

// Process students to calculate grades
const processedStudents = students.map(calculateGrade);

// Filter students with average > 75
const topStudents = processedStudents.filter(student => student.average > 75);
console.log("Top Students:", topStudents);

// Find top performer and lowest scorer
const topPerformer = processedStudents.reduce((top, student) => student.average > top.average ? student : top, processedStudents[0]);
const lowestScorer = processedStudents.reduce((low, student) => student.average < low.average ? student : low, processedStudents[0]);
console.log("Top Performer:", topPerformer);
console.log("Lowest Scorer:", lowestScorer);

// Check eligibility
const eligibleStudents = processedStudents.filter(student => student.average > 40 && student.attendance > 75);
console.log("Eligible Students:", eligibleStudents);

// Generate summary report
const totalStudents = processedStudents.length;
const passCount = processedStudents.filter(student => student.grade !== 'F').length;
const failCount = totalStudents - passCount;
const averageClassScore = processedStudents.reduce((sum, student) => sum + student.average, 0) / totalStudents;
console.log("Summary Report:");
console.log("- Total Students:", totalStudents);
console.log("- Pass Count:", passCount);
console.log("- Fail Count:", failCount);
console.log("- Average Class Score:", averageClassScore.toFixed(2));

