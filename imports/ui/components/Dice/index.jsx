import React, {Component} from 'react';


class Dice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faceValue: 0,
            face: "&#x2680;",
            rollCount: 1,
            isRolling: false,
        };
        this.DiceRoll = this.DiceRoll.bind(this);
        this.HandleDiceThrow = this.HandleDiceThrow.bind(this);
        this.GenerateRandomInt = this.GenerateRandomInt.bind(this);
    }

    GenerateRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    DiceRoll() {
        let faceValue = this.GenerateRandomInt(0, 5);
        this.setState({
            rollCount: this.state.rollCount - 1,
            isRolling: (this.state.rollCount > 0),
            faceValue: faceValue,
            face: "&#x" + String(2680 + faceValue) + ";"
        });
    }

    HandleDiceThrow() {
        if (this.state.isRolling) return;
        let val = this.GenerateRandomInt(5, 15);
        this.setState({rollCount: val});

        for (let i = 0; i <= val; i++) {
            setTimeout(this.DiceRoll, 250 * i);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center"
                }}>
                    <div onClick={this.HandleDiceThrow}
                         id="diceFace"
                         dangerouslySetInnerHTML={{__html: `${this.state.face}`}}
                         style={{fontSize: "120px"}}
                    />
                    <div onClick={this.HandleDiceThrow}
                         id="diceFace"
                         dangerouslySetInnerHTML={{__html: `${this.state.face}`}}
                         style={{fontSize: "120px"}}
                    />
                </div>
                <span>Dice Value: {this.state.faceValue + 1}</span> <br/>
                <span>Roll: {this.state.rollCount}</span> <br/>
            </React.Fragment>

        );
    }
}

export default Dice;
