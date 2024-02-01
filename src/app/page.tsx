import Image from "next/image";
import NavBar from "./components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

export default function Home() {
    return (
        <main className="container">
            <div>
                <NavBar></NavBar>
            </div>
            <section id="about_us p-5">
                <div className="about-us">
                    <div className="card about-me">
                        <div className="card-header" style={{ backgroundColor: "transparent" }}>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle text-danger"/>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle text-warning"/>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle" style={{ color: "lightgreen" }}/>
                            </div>
                        </div>
                        <div className="card-body">
<code>
    <pre>
        {
            `const Jonathan = () => {
    return (
        <div>
            <p>
                My name is Jonathan Lam.
                I am a 25 years old.
                I graduated in engineering with a first class honors...
                But I am a full time fullstack engineer eversince graduated.`}
                <a href="#myStory" style={{ textDecoration:"none", color:"white"}}>
                    {
                    `
                <a href="#myStory">Click here to view my story.</a>`
                    }
                </a>
                {`
            </p>
        </div>
    )
}`
}
    </pre>
</code>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
