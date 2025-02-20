'client side';

import { useLocale, useTranslations } from 'next-intl';

const ClientSideComponent = () => {
  // Hooks
  const locale = useLocale();
  const translate = useTranslations();

  return (
    <div className='border-2 border-rose-300 border-dotted bg-rose-50 px-3 py-2 rounded-xl'>
      <p className='text-center'>Client Side Component</p>
      <hr className='my-2' />
      <p>{translate('home.hero.phrase', { locale })}</p>
    </div>
  );
};

export default ClientSideComponent;
