import React from "react";
import Score from "./Score";

function Student(props) {
  return (
    <div>
      {props.students.map((student, i) => (
        <div key={i}>
          <strong>NAME:</strong> {student.name} <br />
          <strong>BIO:</strong> {student.bio} <br />
          <strong>SCORES:</strong> <Score scores={student.scores} /> <br />
        </div>
      ))}
    </div>
  );
}

export default Student;
