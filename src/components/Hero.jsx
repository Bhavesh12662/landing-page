export default function Hero() {
  return (
    <section style={styles.hero}>
      <h1>Hi, I’m Bhavesh</h1>
      <p>
        A frontend developer focused on building clean, responsive, and
        user-friendly web applications using React.js.
      </p>
      <button style={styles.button}>View My Work</button>
    </section>
  );
}

const styles = {
  hero: {
    height: "80vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "0 20px"
  },
  button: {
    marginTop: "20px",
    padding: "12px 30px",
    backgroundColor: "#38bdf8",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px"
  }
};

