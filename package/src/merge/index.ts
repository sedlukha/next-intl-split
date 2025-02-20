import path from 'path';
import { existsSync } from 'fs';

import { loadMessages } from '../load';
import { writeMessages } from '../write';

const isRelativePath = (pathToCheck: string) => pathToCheck.startsWith(`./`);
const doesPathExist = (pathToCheck: string) => existsSync(pathToCheck);

export const mergeMessages = (outputPath: string, inputPath?: string) => {
  if (!isRelativePath(outputPath)) {
    throw new Error(
      `Please provide the RELATIVE path to the output messages folder. Like, ./src/i18n/messages`
    );
  }

  if (inputPath && !isRelativePath(inputPath)) {
    throw new Error(
      `Please provide the RELATIVE path to the input messages folder. Like, ./src/components`
    );
  }

  const outputAbsolutePath = path.resolve(process.cwd(), outputPath);
  const inputAbsolutePath = path.resolve(process.cwd(), inputPath || outputPath);

  if (!doesPathExist(outputAbsolutePath)) {
    throw new Error(
      `The provided path to the output messages does not exist! ${outputAbsolutePath}`
    );
  }

  if (inputPath && !doesPathExist(inputPath)) {
    throw new Error(
      `The provided path to the input messages does not exist! ${inputAbsolutePath}`
    );
  }

  const messages = loadMessages(inputAbsolutePath);

  writeMessages(outputAbsolutePath, messages);
};
