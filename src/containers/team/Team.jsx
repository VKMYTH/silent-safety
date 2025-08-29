import React, { useState } from 'react';
import './team.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import andrew from '../../assets/andrew.png';
import devansh from '../../assets/devansh.png';
import arjun from '../../assets/arjun.png';
import shiv from '../../assets/shiv.png';
import vaibhav from '../../assets/vaibhav.png';
import sahana from '../../assets/sahana.png';
import vikranth from '../../assets/vikranth.png';
import kenneth from '../../assets/kenneth.png';
import profile from '../../assets/profile.png';


const teamMembers = [
    {
        name: "Vaibhav Kolli",
        role: "President & Head of App Development",
        description: "...",
        imgSrc: vaibhav,
        linkedin: "https://linkedin.com/in/vaibhav-kolli/"
    },
    {
        name: "Vikranth Kolluru",
        role: "Vice President & Marketing Outreach",
        description: "...",
        imgSrc: vikranth,
        linkedin: "https://linkedin.com/in/"
    }
];

const interns = [
    
];

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null);

    const handleMemberClick = (member) => {
        setSelectedMember(member);
    };

    const handleCloseClick = () => {
        setSelectedMember(null);
    };

    return (
        <div className="team-container">
            <h1 className="team-heading" id="team">Team</h1>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member" onClick={() => handleMemberClick(member)}>
                        <img src={member.imgSrc} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
            <div className="team-grid">
                {interns.map((member, index) => (
                    <div key={index} className="team-member" onClick={() => handleMemberClick(member)}>
                        <img src={member.imgSrc} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>

            {selectedMember && (
                <div className="member-popup">
                    <div className="popup-content">
                        <img src={selectedMember.imgSrc} alt={selectedMember.name} />
                        <h3>{selectedMember.name}</h3>
                        <p>{selectedMember.role}</p>
                        <div className="social-media">
                            <a href={selectedMember.linkedin}><FaLinkedin /></a>
                        </div>
                        <button onClick={handleCloseClick}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Team;
