import React from "react";

export const Test = () => {
  return (
    <div className="container">
      <div>Outer should be red</div>

      <div className="inner">Inner should be blue</div>

      <style jsx>{`
        .container {
          color: red;

          .inner {
            color: blue;
          }
        }
      `}</style>
    </div>
  );
};
