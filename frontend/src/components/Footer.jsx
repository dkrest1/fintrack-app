import Logo from "../Assets/images/logo.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="footer__Link">Designed by Ayo, Code by Oluwatosin</div>
      <p className="footer__copyright">Copyright &copy; 2022</p>
    </footer>
  );
};

export default Footer;
