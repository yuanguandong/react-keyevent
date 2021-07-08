interface KeyEventProps {
    events: {
        [key: string]: (p: any) => void;
    };
    needFocusing?: boolean;
    [key: string]: any;
}
declare const KeyEvent: (props: KeyEventProps) => JSX.Element;
export default KeyEvent;
