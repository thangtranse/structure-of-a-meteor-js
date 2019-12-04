import React, {Component} from 'react';
import Hello from './Hello.jsx';
import Info from './Info.jsx';
import CoffeeShop from './CoffeeShop.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import Dice from './components/Dice';
import UserLogin from './components/UserAccept';


class App extends Component {

    render() {

        return (
            <div>
                <UserLogin/>



                <Dice/>

                {/*<AccountsUIWrapper/>*/}
                <div style={{textAlign: "Center"}}>
                    <h1>Welcome to Meteor - Basic !</h1>
                </div>
                <CoffeeShop/>
                <Hello/>
                <Info/>
            </div>
        );
    }

}

export default App;
