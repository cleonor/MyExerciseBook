import React from 'react';
import ButtonComponent from './buttonComponent'

class Exercise1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { actualNumber: 4 };
    }

    changeValueOneMore = (value) => {
        this.setState({
            actualNumber: this.state.actualNumber + value
        })
    }

    changeValueOneLess() {
        this.changeValueOneMore(-1)
    }

    render() {
        return (
            <div>
                <h2>
                    Actual number: {this.state.actualNumber}
                </h2>

                <ButtonComponent
                    className={"subButton"}
                    onClick={this.changeValueOneLess.bind(this)}
                    title={"-1"}
                />

                <ButtonComponent
                    className={"summButton"}
                    onClick={() => this.changeValueOneMore(1)}
                    title={"+1"}
                />
            </div >
        )
    }
};

export default Exercise1;