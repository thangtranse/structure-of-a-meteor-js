# METEOR - ENV

    https://www.meteor.com/install

# METEOR - PROJECT

### 1. SETUP:
#### 1.1 Installs Project - React App:

    meteor create --react app-name
    meteor npm install --save react react-dom classnames
    meteor remove blaze-html-templates 
    meteor add static-html
    meteor add react-meteor-data

#### 1.2 Security Meteor- React App:
    
    meteor remove insecure

#### 1.3 Add Account - React App:

    meteor add accounts-ui accounts-password
    
#### 1.4 Filtering Data

    meteor remove autopublish
    
#### 1.5 Database Mongo Schema

    meteor add aldeed:collection2-core
    meteor npm i -S simpl-schema
    
##### 1.5.1 Relations (Grapher)
    
    meteor add cultofcoders:grapher

#### 1.6 Testing
    
    meteor add practicalmeteor:mocha
    meteor npm i --save-dev chai sinon
    
    // package.json
    {
      "scripts": {
         "test": "meteor test --driver-package practicalmeteor:mocha --port 3050"
      }
    }
    
    

### 2. Application Structure

    imports/
    -- startup/
    ---- client/
    ------ index.js                 # import client startup through a single index entry point
    ------ routes.js                # set up all routes in the app
    ------ useraccounts-configuration.js # configure login templates
    ---- server/
    ------ fixtures.js              # fill the DB with example data on startup
    ------ index.js                 # import server startup through a single index entry point
    
    -- api/                         # contains the rest
    ---- lists/                     # a unit of domain logic
    ------ server/
    -------- publications.js        # all list-related publications
    -------- publications.tests.js  # tests for the list publications
    ------ lists.js                 # definition of the Lists collection
    ------ lists.tests.js           # tests for the behavior of that collection
    ------ methods.js               # methods related to lists
    ------ methods.tests.js         # tests for those methods
    
    -- ui/
    ---- components/                # all reusable components in the application
                                    # can be split by domain if there are many
    ---- layouts/                   # wrapper components for behaviour and visuals
    ---- pages/                     # entry points for rendering used by the router
    
    client/
    -- main.js                      # client entry point, imports all client code
    
    server/
    -- main.js                      # server entry point, imports all server code

### 3 METHOD
#### 3.1 Method(or RPC)
    



# DOCUMENT

    1. https://www.meteor.com/tutorials
    2. https://www.meteor-tuts.com/
    3. https://docs.meteor.com/api
    4. https://guide.meteor.com/
    5. https://themeteorchef.com/
