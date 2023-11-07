import logo from "../../../assets/android-chrome-512x512.png"


export const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo CNN"/>
            <span className="burgerMenu">&#9776;</span>
            <span className="tab">US</span>
            <span className="tab">World</span>
            <span className="tab">Politics</span>
            <span className="tab">Business</span>
            <span className="tab">Opinion</span>
            <span className="tab">Health</span>
            <span className="tab">Entertainment</span>
            <span className="tab">Style</span>
            <span className="tab">Travel</span>
            <span className="tab">Sports</span>
            <span className="tab">Video</span>
        </div>
    )
}