import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { FaCode } from 'react-icons/fa'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCode } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "ExpressJs",
    "Python",
    "MongoDB",
    "Thunder Client"
];

const labelsSecond = [
    "Leetcode",
    "HackerRank",
    "GeeksforGeeks",
    "Codechef"
];

const labelsThird = [
    "React Native",
    "Expo",
    "NodeJS",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Competative Coder</h3>
                    <p>Passionate Competitive Coder with 500+ solved problems across various platforms, achieving 5-star ratings in Python and C++ on HackerRank. Strong expertise in DSA, algorithmic problem-solving, and optimizing code efficiency</p>
                    <div className="flex-chips">
                        <span className="chip-title">Platforms</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Mobile Application Developer</h3>
                    <p>Mobile Application Developer specializing in React Native, building high-performance, cross-platform apps with seamless UI/UX. Passionate about creating efficient, scalable, and user-friendly mobile experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;