import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {Accounts} from 'meteor/accounts-base';

Meteor.methods({
    'user.register'({email, password}) {
        check(email, Email);
        check(password, String);
        console.log(Email);
        Accounts.createUser({
            email: data.email,
            password: data.password
        });
    },
    'user.list'() {

    }
});
