import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";

export const mTheCoffeeShop = new Mongo.Collection('TheCoffeeShop');

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('TheCoffeeShop', function tasksPublication() {
        return mTheCoffeeShop.find({
            $or: [
                {owner: this.userId},
                {public: true}
            ]
        });
    });
}

Meteor.methods({
    'TheCoffeeShop.insert'(text) {
        check(text, String);
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        mTheCoffeeShop.insert({
            name: text,
            createdAt: new Date(),
            owner: this.userId,
            public: false,
            username: Meteor.users.findOne(this.userId).username,
        });
    },
    'TheCoffeeShop.setPublic'(theCoffeeID, statusPublic) {
        check(theCoffeeID, String);
        check(statusPublic, Boolean);
        let data = mTheCoffeeShop.findOne(theCoffeeID);
        if (!this.userId && data.owner === this.userId) {
            throw new Meteor.Error('not-permission');
        }
        mTheCoffeeShop.update(theCoffeeID, {$set: {public: statusPublic}})
    },
    'TheCoffeeShop.remove'(theCoffeeID) {
        check(theCoffeeID, String);
        if (!this.userId && data.owner === this.userId) {
            throw new Meteor.Error('not-permission');
        }
        mTheCoffeeShop.remove(theCoffeeID)
    }
});



