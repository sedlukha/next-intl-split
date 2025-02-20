import { getLocale, getTranslations } from 'next-intl/server';

import { locales } from '@/i18n/locales';
import { Link } from '@/i18n/navigation';

// Components
import ClientSideComponent from '@/components/csr';

const ClientSidePage = async () => {
  // Hooks
  const currentLocale = await getLocale();
  const translate = await getTranslations({
    locale: currentLocale,
    namespace: 'home.hero',
  });

  return (
    <main className='flex flex-col gap-4 items-center justify-center h-screen w-full'>
      <h1 className='text-5xl font-extrabold'>{translate('title')}</h1>
      <ClientSideComponent />
      <div className='flex gap-2'>
        {locales.map((locale) => (
          <Link
            key={locale}
            href='/client-side'
            locale={locale}
            className={`border-2 border-rose-600 px-4 py-1 rounded-lg hover:bg-rose-200 text-lg ${
              locale === currentLocale ? 'text-white' : ''
            } ${locale === currentLocale ? 'bg-rose-300' : ''}`}
          >
            {translate(`buttons.${locale}` as 'buttons.en')}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default ClientSidePage;
