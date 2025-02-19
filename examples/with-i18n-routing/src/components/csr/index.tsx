'client side';

import { useLocale, useTranslations } from 'next-intl';

const ClientSideComponent = () => {
  // Hooks
  const locale = useLocale();
  const translate = useTranslations();

  return <p>{translate('home.hero.phrase', { locale })}</p>;
};

export default ClientSideComponent;
