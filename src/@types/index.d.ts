interface LotteryBoxProps {}

interface LotteryBoxState {
    number: FixedLengthArray<number, 7>;
    effect: boolean;
}

interface LotteryItemProps {
    index: string;
    number: number;
    decrypting: boolean;
    color: string;
}

interface LotteryItemState {
    decryptingDone: string;
    number: number | string;
}
