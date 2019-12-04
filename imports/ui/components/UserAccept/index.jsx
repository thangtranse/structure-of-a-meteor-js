import React, {Component} from 'react';


class UserAccept extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    _onChange = (e) => {
        let {username, password} = this.state;
        console.log(e.target.name)
        switch (e.target.name) {
            case 'username':
                username = e.target.value;
                break;
            case 'password':
                password = e.target.value;
                break
        }
        this.setState({
            ...this.state,
            username,
            password
        })
    };

    render() {
        return (
            <React.Fragment>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <input name={"username"} onChange={this._onChange} placeholder={"Email"} type={"email"}
                           value={this.state.username}/>
                    <input name={"password"} onChange={this._onChange} placeholder={"Password"} type={"password"}
                           value={this.state.password}/>
                    <button>Login</button>
                </div>
            </React.Fragment>
        );
    }
}

export default UserAccept;
