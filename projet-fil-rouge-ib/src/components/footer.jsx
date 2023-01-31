import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Réalisé par :
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/lamia-boudedja-0b3489233/" target={"_blank"}
        >
          Lamia BOUDEDJA
        </a>
        -
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/benjamin-brugghe-82aa24239/" target={"_blank"}
        >
          Benjamin BRUGGHE
        </a>
        -
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/corentin-dumontier/" target={"_blank"}
        >
          Corentin DUMONTIER
        </a>
        -
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/nathan-joudet-76b5a8220/" target={"_blank"}
        >
          Nathan JOUDET
        </a>
        - Projet fil rouge IB Cegos</p>
    </div>
  );
};

export default Footer;
