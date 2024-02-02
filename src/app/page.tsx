'use client';
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
    
    const toggleImage = () => {
        document.querySelectorAll(".img-src")?.forEach((el) => {
            el.classList.toggle("d-none");
        })
        document.querySelectorAll(".string-src")?.forEach((el) => {
            el.classList.toggle("d-none");
        })
    }

    return (
        <main className="container">
            <div>
                <NavBar></NavBar>
            </div>
            <section className="section" id="introduction">
                <div className="introduction d-flex justify-content-center">
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
                                <span className="export"> &#61; </span>
                                <span className="function">	&#40;&#41;</span>
                                <span className="html"> &#61;&gt; </span>
                                <span className="function">&#123;</span>
                                <div>
                                    <span className="export tab1">return &#40;</span>
                                </div>
                                <div>
                                    <span className="html-tag tab2">&lt;</span>
                                    <span className="html">div</span>
                                    <span className="html-tag">&gt;</span>
                                </div>
                                <div>
                                    <span className="html-tag tab3">&lt;</span>
                                    <span className="html">p</span>
                                    <span className="html-tag">&gt;</span>
                                </div>
                                <div className="text-white">
                                    <div className="tab4">
                                        My name is Jonathan Lam. 25 years old and married.
                                        I graduated in Mechatronics engineering with a first class honor 
                                        but I became a full time fullstack engineer eversince graduated. 
                                        <br></br>
                                        <br></br>
                                        At this point you are probably wondering why did I transitioned into software engineering right? 
                                        Don&#39;t worry. I got that a lot. I got you tho. 
                                    </div>
                                    <br></br>
                                    <div className="tab4">
                                        <br></br>
                                        <a href="#myStory" style={{ textDecoration:"none", color:"white"}}>
                                            <span className="html-tag">&lt;</span>
                                            <span className="html">{"a "}</span>
                                            <span className="attributes">{"href"}</span>
                                            <span className="export">&#61;</span>
                                            <span className="string">&#34;#myStory&#34;</span>
                                            <span className="html-tag">&gt;</span>
                                            <span className="string">Click here to view my story.</span>
                                            <span className="html-tag">&lt;&#47;</span>
                                            <span className="html">a</span>
                                            <span className="html-tag">&gt;</span>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <span className="html-tag tab3">&lt;&#47;</span>
                                    <span className="html">p</span>
                                    <span className="html-tag">&gt;</span>
                                </div>
                                <div>
                                    <span className="html-tag tab2">&lt;&#47;</span>
                                    <span className="html">div</span>
                                    <span className="html-tag">&gt;</span>
                                </div>
                                <div>
                                    <span className="export tab1">&#41;</span>
                                </div>
                                <div>
                                    <span className="function">&#125;</span>
                                </div>
                            </pre>
                            </code>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-5" style={{ height: "100%" }}>
                    <FontAwesomeIcon icon={faCheck} className="p-1 fas fa-circle text-white"/>
                    <code className="text-white">Introduction</code>
                </div>
            </section>

            <section className="section" id="myStory">
                <div className="my-story d-flex justify-content-center">
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
                                <span className="export"> &#61; </span>
                                <span className="function">()</span>
                                <span className="html"> &#61;&gt; </span>
                                <span className="function">&#123;</span>
                                <div>
                                    <span className="export tab1">return &#40;</span>
                                </div>
                                <div>
                                    <span className="html-tag tab2">{"<"}
                                    </span>
                                    <span className="html">{"div"}</span>
                                    <span className="html-tag">&gt;</span>
                                </div>
                                <div>
                                    <span className="html-tag tab3">{"<"}</span>
                                    <span className="html">p</span>
                                    <span className="html-tag">&gt;</span>
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
                                        Just one problem, I wasn&#39;t sure if i was good enough.
                                        <br></br>
                                        <br></br>
                                        I was already ending my third year of University. One more year to go before I start to wear my big boy pants. 
                                        I fear I don&#39;t have enough time to learn enough to secure a job in the software industry. 
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
                                            <span className="html-tag">&lt;</span>
                                            <span className="html">{"a "}</span>
                                            <span className="attributes">href</span>
                                            <span className="export">&#61;</span>
                                            <span className="string">&#34;#workExperiences&#34;</span>
                                            <span className="html-tag">&gt;</span>
                                            <span className="string">{"Click here to view my work experiences."}</span>
                                            <span className="html-tag">&lt;&#47;</span>
                                            <span className="html">a</span>
                                            <span className="html-tag">&gt;</span>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <span className="html-tag tab3">&lt;&#47;</span>
                                    <span className="html">p</span>
                                    <span className="html-tag">&gt;</span>
                                </div>
                                <div>
                                    <span className="html-tag tab2">&lt;&#47;</span>
                                    <span className="html">div</span>
                                    <span className="html-tag">&gt;</span>
                                </div>
                                <div>
                                    <span className="export tab1">&#41;</span>
                                </div>
                                <div>
                                    <span className="function">&#125;</span>
                                </div>
                            </pre>
                            </code>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-5" style={{ height: "100%" }}>
                    <FontAwesomeIcon icon={faCheck} className="p-1 fas fa-circle text-white"/>
                    <code className="text-white">My Story. What&#39;s yours?</code>
                </div>
            </section>
            <section className="section" id="workExperiences">
                <div className="work-experience d-flex justify-content-center">
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
                                    <span className="export"> &#61; </span>
                                    <span className="function">&#91;</span>
                                    <div>
                                        <span className="export tab1">&#123;</span>
                                    </div>
                                    <div>
                                        <span className="tab2 text-white">company&#58;&nbsp;</span>
                                        <span className="string">&#34;Atlas Data Network&#34;</span>
                                    </div>
                                    <div>
                                        <span className="tab2 text-white">location&#58;&nbsp;</span>
                                        <span className="string">&#34;Boat Quay, Singapore&#34;</span>
                                    </div>
                                    <div>
                                        <span className="tab2 text-white">position&#58;&nbsp;</span>
                                        <span className="string">&#34;Full stack PHP developer &#40;remote&#41;&#34;</span>
                                    </div>
                                    <div>
                                        <span className="tab2 text-white">joinedDate&#58;&nbsp;</span>
                                        <span className="string">&#34;2022-05-01&#34;</span>
                                    </div>
                                    <div>
                                        <span className="tab2 text-white">endDate&#58;&nbsp;</span>
                                        <span className="string">&#34;2023-01-31&#34;</span>
                                    </div>
                                    <div>
                                        <span className="tab2 text-white">reasonLeaving&#58;&nbsp;</span>
                                        <span className="string">&#34;New offer includes retirement savings&#34;</span>
                                    </div>
                                    <div>
                                        <span className="tab2 text-white">description&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div  className="tab3">
                                        <div>
                                            <span className="string">&#34;PHP based mainly using Laravel or Codeigniter framework.&#34;</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">&#34;Create and develop projects based on clients requirements.&#34;</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Involved in projects related to BMW SG, Porsche SG and Mini Cooper SG sales system.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Essentially create a software that assist them to custom the parts of the car with dynamic pricing and also include the COE bidding process.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Integrate third-party API such as SingPass, Docusign, Zoom, and more.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Also involved in several other clients in creating sales and finance system.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Also involved in several other clients in creating sales and finance system.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Using Git to manage branches.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Involved in securing all sites such as checking SSL, cookies flag, SQL injection attack, XSS attack and more.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;UAT process with clients.&#34;
                                            </span>
                                        </div>
                                        
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                    </div>
                                    <div>
                                        <span className="export">
                                            &nbsp;&nbsp;&nbsp;&nbsp;
                                            &#125;
                                        </span>
                                        <span className="text-white">, &nbsp;</span>
                                    </div>
                                    <div>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="export">&#123;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">company&#58;&nbsp;</span>
                                        <span className="string">&#34;Cashbridge&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">location&#58;&nbsp;</span>
                                        <span className="string">&#34;Bukit Bintang, Kuala Lumpur&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">position&#58;&nbsp;</span>
                                        <span className="string">&#34;Full stack PHP developer&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">joinedDate&#58;&nbsp;</span>
                                        <span className="string">&#34;2023-02-01&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">endDate&#58;&nbsp;</span>
                                        <span className="string">&#34;Currently work here&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">description&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div className="tab3">
                                        <div>
                                            <span className="string">&#34;Phalcon PHP framework.&#34;</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">&#34;Development and optimize in-house system process.&#34;</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Involved in database and functional design in creating a more efficient and scalable process.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Developed automated funding process and managed to increase the work efficiency by at least 40%.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Developed a digital wallet and credit system.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Integrate third-party API for necessary processes.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Overseeing server git system.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Overseeing all git actions and deployments.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;CI/CD.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#125;</span>
                                        <span className="function">&#93;</span>
                                    </div>
                                </pre>
                            </code>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-5" style={{ height: "100%" }}>
                    <FontAwesomeIcon icon={faCheck} className="p-1 fas fa-circle text-white"/>
                    <code className="text-white">Trust the process.</code>
                </div>
            </section>
            <section className="section" id="achievements">
                <div className="achievements d-flex justify-content-center">
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
                                    <span className="export"> &#61; </span>
                                    <span className="function">&#91;</span>
                                    <div><span className="export tab1">&#123;</span></div>
                                    <div>
                                        <span className="text-white tab2">name&#58;&nbsp;</span>
                                        <span className="string">&#34;ACEIC &#40;Automation and Control Enhancing Innovation Competition&#41;&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year&#58;&nbsp;</span>
                                        <span className="string">&#34;2020&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">description&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div className="tab3">
                                        <div>
                                            <span className="string">&#34;Silver Award&#34;</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Invented an Augmented Reality Educational System application utilizing Unity Engine and Vuforia AR engine.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;The application is equipped with object detection. The detected object will have its own object model.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Upon successful detection, the model will show on the screen and user will be able to disassemble the object&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#125;</span>
                                        <span className="text-white">, &nbsp;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#123;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name&#58;&nbsp;</span>
                                        <span className="string">&#34;gPBL (Global Project Based Learning)&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year&#58;&nbsp;</span>
                                        <span className="string">&#34;2021&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">description&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div className="tab3">
                                        <div>
                                            <span className="string">
                                                &#34;A project based learning workshop hosted by Japan Shibaura Institute of Technology University.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Teamed up with University members from Japan, Korea, Taiwan and Vietnam to create a global server application.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Created an IoT home security system using Arduino Uno and sensors connected to a server and mobile application.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Upon successful detection from the sensors, message will be sent to the mobile application of the user.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#125;</span>
                                        <span className="text-white">,</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#123;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name&#58;&nbsp;</span>
                                        <span className="string">
                                            &#34;Capstone Project&#34;
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year&#58;&nbsp;</span>
                                        <span className="string">
                                            &#34;2021&#34;
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">description&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div className="tab3">
                                        <div>
                                            <span className="string">&#34;Best capstone project award.&#34;</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Created a food delivery robot that is meant to be deployed in a quarantine center to reduce the needs of human physical contact.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;The delivery robot is incorporated with a Computer Vision Optical Character Recognition (OCR) application to detect the patient&#39;s bed number and deliver the food to the patient.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#125;</span>
                                        <span className="text-white">, &nbsp;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#123;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name&#58;&nbsp;</span>
                                        <span className="string">&#34;NOTT-A-CODE Competition&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year&#58;&nbsp;</span>
                                        <span className="string">&#34;2021&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">description&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div className="tab3">
                                        <div>
                                            <span className="string">&#34;Champion.&#34;</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Using .NET Core as backend, Angular 12 as frontend.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;To create a food ordering chatbot.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;The chatbot is created using Artificial Intelligence Natural Language Processing.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;The chatbot is connected to a MySQL database where the ordering menu is stored.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Upon given input, the chatbot will query the database if required, filter the results based on detected intent.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Web-sockets is also implemented for live chat function.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                                &#34;Confirmation orders will redirect user to transaction page to perform transaction&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#125;</span>
                                        <span className="text-white">, &nbsp;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#123;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name&#58;&nbsp;</span>
                                        <span className="string">&#34;Innovate Malaysia Design Competition&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year&#58;&nbsp;</span>
                                        <span className="string">&#34;2023&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">description&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div className="tab3">
                                        <div>
                                            <span className="string">&#34;To create a quadruple AIoT(AI+IoT) green system.&#34;</span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                            &#34;Systems included are waste recognition system, composting system, sowing and gardening system.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                            &#34;To apply Computer Vision using fast R-CNN for object detection in the waste recognition system.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                            &#34;To deploy the model using Intel OpenVINO inference toolkit for a smoother performance.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                        <div>
                                            <span className="string">
                                            &#34;To apply Support Vector Machine prediction model in composting system to estimate the compost completion duration.&#34;
                                            </span>
                                            <span className="text-white">,</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#125;</span>
                                        <span className="function">&#93;</span>
                                    </div>
                                </pre>
                            </code>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-5" style={{ height: "100%" }}>
                    <FontAwesomeIcon icon={faCheck} className="p-1 fas fa-circle text-white"/>
                    <code className="text-white">Glory to God.</code>
                </div>
            </section>
            <section className="section" id="projects">
                <div className="projects d-flex justify-content-center">
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
                                    <span className="object"> DOM</span>
                                    <span className="export"> &#61; </span>
                                    <span className="export">&#40;&#41; </span>
                                    <span className="export">&#61;&gt; </span>
                                    <span className="export">&#123;</span>
                                    <div>
                                        <span className="export tab1">return &#40;</span>
                                    </div>
                                    <div>
                                        <span className="string tab2">
                                            <a onClick={toggleImage} style={{ cursor: "pointer" }}>
                                            &#34;
                                            {"<button onclick='toggleImages()'>Toggle images</button>"}
                                            &#34;
                                            </a>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#41;</span>
                                    </div>
                                    <div><span className="export">&#125;</span></div>
                                    <br></br>
                                    <span className="html">const</span>
                                    <span className="object"> Projects</span>
                                    <span className="export"> &#61; </span>
                                    <span className="function">&#91;</span>
                                    <div><span className="export tab1">&#123;</span></div>
                                    <div>
                                        <span className="text-white tab2">name&#58;&nbsp;</span>
                                        <span className="string">&#34;Station R Games - Twelve Floor&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year&#58;&nbsp;</span>
                                        <span className="string">&#34;2022&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">clientName&#58;&nbsp;</span>
                                        <span className="string">&#34;Ray Low&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">status&#58;&nbsp;</span>
                                        <span className="string">&#34;COMPLETED&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">website&#58;&nbsp;</span>
                                        <span className="string">&#34;Expired&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">remarks&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div>
                                        <span className="string tab3" style={{ whiteSpace: "pre-line" }}>
                                            &#34;Ray is a friend of mine from University. 
                                            During my time of transitioning into web development, 
                                            He approached me to create a website for his 2D game that he developed.
                                            This project was build using NodeJS. Nothing too complex. 
                                            Not too many API involved as well. This project was hosted on Heroku during the eco dyno time which was free. 
                                            However, Heroku has removed its free tier. 
                                            Thus the site is no longer available.&#34;
                                        </span>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                        <span className="text-white">, &nbsp;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">images&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div className="tab3">
                                        <div className="string-src">
                                            <div>
                                                <span className="string"><a className="string" href="stationR.jpeg" target="_blank">&#34;{"stationR.jpeg"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="twelveFloorMainPage.png" target="_blank">&#34;{"twelveFloorMainPage.png"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="twelveFloorSnippets.png" target="_blank">&#34;{"twelveFloorSnippets.png"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                        </div>
                                        <div className="img-src d-none">
                                            <div className="mb-3">
                                                <img src="stationR.jpeg" style={{ height: "200px" }}/>
                                            </div>
                                            <div className="mb-3">
                                                <img src="twelveFloorMainPage.png" style={{ height: "200px" }}/>
                                            </div>
                                            <div>
                                                <img src="twelveFloorSnippets.png" style={{ height: "200px" }}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#125;</span>
                                        <span className="text-white">, &nbsp;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#123;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name&#58;&nbsp;</span>
                                        <span className="string">&#34;Crossover Point Website&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year&#58;&nbsp;</span>
                                        <span className="string">&#34;2023&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">clientName&#58;&nbsp;</span>
                                        <span className="string">&#34;Crossover Point &#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">status&#58;&nbsp;</span>
                                        <span className="string">&#34;COMPLETED&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">website&#58;&nbsp;</span>
                                        <span className="string"><a href="https://crossoverpoint.org.my" className="string" target="_blank" style={{ textDecoration: "none" }}>{`"https://crossoverpoint.org.my"`}</a></span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">remarks&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div>
                                        <span className="string tab3">
                                            &#34;Crossover Point is a church organization. 
                                            Crossover Point were in the midst of transitioning platform. 
                                            Thus, I was approached to create a website for them.
                                            The site was built on Laravel 9 monolithically.&#34;
                                        </span>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                        <span className="text-white">, </span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">images&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div className="tab3">
                                        <div className="string-src">
                                            <div>
                                                <span className="string"><a className="string" href="crossoverpoint.gif" target="_blank">&#34;{"crossoverpoint.gif"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="crossoverpoint-dashboard-scroll-effects.gif" target="_blank">&#34;{"crossoverpoint-dashboard-scroll-effects.gif"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="crossoverpoint-testimonies-scroll-effects.gif" target="_blank">&#34;{"crossoverpoint-testimonies-scroll-effects.gif"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                        </div>
                                        <div className="img-src d-none">
                                            <div className="mb-3">
                                                <img src="crossoverpoint.gif" style={{ height: "200px" }} />
                                            </div>
                                            <div className="mb-3">
                                                <img src="crossoverpoint-dashboard-scroll-effects.gif" style={{ height: "200px" }} />
                                            </div>
                                            <div>
                                                <img src="crossoverpoint-testimonies-scroll-effects.gif" style={{ height: "200px" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#125;</span>
                                        <span className="text-white">,</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#123;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name&#58;&nbsp;</span>
                                        <span className="string">&#34;Crossover Point Admin Portal&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year&#58;&nbsp;</span>
                                        <span className="string">&#34;2023&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">clientName&#58;&nbsp;</span>
                                        <span className="string">&#34;Crossover Point&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">status&#58;&nbsp;</span>
                                        <span className="string">&#34;COMPLETED&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">website&#58;&nbsp;</span>
                                        <span className="string"><a href="https://admin.crossoverpoint.org.my" className="string" target="_blank" style={{ textDecoration: "none" }}>{`"https://admin.crossoverpoint.org.my"`}</a></span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">remarks&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div>
                                        <span className="string tab3" style={{ whiteSpace: "pre-line" }}>
                                            &#34;Crossover Point admin portal is a the admin portal for the leaders of the church.
                                            This admin portal is also built on Laravel 9 monolithically. 
                                            There are several modules which are audit logs, permission, attendance, scheduling, events, sermons, users and members. &#34;
                                        </span>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                        <span className="text-white">, </span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">images&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div className="tab3">
                                        <div className="string-src">
                                            <div>
                                                <span className="string"><a className="string" href="g-login.gif" target="_blank">&#34;{"g-login.gif"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="create-arrangements.gif" target="_blank">&#34;{"create-arrangements.gif"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="permission-module.gif" target="_blank">&#34;{"permission-module.gif"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="generate-pco.gif" target="_blank">&#34;{"generate-pco.gif"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="offering.gif" target="_blank">&#34;{"offering.gif"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="respond-request.gif" target="_blank">&#34;{"respond-request.gif"}&#34;</a></span>
                                            </div>
                                        </div>
                                        <div className="img-src d-none">
                                            <div className="mb-3">
                                                <img src="g-login.gif" style={{ height: "200px" }} />
                                            </div>
                                            <div className="mb-3">
                                                <img src="create-arrangements.gif" style={{ height: "200px" }} />
                                            </div>
                                            <div className="mb-3">
                                                <img src="permission-module.gif" style={{ height: "200px" }} />
                                            </div>
                                            <div className="mb-3">
                                                <img src="generate-pco.gif" style={{ height: "200px" }} />
                                            </div>
                                            <div className="mb-3">
                                                <img src="offering.gif" style={{ height: "200px" }} />
                                            </div>
                                            <div>
                                                <img src="respond-request.gif" style={{ height: "200px" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#125;</span>
                                        <span className="text-white">,</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#123;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name&#58;&nbsp;</span>
                                        <span className="string">&#34;Manager&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year&#58;&nbsp;</span>
                                        <span className="string">&#34;2023&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">clientName&#58;&nbsp;</span>
                                        <span className="string">&#34;self&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">status&#58;&nbsp;</span>
                                        <span className="string">&#34;PENDING&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">website&#58;&nbsp;</span>
                                        <span className="string">&#34;localhost&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">remarks&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div className="tab3">
                                        <span className="string">
                                            &#34;I created this project on the side with an intention to sell it. 
                                            Manager is a project management tool. Reason I started this is because I noticed there is something 
                                            that is lacking in all project management tools such as monday.com, trello, lark, notion and more. However, this hole is not easy to fill without AI. 
                                            Fortunately, I have some AI background. This project is build on Vue3 and Laravel. 
                                            This project will be taking awhile to complete. Though the core module is completed in order to compete with in the industry 
                                            I will need to plan out the marketing and also include some submodules as subscription benefits.&#34;
                                        </span>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                        <span className="text-white">, </span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">images&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div className="tab3">
                                        <div className="string-src">
                                            <div>
                                                <span className="string"><a className="string" href="manager-g-login.gif" target="_blank">&#34;{"manager-g-login.gif"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="project-drag-drop.gif" target="_blank">&#34;{"project-drag-drop.gif"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="project-sticky-note.gif" target="_blank">&#34;{"project-sticky-note.gif"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="task-drag-drop-expand.gif" target="_blank">&#34;{"task-drag-drop-expand.gif"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="task-comment.gif" target="_blank">&#34;{"task-comment.gif"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="task-wrap.gif" target="_blank">&#34;{"task-wrap.gif"}&#34;</a></span>
                                                <span className="text-white">, &nbsp;</span>
                                            </div>
                                            <div>
                                                <span className="string"><a className="string" href="task-change-status.gif" target="_blank">&#34;{"task-change-status.gif"}&#34;</a></span>
                                            </div>
                                        </div>
                                        <div className="img-src d-none">
                                            <div className="mb-3">
                                                <img src="manager-g-login.gif" style={{ height: "200px" }} />
                                            </div>
                                            <div className="mb-3">
                                                <img src="project-drag-drop.gif" style={{ height: "200px" }} />
                                            </div>
                                            <div className="mb-3">
                                                <img src="project-sticky-note.gif" style={{ height: "200px" }} />
                                            </div>
                                            <div className="mb-3">
                                                <img src="task-drag-drop-expand.gif" style={{ height: "200px" }} />
                                            </div>
                                            <div className="mb-3">
                                                <img src="task-comment.gif" style={{ height: "200px" }} />
                                            </div>
                                            <div className="mb-3">
                                                <img src="task-wrap.gif" style={{ height: "200px" }} />
                                            </div>
                                            <div>
                                                <img src="task-change-status.gif" style={{ height: "200px" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#125;</span>
                                        <span className="text-white">, &nbsp;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#123;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">name&#58;&nbsp;</span>
                                        <span className="string">&#34;Sunway Medical Hospital Sub System&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">year&#58;&nbsp;</span>
                                        <span className="string">&#34;2024&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">clientName&#58;&nbsp;</span>
                                        <span className="string">&#34;Sunway Medical&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">status&#58;&nbsp;</span>
                                        <span className="string">&#34;PENDING&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">website&#58;&nbsp;</span>
                                        <span className="string">&#34;-&#34;</span>
                                    </div>
                                    <div>
                                        <span className="text-white tab2">remarks&#58;&nbsp;</span>
                                        <span className="function">&#91;</span>
                                    </div>
                                    <div className="tab3">
                                        <span className="string">
                                        &#34;A doctor in Sunway Medical is a friend of mine and she is aware that I am in the IT industry.
                                            Recently Sunway Medical launched a new system. However, they have some issues with some of their procedure and wish to digitalize the process.
                                            My friend then reached out to me and check if I am able to accomplish the task.
                                            I completed the demo and is currently in the midst of negotiation.&#34;
                                        </span>
                                    </div>
                                    <div>
                                        <span className="function tab2">&#93;</span>
                                    </div>
                                    <div>
                                        <span className="export tab1">&#125;</span>
                                        <span className="function">&#93;</span>
                                    </div>
                                </pre>
                            </code>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5" style={{ height: "100%" }}>
                    <FontAwesomeIcon icon={faCheck} className="p-1 fas fa-circle text-white"/>
                    <code className="text-white">This is a big world. Don&#39;t settle with walking. Fly.</code>
                </div>
            </section>
            <Footer></Footer>
        </main>
    );
}
