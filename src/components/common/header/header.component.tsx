import logo from "../../../assets/android-chrome-512x512.png"


export const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo CNN"/>
            <span>US</span>
            <span>World</span>
            <span>Politics</span>
            <span>Business</span>
            <span>Opinion</span>
            <span>Health</span>
            <span>Entertainment</span>
            <span>Style</span>
            <span>Travel</span>
            <span>Sports</span>
            <span>Video</span>
        </div>
    )
}