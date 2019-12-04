import React, {Component} from 'react';
import {mTheCoffeeShop} from '../api/CoffeeShop';
import {Meteor} from "meteor/meteor";
import {withTracker} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

class CoffeeShop extends Component {
    getTask = () => {
        return [
            {_id: 1, name: "The Coffee House VN"},
            {_id: 2, name: "The HighLands Coffee"},
            {_id: 3, name: "Trung Nguyen Cofffee"}
        ]
    };

    renderTask = () => {
        return this.getTask().map(data => (
            <p>{data.name}</p>
        ))
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        let dom = ReactDOM.findDOMNode(this.refs.nameTheCoffe);
        let text = dom.value.trim();
        Meteor.call("TheCoffeeShop.insert", text, new Date());
        dom.value = "";
    };

    onClickDeleteItem = e => {
        e.preventDefault();
        Meteor.call('TheCoffeeShop.remove', e.target.name)
    };

    togglePublish = (e) => {
        let dataItem = this.props.theCoffeeShop.filter(data => data._id === e.target.name);
        if (dataItem && dataItem.length > 0) {
            dataItem = dataItem[0];
            Meteor.call('TheCoffeeShop.setPublic', dataItem._id, !dataItem.public);
        }
    };

    render() {
        return (
            <div>
                <h1>Your Coffee, Maybe You Like:!</h1>
                {this.renderTask()}
                <hr/>
                {
                    this.props.currentUser ? (
                        <div>
                            <h1 style={{textAlign: "center"}}>Hello {this.props.currentUser.username}</h1>
                            <h1>List The Coffee insert by you:</h1>
                            {
                                this.props.theCoffeeShop.map(data => {
                                    return (
                                        <div className={"items"} key={data._id}>
                                            <p>The coffee: {data.name}</p>
                                            &nbsp;
                                            <p>Username created: {data.username}</p>
                                            &nbsp;
                                            <button name={data._id}
                                                    onClick={this.togglePublish.bind(this)}>
                                                {
                                                    data.public ? "Ẩn" : "Hiện"
                                                }
                                            </button>
                                            <button name={data._id} onClick={this.onClickDeleteItem.bind(this)}>Delete
                                            </button>
                                        </div>
                                    )
                                })
                            }
                            <hr/>
                            <div style={{
                                display: "flex",
                                alignItems: "flex-end",
                                flexDirection: "column"
                            }}>
                                <h1>Insert your coffee shops:</h1>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <input
                                        className={"input"}
                                        type={"text"}
                                        ref={"nameTheCoffe"}
                                        placeholder={"enter name coffee"}
                                    />
                                </form>
                            </div>
                        </div>
                    ) : <p style={{textAlign: "center"}}>{"You must login to use"}</p>
                }
                <hr/>
                <br/>
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('TheCoffeeShop');
    return {
        theCoffeeShop: mTheCoffeeShop.find({}).fetch(),
        currentUser: Meteor.user(),
    }
})(CoffeeShop);
