import Image from "next/image";
import NavBar from "./components/navbar/navbar";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
    return (
        <main className="container">
            <div>
                <NavBar></NavBar>
            </div>
            <section id="about_us p-5">
                <div className="about-us">
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ex labore nulla, assumenda ullam explicabo expedita dignissimos dolorum amet error doloremque magni. Corrupti quo maxime nesciunt consequuntur. Officia, nihil vero.</p>
                </div>
            </section>
        </main>
    );
}
