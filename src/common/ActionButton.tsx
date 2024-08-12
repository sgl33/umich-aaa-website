import "./ActionButton.css"


export default function ActionButton(props: {
    img: any, text: string, color: string, backgroundColor: string, 
    invertIconColor?: boolean, smallerIcon?: boolean, alt: string,
    onClick: () => void
}): JSX.Element {
    return (
        <button className="action-button" onClick={props.onClick} style={{
            backgroundColor: props.backgroundColor,
            color: props.color
        }}>
            <img src={props.img} alt={props.alt} 
                className={props.smallerIcon ? "smaller-icon" : ""}
            style={{
                filter: props.invertIconColor ? "invert(100%)" : "none",
            }}/>
            <span>{props.text}</span>
        </button>

    )
}