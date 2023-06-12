import App from './components/app/app';
import './global.css';
import rssLogo from './assets/rss_logo.svg';

function addLogo(): void {
  const schoolLogo = new Image();
  schoolLogo.src = rssLogo;
  schoolLogo.alt = 'Logo of The Rolling Scopes School';
  schoolLogo.classList.add('footer__image');

  const footerLogo = document.querySelector('.footer__logo_link');
  footerLogo?.append(schoolLogo);
}

const app = new App();
app.start();
addLogo();
