export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Bhavesh Dasari</h2>

      <div>
        <a href="#about" style={styles.link}>About</a>
        <a href="#skills" style={styles.link}>Skills</a>
        <a href="#contact" style={styles.link}>Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#0f172a",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  logo: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "bold"
  },
  link: {
    marginLeft: "24px",
    color: "white",
    textDecoration: "none",
    fontSize: "16px"
  }
};
