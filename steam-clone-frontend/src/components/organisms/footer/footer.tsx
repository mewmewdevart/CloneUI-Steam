import style from './footer.module.css';

import LogoIcon from '@assets/icons/steam-icon.svg';

const Footer = () => {
  return (
    <footer className={style.Footer} aria-label="Footer Navigation">
        <a href="/" aria-label="Home">
          <img src={LogoIcon} alt="Steam's logo" className="cursor-pointer" />
        </a>

    </footer>
  );
};

export default Footer;