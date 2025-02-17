import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://adityauniversity.in/veda2024" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://adityauniversity.in/veda2024" target="_blank" rel="noreferrer"><h2>VEDA Website</h2></a>
                <p>Veda is a responsive event management website designed to streamline event organization, attendee registration, and session booking. Built for Aditya University, it enhances user experience with automated workflows and real-time event updates.</p>
            </div>
            <div className="project">
                <a href="https://adityatransporthub.vercel.app/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://adityatransporthub.vercel.app/" target="_blank" rel="noreferrer"><h2>Bus Live-Tracking</h2></a>
                <p>A real-time Bus Tracking System developed for Aditya University, enabling students and faculty to track buses efficiently, ensuring a seamless commuting experience. The system integrates IoT for precise location tracking and provides real-time updates.</p>
            </div>
            <div className="project">
                <a href="https://adityauniversity.in/latecomers/login" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://adityauniversity.in/latecomers/login" target="_blank" rel="noreferrer"><h2>Late Commers Project</h2></a>
                <p>A real-time Late Comers Tracking System built for Aditya University to monitor and manage student and faculty late arrivals efficiently. The system enhances campus security, streamlines attendance tracking, and provides actionable insights for administrators.</p>
            </div>
            <div className="project">
                <a href="/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="/" target="_blank" rel="noreferrer"><h2>Contest Reaminder</h2></a>
                <p>Contest Reminder is a smart web application designed to help coders stay updated on upcoming coding contests across multiple platforms. It ensures that users never miss a contest by providing timely reminders, a user dashboard, and additional features to enhance productivity.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;