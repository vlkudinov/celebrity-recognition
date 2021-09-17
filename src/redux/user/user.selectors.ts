import { createSelector } from 'reselect';
import { RootState } from 'src/model';

const selectUserState = (state : RootState) => state.user;

const selectUserCredentials = createSelector(
  [selectUserState],
  (user) => user.credentials,
);

export const selectUserFullName = createSelector(
  [selectUserCredentials],
  (credentials) => `${credentials?.firstName || ''} ${credentials?.lastName || ''}`,
);

export const selectUserNameInitials = createSelector(
  [selectUserCredentials],
  (credentials) => {
    const getFirstCapitalLetter = (string : string | undefined) => (string ? string[0].toUpperCase() : '');
    const firstNameCapitalLetter = getFirstCapitalLetter(credentials?.firstName);
    const lastNameCapitalLetter = getFirstCapitalLetter(credentials?.lastName);

    return `${firstNameCapitalLetter} ${lastNameCapitalLetter}`;
  },
);
