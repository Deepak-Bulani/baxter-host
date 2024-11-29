import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer-list">{t('footer.copyright')}</div>
    </footer>
  );
};

export default Footer;
