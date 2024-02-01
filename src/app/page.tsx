import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

export default function Home() {
    return (
        <main className="container">
            <div>
                <NavBar></NavBar>
            </div>
            <section className="section" id="introduction">
                <div className="introduction">
                    <div className="card code-card introduction-card">
                        <div className="card-header" style={{ backgroundColor: "transparent" }}>
                            <div className="d-flex" style={{ fontSize: "12px" }}>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle text-danger"/>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle text-warning"/>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle" style={{ color: "lightgreen" }}/>
                            </div>
                        </div>
                        <div className="card-body">
                            <code>
                                <pre>
                                <span className="html">const</span>
                                <span className="object"> Introduction</span>
                                <span className="export"> = </span>
                                <span className="function">()</span>
                                <span className="html"> =&gt; </span>
                                <span className="function">&#123;</span>
                                <div>
                                    <span className="export tab1">return &#40;</span>
                                </div>
                                <div>
                                    <span className="html-tag tab2">{"<"}
                                    </span>
                                    <span className="html">{"div"}</span>
                                    <span className="html-tag">{">"}</span>
                                </div>
                                <div>
                                    <span className="html-tag tab3">{"<"}</span>
                                    <span className="html">p</span>
                                    <span className="html-tag">{">"}</span>
                                </div>
                                <div className="text-white">
                                    <div className="tab4">
                                        My name is Jonathan Lam. 25 years old and married.
                                        I graduated in Mechatronics engineering with a first class honor 
                                        but I became a full time fullstack engineer eversince graduated. 
                                        <br></br>
                                        <br></br>
                                        At this point you are probably wondering why did I transitioned into software engineering right? 
                                        Don't worry. I got that a lot. I got you tho. 
                                    </div>
                                    <br></br>
                                    <div className="tab4">
                                        <br></br>
                                        <a href="#myStory" style={{ textDecoration:"none", color:"white"}}>
                                            <span className="html-tag">{"<"}</span>
                                            <span className="html">{"a "}</span>
                                            <span className="attributes">{"href"}</span>
                                            <span className="export">{"="}</span>
                                            <span className="string">"#myStory"</span>
                                            <span className="html-tag">{">"}</span>
                                            <span className="string">{"Click here to view my story."}</span>
                                            <span className="html-tag">{"</"}</span>
                                            <span className="html">{"a"}</span>
                                            <span className="html-tag">{">"}</span>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <span className="html-tag tab3">{"</"}</span>
                                    <span className="html">p</span>
                                    <span className="html-tag">{">"}</span>
                                </div>
                                <div>
                                    <span className="html-tag tab2">{"</"}</span>
                                    <span className="html">div</span>
                                    <span className="html-tag">{">"}</span>
                                </div>
                                <div>
                                    <span className="export tab1">{")"}</span>
                                </div>
                                <div>
                                    <span className="function">{"}"}</span>
                                </div>
                            </pre>
                            </code>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100%", paddingLeft: "3rem" }}>
                    <FontAwesomeIcon icon={faCheck} className="p-1 fas fa-circle text-white"/>
                    <code className="text-white">Introduction</code>
                </div>
            </section>

            <section className="section" id="myStory">
                <div className="my-story">
                    <div className="card code-card my-story-card">
                        <div className="card-header" style={{ backgroundColor: "transparent" }}>
                            <div className="d-flex" style={{ fontSize: "12px" }}>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle text-danger"/>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle text-warning"/>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle" style={{ color: "lightgreen" }}/>
                            </div>
                        </div>
                        <div className="card-body">
                            <code>
                                <pre>
                                <span className="html">const</span>
                                <span className="object"> MyStory</span>
                                <span className="export"> = </span>
                                <span className="function">()</span>
                                <span className="html"> =&gt; </span>
                                <span className="function">&#123;</span>
                                <div>
                                    <span className="export tab1">return &#40;</span>
                                </div>
                                <div>
                                    <span className="html-tag tab2">{"<"}
                                    </span>
                                    <span className="html">{"div"}</span>
                                    <span className="html-tag">{">"}</span>
                                </div>
                                <div>
                                    <span className="html-tag tab3">{"<"}</span>
                                    <span className="html">p</span>
                                    <span className="html-tag">{">"}</span>
                                </div>
                                <div className="text-white">
                                    <div className="tab4">
                                        At first I was not a big fan of coding. In fact, I never thought that I could code.
                                        Even when it came to my c++ exam, I had to memorize codes.
                                        However, during my first internship, a friend of mine somehow managed to convince me to join an innovation competition.
                                        Long story short, our team won silver award.
                                        We used Unity Engine to create an education augmented reality application.
                                        Due to my lack of experience in programming, 
                                        I was forced to put up countless sleepless nights. 
                                        Plus, C# is just too much for beginners.
                                        <br></br>
                                        <br></br>
                                        Despite all the sufferings, the satisfaction after you completed a function or made something works is truly remarkable.
                                        That is how my interest in programming sparked. Since then, I started self-learning simple HTML, CSS and Javascript. 
                                        As I learn more about web development, the more I fall in love with it. At this point I am seriously thinking about permanently transitioning into software development. 
                                        Just one problem, I wasn't sure if i was good enough.
                                        <br></br>
                                        <br></br>
                                        I was already ending my third year of University. One more year to go before I start to wear my big boy pants. 
                                        I fear I don't have enough time to learn enough to secure a job in the software industry. 
                                        Thus, I started waking up at 4am to self learn to make up for those loss time.
                                        <br></br>
                                        <br></br>
                                        Fast forward, I managed to join a software house in my second internship. 
                                        With the knowledge I gained there, I won first place in another programming competition.
                                        I was also offered a full time position after my internship due to my flying color performance. 
                                        I graduated my degree with first class honors and got an offer in Atlas Data Network as a fullstack engineer.
                                        Now I am about 4 years in since I started programming and going strong.
                                        <br></br>
                                        <br></br>
                                        Till this date I still wake up early to self learn. 
                                        Hitting the working industry make me realize truly it is important to put in time to self learn because 
                                        it is nearly impossible to be better without constantly questioning and experimenting solutions.
                                    </div>
                                    <br></br>
                                    <div className="tab4">
                                        <br></br>
                                        <a href="#workExperiences" style={{ textDecoration:"none", color:"white"}}>
                                            <span className="html-tag">{"<"}</span>
                                            <span className="html">{"a "}</span>
                                            <span className="attributes">{"href"}</span>
                                            <span className="export">{"="}</span>
                                            <span className="string">"#workExperiences"</span>
                                            <span className="html-tag">{">"}</span>
                                            <span className="string">{"Click here to view my work experiences."}</span>
                                            <span className="html-tag">{"</"}</span>
                                            <span className="html">{"a"}</span>
                                            <span className="html-tag">{">"}</span>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <span className="html-tag tab3">{"</"}</span>
                                    <span className="html">p</span>
                                    <span className="html-tag">{">"}</span>
                                </div>
                                <div>
                                    <span className="html-tag tab2">{"</"}</span>
                                    <span className="html">div</span>
                                    <span className="html-tag">{">"}</span>
                                </div>
                                <div>
                                    <span className="export tab1">{")"}</span>
                                </div>
                                <div>
                                    <span className="function">
                                        {"}"}</span>
                                </div>
                            </pre>
                            </code>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100%", paddingLeft: "3rem" }}>
                    <FontAwesomeIcon icon={faCheck} className="p-1 fas fa-circle text-white"/>
                    <code className="text-white">My Story. What's yours?</code>
                </div>
            </section>
            <section className="section" id="workExperiences">
                <div className="work-experience">
                    <div className="card code-card work-experience-card">
                        <div className="card-header" style={{ backgroundColor: "transparent" }}>
                            <div className="d-flex" style={{ fontSize: "12px" }}>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle text-danger"/>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle text-warning"/>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle" style={{ color: "lightgreen" }}/>
                            </div>
                        </div>
                        <div className="card-body">
                            <code>
                                <pre>
                                    <span className="html">const</span>
                                    <span className="object"> WorkExperiences</span>
                                    <span className="export"> = </span>
                                    <span className="function">&#91;</span>
                                    <div>
                                        <span className="export tab1">{"{"}</span>
                                    </div>
                                    <div>
                                        <span className="tab2 text-white">company:&nbsp;</span>
                                        <span className="string">"Atlas Data Network"</span>
                                    </div>
                                    <div>
                                        <span className="tab2 text-white">location:&nbsp;</span>
                                        <span className="string">"Boat Quay, Singapore"</span>
                                    </div>
                                    <div>
                                        <span className="tab2 text-white">position:&nbsp;</span>
                                        <span className="string">"Full stack PHP developer (remote)"</span>
                                    </div>
                                    <div>
                                        <span className="tab2 text-white">joinedDate:&nbsp;</span>
                                        <span className="string">"2022-05-01"</span>
                                    </div>
                                    <div>
                                        <span className="tab2 text-white">endDate:&nbsp;</span>
                                        <span className="string">"2023-01-31"</span>
                                    </div>
                                    <div>
                                        <span className="tab2 text-white">reasonLeaving:&nbsp;</span>
                                        <span className="string">"New offer includes retirement savings"</span>
                                    </div>
                                    <div>
                                        <span className="tab2 text-white">description:&nbsp;</span>
                                        <span className="function">{"["}</span>
                                    </div>
                                    <div  className="tab3">
                                        <div>
                                            <span className="string">"PHP based mainly using Laravel or Codeigniter framework."</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">"Create and develop projects based on clients requirements."</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Involved in projects related to BMW SG, Porsche SG and Mini Cooper SG sales system."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Essentially create a software that assist them to custom the parts of the car with dynamic pricing and also include the COE bidding process."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Integrate third-party API such as SingPass, Docusign, Zoom, and more."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Also involved in several other clients in creating sales and finance system."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Also involved in several other clients in creating sales and finance system."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Using Git to manage branches."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Involved in securing all sites such as checking SSL, cookies flag, SQL injection attack, XSS attack and more."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "UAT process with clients."
                                            </span>
                                        </div>
                                        
                                    </div>
                                    <div>
                                        <span className="function tab2">{"]"}</span>
                                    </div>
                                    <div>
                                        <span className="export">
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            {"}"}
                                        </span>
                                        <span className="text-white">, &nbsp;</span>
                                    </div>
                                    <div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="export">{"{"}</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">company:&nbsp;</span>
                                        <span className="string">"Cashbridge"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">location:&nbsp;</span>
                                        <span className="string">"Bukit Bintang, Kuala Lumpur"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">position:&nbsp;</span>
                                        <span className="string">"Full stack PHP developer"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">joinedDate:&nbsp;</span>
                                        <span className="string">"2023-02-01"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">endDate:&nbsp;</span>
                                        <span className="string">"Currently work here"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">description:&nbsp;</span>
                                        <span className="function">{"["}</span>
                                    </div>
                                    <div className="tab3">
                                        <div>
                                            <span className="string">"Phalcon PHP framework."</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">"Development and optimize in-house system process."</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Involved in database and functional design in creating a more efficient and scalable process."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Developed automated funding process and managed to increase the work efficiency by at least 40%."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Developed a digital wallet and credit system."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Integrate third-party API for necessary processes."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Overseeing server git system."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Overseeing all git actions and deployments."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "CI/CD."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">{"]"}</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"}"}</span>
                                        <span className="function">{"]"}</span>
                                    </div>
                                </pre>
                            </code>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100%", paddingLeft: "3rem" }}>
                    <FontAwesomeIcon icon={faCheck} className="p-1 fas fa-circle text-white"/>
                    <code className="text-white">Trust the process.</code>
                </div>
            </section>
            <section className="section" id="achievements">
                <div className="achievements">
                    <div className="card code-card achievement-card">
                        <div className="card-header" style={{ backgroundColor: "transparent" }}>
                            <div className="d-flex" style={{ fontSize: "12px" }}>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle text-danger"/>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle text-warning"/>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle" style={{ color: "lightgreen" }}/>
                            </div>
                        </div>
                        <div className="card-body">
                            <code>
                                <pre>
                                    <span className="html">const</span>
                                    <span className="object"> Achievements</span>
                                    <span className="export"> = </span>
                                    <span className="function">&#91;</span>
                                    <div><span className="export tab1">{"{"}</span></div>
                                    <div>
                                        <span className="text-white tab2">name:&nbsp;</span>
                                        <span className="string">"ACEIC (Automation and Control Enhancing Innovation Competition)"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year:&nbsp;</span>
                                        <span className="string">"2020"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">description:&nbsp;</span>
                                        <span className="function">{"["}</span>
                                    </div>
                                    <div className="tab3">
                                        <div>
                                            <span className="string">"Silver Award"</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Invented an Augmented Reality Educational System application utilizing Unity Engine and Vuforia AR engine."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "The application is equipped with object detection. The detected object will have its own object model."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Upon successful detection, the model will show on the screen and user will be able to disassemble the object
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">{"]"}</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"}"}</span>
                                        <span className="text-white">, &nbsp;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"{"}</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name:&nbsp;</span>
                                        <span className="string">"gPBL (Global Project Based Learning)"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year:&nbsp;</span>
                                        <span className="string">"2021"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">description:&nbsp;</span>
                                        <span className="function">{"["}</span>
                                    </div>
                                    <div className="tab3">
                                        <div>
                                            <span className="string">
                                                "A project based learning workshop hosted by Japan Shibaura Institute of Technology University."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Teamed up with University members from Japan, Korea, Taiwan and Vietnam to create a global server application."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Created an IoT home security system using Arduino Uno and sensors connected to a server and mobile application."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Upon successful detection from the sensors, message will be sent to the mobile application of the user."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">{"]"}</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"}"}</span>
                                        <span className="text-white">,</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"{"}</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name:&nbsp;</span>
                                        <span className="string">
                                            "Capstone Project"
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year:&nbsp;</span>
                                        <span className="string">
                                            "2021"
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">description:&nbsp;</span>
                                        <span className="function">{"["}</span>
                                    </div>
                                    <div className="tab3">
                                        <div>
                                            <span className="string">"Best capstone project award."</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Created a food delivery robot that is meant to be deployed in a quarantine center to reduce the needs of human physical contact."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "The delivery robot is incorporated with a Computer Vision Optical Character Recognition (OCR) application to detect the patient's bed number and deliver the food to the patient."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">{"]"}</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"}"}</span>
                                        <span className="text-white">, &nbsp;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"{"}</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name:&nbsp;</span>
                                        <span className="string">"NOTT-A-CODE Competition"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year:&nbsp;</span>
                                        <span className="string">"2021"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">description:&nbsp;</span>
                                        <span className="function">{"["}</span>
                                    </div>
                                    <div className="tab3">
                                        <div>
                                            <span className="string">"Champion."</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Using .NET Core as backend, Angular 12 as frontend."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "To create a food ordering chatbot."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "The chatbot is created using Artificial Intelligence Natural Language Processing."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "The chatbot is connected to a MySQL database where the ordering menu is stored."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Upon given input, the chatbot will query the database if required, filter the results based on detected intent."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Web-sockets is also implemented for live chat function."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Confirmation orders will redirect user to transaction page to perform transaction"
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">{"]"}</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"}"}</span>
                                        <span className="text-white">, &nbsp;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"{"}</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name:&nbsp;</span>
                                        <span className="string">"Innovate Malaysia Design Competition"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year:&nbsp;</span>
                                        <span className="string">"2023"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">description:&nbsp;</span>
                                        <span className="function">{"["}</span>
                                    </div>
                                    <div className="tab3">
                                        <div>
                                            <span className="string">"To create a quadruple AIoT(AI+IoT) green system."</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "Systems included are waste recognition system, composting system, sowing and gardening system."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "To apply Computer Vision using fast R-CNN for object detection in the waste recognition system."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "To deploy the model using Intel OpenVINO inference toolkit for a smoother performance."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                "To apply Support Vector Machine prediction model in composting system to estimate the compost completion duration."
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">{"]"}</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"}"}</span>
                                        <span className="function">{"]"}</span>
                                    </div>
                                </pre>
                            </code>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "100%", paddingLeft: "3rem" }}>
                    <FontAwesomeIcon icon={faCheck} className="p-1 fas fa-circle text-white"/>
                    <code className="text-white">Glory to God.</code>
                </div>
            </section>
            <section className="section" id="projects">
                <div className="projects">
                    <div className="card code-card project-card">
                        <div className="card-header" style={{ backgroundColor: "transparent" }}>
                            <div className="d-flex" style={{ fontSize: "12px" }}>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle text-danger"/>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle text-warning"/>
                                <FontAwesomeIcon icon={faCircle} className="p-1 fas fa-circle" style={{ color: "lightgreen" }}/>
                            </div>
                        </div>
                        <div className="card-body">
                            <code>
                                <pre>
                                    <span className="html">const</span>
                                    <span className="object"> Projects</span>
                                    <span className="export"> = </span>
                                    <span className="function">&#91;</span>
                                    <div><span className="export tab1">{"{"}</span></div>
                                    <div>
                                        <span className="text-white tab2">name:&nbsp;</span>
                                        <span className="string">"Station R Games - Twelve Floor"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year:&nbsp;</span>
                                        <span className="string">"2022"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">clientName:&nbsp;</span>
                                        <span className="string">"Ray Low"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">status:&nbsp;</span>
                                        <span className="string">"COMPLETED"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">website:&nbsp;</span>
                                        <span className="string">"Expired"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">remarks:&nbsp;</span>
                                        <span className="function">{"["}</span>
                                    </div>
                                    <div>
                                        <span className="string tab3" style={{ whiteSpace: "pre-line" }}>
                                            "Ray is a friend of mine from University. 
                                            During my time of transitioning into web development, 
                                            He approached me to create a website for his 2D game that he developed.
                                            This project was build using NodeJS. Nothing too complex. 
                                            Not too many API involved as well. This project was hosted on Heroku during the eco dyno time which was free. 
                                            However, Heroku has removed its free tier. 
                                            Thus the site is no longer available."
                                        </span>
                                    </div>
                                    <div>
                                        <span className="function tab2">{"]"}</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"}"}</span>
                                        <span className="text-white">, &nbsp;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"{"}</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name:&nbsp;</span>
                                        <span className="string">"Crossover Point Website"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year:&nbsp;</span>
                                        <span className="string">"2023"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">clientName:&nbsp;</span>
                                        <span className="string">"Crossover Point "</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">status:&nbsp;</span>
                                        <span className="string">"COMPLETED"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">website:&nbsp;</span>
                                        <span className="string"><a href="https://crossoverpoint.org.my" className="string" target="_blank" style={{ textDecoration: "none" }}>{`"https://crossoverpoint.org.my"`}</a></span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">remarks:&nbsp;</span>
                                        <span className="function">{"["}</span>
                                    </div>
                                    <div>
                                        <span className="string tab3">
                                            "Crossover Point is a church organization. 
                                            Crossover Point were in the midst of transitioning platform. 
                                            Thus, I was approached to create a website for them.
                                            The site was built on Laravel 9 monolithically."
                                        </span>
                                    </div>
                                    <div>
                                        <span className="function tab2">{"]"}</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"}"}</span>
                                        <span className="text-white">,</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"{"}</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name:&nbsp;</span>
                                        <span className="string">"Crossover Point Admin Portal"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year:&nbsp;</span>
                                        <span className="string">"2023"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">clientName:&nbsp;</span>
                                        <span className="string">"Crossover Point"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">status:&nbsp;</span>
                                        <span className="string">"COMPLETED"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">website:&nbsp;</span>
                                        <span className="string"><a href="https://admin.crossoverpoint.org.my" className="string" target="_blank" style={{ textDecoration: "none" }}>{`"https://admin.crossoverpoint.org.my"`}</a></span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">remarks:&nbsp;</span>
                                        <span className="function">{"["}</span>
                                    </div>
                                    <div>
                                        <span className="string tab3" style={{ whiteSpace: "pre-line" }}>
                                            "Crossover Point admin portal is a the admin portal for the leaders of the church.
                                            This admin portal is also built on Laravel 9 monolithically. 
                                            There are several modules which are audit logs, permission, attendance, scheduling, events, sermons, users and members. "
                                        </span>
                                    </div>
                                    <div>
                                        <span className="function tab2">{"]"}</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"}"}</span>
                                        <span className="text-white">,</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"{"}</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name:&nbsp;</span>
                                        <span className="string">"Manager"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year:&nbsp;</span>
                                        <span className="string">"2023"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">clientName:&nbsp;</span>
                                        <span className="string">"self"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">status:&nbsp;</span>
                                        <span className="string">"PENDING"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">website:&nbsp;</span>
                                        <span className="string">"localhost"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">remarks:&nbsp;</span>
                                        <span className="function">{"["}</span>
                                    </div>
                                    <div className="tab3">
                                        <span className="string">
                                            "I created this project on the side with an intention to sell it. 
                                            Manager is a project management tool. Reason I started this is because I noticed there is something 
                                            that is lacking in all project management tools such as monday.com, trello, lark, notion and more. However, this hole is not easy to fill without AI. 
                                            Fortunately, I have some AI background. This project is build on Vue3 and Laravel. 
                                            This project will be taking awhile to complete. Though the core module is completed in order to compete with in the industry 
                                            I will need to plan out the marketing and also include some submodules as subscription benefits."
                                        </span>
                                    </div>
                                    <div>
                                        <span className="function tab2">{"]"}</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"}"}</span>
                                        <span className="text-white">, &nbsp;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"{"}</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name:&nbsp;</span>
                                        <span className="string">"Sunway Medical Hospital Sub System"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year:&nbsp;</span>
                                        <span className="string">"2024"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">clientName:&nbsp;</span>
                                        <span className="string">"Sunway Medical"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">status:&nbsp;</span>
                                        <span className="string">"PENDING"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">website:&nbsp;</span>
                                        <span className="string">"-"</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">remarks:&nbsp;</span>
                                        <span className="function">{"["}</span>
                                    </div>
                                    <div className="tab3">
                                        <span className="string">
                                            "I am a friend with a Doctor in Sunway Medical and she is aware that I am in the IT industry.
                                            As Sunway launched a new system, they have some issues with some of their procedure and wish to digitalize the process.
                                            I was approached to give a demo if I am able to accomplish this. I managed to complete the demo and is currently in talks for the deal."
                                        </span>
                                    </div>
                                    <div>
                                        <span className="function tab2">{"]"}</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">{"}"}</span>
                                        <span className="function">{"]"}</span>
                                    </div>
                                </pre>
                            </code>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center" style={{ height: "100%", paddingLeft: "3rem" }}>
                    <FontAwesomeIcon icon={faCheck} className="p-1 fas fa-circle text-white"/>
                    <code className="text-white">This is a big world. Don't settle with walking. Fly.</code>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
}
