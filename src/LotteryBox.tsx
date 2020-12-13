import React from "react";
import LotteryItem from "./LotteryItem";

const numbers = [...Array(45).keys()];

export default class LotteryBox extends React.Component<
    LotteryBoxProps,
    LotteryBoxState
> {
    constructor(props: LotteryBoxProps) {
        super(props);
        this.state = {
            number: [0, 0, 0, 0, 0, 0, 0],
            effect: false,
        };
    }

    randomize = () => {
        if (!this.state.effect) {
            const numberCopy = numbers.map((x) => x);
            const arr = [];
            for (let i = 0; i <= 7; i++) {
                const random = Math.floor(
                    Math.random() * (numberCopy.length - 1)
                );
                arr.push(numberCopy[random] + 1);
                numberCopy.splice(random, 1);
            }
            this.setState({ number: arr, effect: true });
            setTimeout(() => {
                this.setState({ effect: false });
            }, 8000);
        }
    };

    render() {
        return (
            <>
                <div id="numbers">
                    <LotteryItem
                        index="0"
                        color="blue"
                        number={this.state.number[0]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="1"
                        color="blue"
                        number={this.state.number[1]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="2"
                        color="blue"
                        number={this.state.number[2]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="3"
                        color="red"
                        number={this.state.number[3]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="4"
                        color="red"
                        number={this.state.number[4]}
                        decrypting={this.state.effect}
                    />
                    <LotteryItem
                        index="5"
                        color="grey"
                        number={this.state.number[5]}
                        decrypting={this.state.effect}
                    />
                    <div className="plus">+</div>
                    <LotteryItem
                        index="6"
                        color="bonus"
                        number={this.state.number[6]}
                        decrypting={this.state.effect}
                    />
                </div>
                <div>
                    <button
                        id="btn"
                        className={this.state.effect ? "hide" : ""}
                        onClick={this.randomize}
                    >
                        추첨!
                    </button>
                </div>
            </>
        );
    }
}
