import Icons from '../icons';

export default function Nav(props) {
    let heading = props.heading;

    return (
        <>
            <nav>
                <button className="icon-menu" onClick={()=> props.onMenuClick()}>
                    <img className="icon" src={Icons.menu} alt="menu" />
                </button>
                <h3>{heading}</h3>
                <ul>
                    <li><img className="icon" src={Icons.settings} alt="settings" /></li>
                </ul>
            </nav>
        </>
    )
}
