export default function Services() {
  return (
    <section id="services" style={styles.section}>
      <h2>My Skills</h2>
      <div style={styles.grid}>
        <div style={styles.card}>React.js</div>
        <div style={styles.card}>HTML, CSS, JavaScript</div>
        <div style={styles.card}>Responsive Web Design</div>
        <div style={styles.card}>Git & GitHub</div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px",
    backgroundColor: "#f1f5f9",
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "30px",
    maxWidth: "1000px",
    marginInline: "auto"
  },
  card: {
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 5px 12px rgba(0,0,0,0.1)",
    fontWeight: "bold"
  }
};
