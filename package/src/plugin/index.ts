import createNextIntlPlugin from 'next-intl/plugin';

import { mergeMessages } from '../merge';

export default function createNextIntlSplitPlugin(
  outputPath: string,
  i18nPath?: string,
  inputPath?: string
) {
  mergeMessages(outputPath, inputPath);

  return createNextIntlPlugin(i18nPath);
}
