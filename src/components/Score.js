import React from "react";

function Score(props) {
  return (
    <div>
      {props.scores.map((score, i) => (
        <div key={i}>
          <strong>Date:</strong> {score.date} <br />
          <strong>Score:</strong> {score.score} <br />
        </div>
      ))}
    </div>
  );
}

export default Score;
