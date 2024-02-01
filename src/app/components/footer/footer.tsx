import { FunctionComponent } from "react";

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {
    return ( 
        <footer style={{ color:"white", borderTop: "1px solid" }}>
            <code>
                <span style={{ color: "lightgrey" }}>
                    {"Made with </> and <3 by Jonathan"}
                </span>
            </code>
        </footer> 
    );
}
 
export default Footer;