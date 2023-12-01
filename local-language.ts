import { ILocalize } from 'types/localization.interface';

import en from '../locales/en-US/en-us.json';

export const getLocalLanguage = (): ILocalize => {
    return en;
};
