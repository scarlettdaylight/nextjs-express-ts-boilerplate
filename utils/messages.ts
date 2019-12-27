import { PrimitiveType } from 'intl-messageformat';
import { defineMessages, MessageDescriptor, useIntl } from 'react-intl';
import { LANGUAGE } from './constants';

export const languageMessages = defineMessages({
  [LANGUAGE.EN]: {
    id: 'language.en',
    defaultMessage: 'English',
  },
  [LANGUAGE.ZH_HANT]: {
    id: 'language.zh_hant',
    defaultMessage: '繁體',
  },
});

export function useMessage<T extends Record<string, MessageDescriptor>>(
  messagesList: T,
  key: keyof typeof messagesList,
  values?: Record<string, PrimitiveType>
): string {
  const intl = useIntl();
  return intl.formatMessage(messagesList[key], values);
}

export const useLanguageMessages = (key: keyof typeof languageMessages): string =>
  useMessage(languageMessages, key);

export const useFormattedDate = (date: Date): string => {
  const intl = useIntl();
  return intl.formatDate(date);
};
