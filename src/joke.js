import React from "react";

const styles = {
  fontStyle: "italic",
  textAlign: "center",
  padding: "15px",
  marginTop: "10px",
  backgroundColor: "#eee",
  borderBottom: "8px solid #ddd",
};

export default ({ text }) => (
  <div data-testid="joke-text" style={styles}>
    {text}
  </div>
);