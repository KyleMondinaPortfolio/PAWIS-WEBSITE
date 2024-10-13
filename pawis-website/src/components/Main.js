import {Link } from "react-router-dom"
import './Main.css';


export default function Main() {
    return (
        <div className="main">
            <div className="block1">
                <h1>Pilipino Association of Workers and Im/migrants (PAWIS) - South Bay</h1>
                <img src="/assets/images/pawis-title-image.png" alt="PAWIS title image" />
                <p>
                    Based in the South Bay, we are a grassroots organization of Filipino im/migrants, workers, 
                    and professionals advocating for human rights, im/migrant rights, and workers' rights
                </p>
                <hr className="styled-hr" /> {/* Line break */}
            </div>

            <div className="block2">
                <div className="block2a">
                    <h1 className="hide-desktop">Mabuhay ang Migranteng Manggagawa!</h1>
                    <div className="image-wrapper">
                        <img src="/assets/images/block2-image.png" alt="Block 2 image" />
                    </div>
                    <p className="hide-desktop">Join us in protecting and advocating for workers' rights in the South Bay</p>
                    <div className="get-involved hide-desktop">
                        <Link to="/get-involved" className="hide-desktop">Get Involved</Link>
                    </div>
                </div>

                <div className="block2b hide-mobile">
                    <h1>Mabuhay ang Migranteng Manggagawa!</h1>
                    <p>Join us in protecting and advocating for workers' rights in the South Bay</p>
                    <div className="get-involved">
                        <Link to="/get-involved">Get Involved</Link>

                    </div>
                </div>
            </div>

            <hr className="styled-hr" /> {/* Line break */}

            <div className="block3">
                <h1>Built by Filipino im/migrant workers, led by Filipino im/migrant workers</h1>
                <p>Find out what PAWIS does on the day-to-day for the Filipino im/migrant community!</p>
                <div className="table">
                    <div className="column1 col">
                        <div className="activities">
                            <a href="#">Community Outreach</a>
                        </div>
                        <div className="activities">
                            <a href="#">Legal Clinics</a>
                        </div>
                        <div className="activities">
                            <a href="#">Cultural Performances</a>
                        </div>
                    </div>
                    <div className="column2 col">
                        <div className="activities">
                            <a href="#">Know Your Rights Trainings</a>
                        </div>
                        <div className="activities">
                            <a href="#">Community Events</a>
                        </div>
                        <div className="activities">
                            <a href="#">Multimedia Content</a>
                        </div>
                    </div>
                </div>
                <hr className="styled-hr" /> {/* Line break */}
            </div>

            <div className="block4">
                <h1>Proud partner of Santa Clara County Office of Labor Standards Enforcement</h1>
                <div className="image-wrapper">
                    <img src="/assets/images/olse.png" alt="OLSE logo" />
                </div>
            </div>
        </div>
    );
}
