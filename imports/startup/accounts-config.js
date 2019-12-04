import { Accounts } from 'meteor/accounts-base';

/**
 * Config Meteor Ui Account
 */
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});
