// festlegen welche Typen eine Note haben kann
type Grade = number | string | undefined;

// student type festlegen
type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Grade[];
}

// erster student/ Aufgabe 1
const student: Student = {
    firstName: "Marko",
    lastName: "Hietala",
    age: 58,
    grades: ["A", "F", 3, 5, 2, 6]
}

function showStudent(student: Student) {
    console.log(`${student.firstName} ${student.lastName} (${student.age})`)
    console.log("=" .repeat(30))
    console.log("Noten: " + student.grades.map(grade =>  grade === undefined ? "*" : grade).join(", "));
    console.log();
}

// zweiter student mit Buchstaben als Noten / Aufgabe 2
const student2: Student = {
    firstName: "Floor",
    lastName: "Jansen",
    age: 43,
    grades: [1, "F", "A", 2, 3, 2, 1]
}

console.log("Student 1");
showStudent(student);
console.log()

// dritter student mit undefined als Noten / Aufgabe 3
const student3: Student = {
    firstName: "Tuomas",
    lastName: "Holopainen",
    age: 53,
    grades: [2, undefined, "C", "A", undefined, 1, 2]
}

// anlegen einer Liste von Studenten / Aufgabe 4
const students: Student[] = [student, student2, student3];

// function um alle Studenten anzuzeigen
function showAllStudents(students: Student[]) {
    students.forEach(student  => {
        showStudent(student);
        console.log();
    });
}

// Wiedergabe aller Studenten
console.log("Alle Studenten");
showAllStudents(students);

