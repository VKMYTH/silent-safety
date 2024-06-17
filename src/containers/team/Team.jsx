// src/Team.js
import React, { useState } from 'react';
import './team.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import img1 from '../../assets/profile.png';

const teamMembers = [
    {
        name: "Shivansh Nikhra",
        role: "Co-Founder",
        description: "...",
        imgSrc: img1,
        instagram: '#',
        linkedin: "#"
    },
    {
        name: "Arjun Ramprasad",
        role: "Co-Founder",
        description: "...",
        imgSrc: img1,
        instagram: "#",
        linkedin: "#"
    },
    {
        name: "Devansh Roongta",
        role: "Co-Founder",
        description: "...",
        imgSrc: img1,
        instagram: "#",
        linkedin: "#"
    },
    {
        name: "Andrew Chen",
        role: "Co-Founder",
        description: "...",
        imgSrc: img1,
        instagram: "#",
        linkedin: "#"
    },
];

const interns = [
    {
        name: "Vaibhav Kolli",
        role: "Intern",
        description: "...",
        imgSrc: img1,
        instagram: '#',
        linkedin: "#"
    },
    {
        name: "Sahana Pulavarthy",
        role: "Intern",
        description: "...",
        imgSrc: img1,
        instagram: '#',
        linkedin: "#"
    },
    {
        name: "Vikranth Kolluru",
        role: "Intern",
        description: "...",
        imgSrc: img1,
        instagram: '#',
        linkedin: "#"
    },

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
            <h1 className="team-heading">Team</h1>
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
                        <p>{selectedMember.description}</p>
                        <div className="social-media">
                            <a href={selectedMember.instagram}><FaInstagram /></a>
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
