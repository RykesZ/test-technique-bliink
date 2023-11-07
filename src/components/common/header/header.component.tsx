import logo from "../../../assets/android-chrome-512x512.png"


export const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo CNN" data-testid="logo"/>
            <span className="burgerMenu" data-testid="burgerMenu">&#9776;</span>
            <span className="tab" data-testid="tab1">US</span>
            <span className="tab" data-testid="tab2">World</span>
            <span className="tab" data-testid="tab3">Politics</span>
            <span className="tab" data-testid="tab4">Business</span>
            <span className="tab" data-testid="tab5">Opinion</span>
            <span className="tab" data-testid="tab6">Health</span>
            <span className="tab" data-testid="tab7">Entertainment</span>
            <span className="tab" data-testid="tab8">Style</span>
            <span className="tab" data-testid="tab9">Travel</span>
            <span className="tab" data-testid="tab10">Sports</span>
            <span className="tab" data-testid="tab11">Video</span>
        </div>
    )
}