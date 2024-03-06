import React, { useEffect, useState } from "react";
import * as prettier from "prettier/standalone";
import postcss from "prettier/plugins/postcss";

export const Test = () => {
  const [compiled, setCompiled] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Pull information from the DOM under the class data-styled-jsx
      const styles = document.querySelectorAll("style");
      styles.forEach((style) => {
        if (style && style.id.startsWith("__jsx-")) {
          prettier
            .format(style.innerHTML, {
              parser: "css",
              plugins: [postcss],
            })
            .then((formatted) => {
              setCompiled(formatted);
            });
        }
      });
    }
  }, []);

  return (
    <div className="outer">
      <div>
        This is a test page showing a demo how we can compile nested CSS classes
        in Styled JSX.
      </div>

      <div className="container">
        <div>Outer should be red.</div>
        <div className="inner">
          Inner should be blue. Note that you can’t test this on Chrome because
          Chrome supports CSS nesting built in.
        </div>
      </div>

      <div>
        Here is what the Styled JSX has been compiled to:
        <pre>{compiled}</pre>
      </div>

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
