function StudentCard({ name, rollNo, course }) {
  return (
    <div>
      <h3>Student Card</h3>
      <p>Name: {name}</p>
      <p>Roll No: {rollNo}</p>
      <p>Course: {course}</p>
    </div>
  );
}

function ReusableStudentCard() {
  return (
    <div>
      <h2>Reusable Student Card</h2>

      <StudentCard
        name="Prince Patel"
        rollNo="101"
        course="Computer Science"
      />

      <StudentCard
        name="Rahul Sharma"
        rollNo="102"
        course="Artificial Intelligence"
      />

      <StudentCard
        name="Aman Verma"
        rollNo="103"
        course="Data Science"
      />
    </div>
  );
}

export default ReusableStudentCard;