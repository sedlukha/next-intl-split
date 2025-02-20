import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { loadI18nTranslations } from 'next-intl-split/load';

import { locales } from '@/i18n/locales';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) notFound();

  let messages = (await import(`../messages/${locale}.json`)).default;

  if (process.env.NODE_ENV === 'development') {
    messages = loadI18nTranslations('./src/messages', locale, true);
  }

  return {
    locale,
    messages,
  };
});
