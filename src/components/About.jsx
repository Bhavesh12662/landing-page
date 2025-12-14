export default function About() {
  return (
    <section id="about" style={styles.section}>
      <h2>About Me</h2>
      <p>
        I am a BCA student and aspiring web developer with a strong interest
        in frontend technologies. I enjoy creating modern user interfaces
        and continuously learning new tools to improve usability and
        performance.
      </p>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto"
  }
};
