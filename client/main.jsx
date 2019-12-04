import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import App from '/imports/ui/App';
import "./main.css";
/**
 * Account login with ui meteor
 */
// import '../imports/startup/accounts-config.js';
/**
 * END --
 */

Meteor.startup(() => {
    render(<App/>, document.getElementById('render-target'));
});
