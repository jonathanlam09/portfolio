import { FunctionComponent } from "react";
import "./navbar.css";

interface NavBarProps {
    
}
 
const NavBar: FunctionComponent<NavBarProps> = () => {
    return (  
        <div className="nav d-flex justify-content-between align-items-center p-5">
            <div>J</div>
            <div className="d-flex mod-div">
                <div className="mod"><a href="#myStory" style={{ "color": "white", "textDecoration": "none" }}><code>My Story</code></a></div>
                <div className="mod"><a href="#workExperiences" style={{ "color": "white", "textDecoration": "none" }}><code>Work Experiences</code></a></div>
                <div className="mod"><a href="#achievements" style={{ "color": "white", "textDecoration": "none" }}><code>Achievements</code></a></div>
                <div className="mod"><a href="#projects" style={{ "color": "white", "textDecoration": "none" }}><code>Projects</code></a></div>
                <div className="mod"><a href="#contactMe" style={{ "color": "white", "textDecoration": "none" }}><code>Contact Me</code></a></div>
            </div>
        </div>
    );
}
 
export default NavBar;