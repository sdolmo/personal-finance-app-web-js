export default function Nav(props) {
    let heading = props.heading;
    return (
        <>
            <nav>
                <h3>{heading}</h3>
                <ul>
                    <li>⚙</li>
                </ul>
            </nav>
        </>
    )
}
