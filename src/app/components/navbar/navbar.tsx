import { FunctionComponent } from "react";
import "./navbar.css";

interface NavBarProps {
    
}
 
const NavBar: FunctionComponent<NavBarProps> = () => {
    return (  
        <div className="nav d-flex justify-content-between align-items-center p-5">
            <div>J</div>
            <div className="d-flex mod-div">
                <div className="mod">About me</div>
                <div className="mod">Modules</div>
                <div className="mod">Projects</div>
            </div>
        </div>
    );
}
 
export default NavBar;