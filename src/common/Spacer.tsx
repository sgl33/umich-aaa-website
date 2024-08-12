

export default function Spacer(props: {height: number}): JSX.Element {
    return (
        <div style={{height: `${props.height}px`}}></div>
    )
}