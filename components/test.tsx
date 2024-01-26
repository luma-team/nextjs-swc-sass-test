import React from 'react'

export const Test = () => {
  return (
    <div className="container">
      <div className="inner"/>

      <style jsx>{`
          .container {
              background: red;

              .inner {
                  background: blue;
              }
          }
      `}</style>
    </div>
  )
}
