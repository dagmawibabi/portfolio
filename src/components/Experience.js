import './Experience.css'
import { useState } from 'react';

export const Experience = () => {
    let tabs = [
        {
            tab: 'AASTU AIR CoE',
            role: 'Backend and DevOps Engineer',
            tabTitle: 'Artificial Intelligence and Robotics Center of Excellence',
            duration: 'February 2022 - Present',
            details: "I'm a member of AASTU's Center of Excellence. It's a research and development program where I've developed multiple complex softwares and apps.",
            list: [
                "Write modern, performant, maintainable code for a diverse array of internal projects", 
                "Deployed, secured and maintained multiple web apps",
                "Wrote automating code to backup, log and maintain multiple projects",
                "Communicate with multi-disciplinary teams of engineers, designers, testers, project managers and stakeholders", 
            ]
        },
        {
            tab: 'Habesha Creative Designs',
            role: 'CTO and Fullstack Engineer',
            tabTitle: 'Habesha Creative Designs',
            duration: 'October 2020 - Present',
            details: "I'm the CTO and fullstack engineer at an Ethiopian based design studio. I've set, managed and run the technical direction for multiple product developments.",
            list: [
                "Align technology-related decisions with the company's goals", 
                "Developed, implemented, managed and evaluated the company's technology resources", 
                "Communicate technology strategy to partners and investors",
                "Built and deployed MVPs and tech solutions for clients and internal teams"
            ]
        },
        {
            tab: 'Arif Events',
            role: 'Intern',
            tabTitle: 'Arif Events',
            duration: 'July - September 2019',
            details: "I've interned at this amazing event organizing and managing tech company that taught me so much about start up business running, event planning and project management.",
            list: [
                "Worked closely with developers and management team to develop and document smaller features on the company's website", 
                "Worked with the company's marketing team to create and manage event marketing campaigns", 
                "Worked closely with the CEO to learn about product branding and business management"
            ]
        },
        {
            tab: 'Dream Intelligence',
            role: 'Founder and CEO',
            tabTitle: 'Dream Intelligence',
            duration: 'November 2018 - Present',
            details: "3. I enjoy creating tech solutions to my daily problems. My interest in software development started back in 2013 when I accidentally stumbled upon a batch programming ebook in one of my harddrives — turns out there's so much you could do on a black & white terminal!",
            list: [
                'Developed and shipped highly interactive web applications', 
                'List Item 8', 
                'List Item 7', 
                'List Item 6'
            ]
        },
        {
            tab: 'Udeaz',
            role: 'Co-Founder and CTO',
            tabTitle: 'Udeaz',
            duration: 'March - June 2020',
            details: "I've co-founded and spearheaded a startup company that provides a platform for youth entrepreneurs to educate, incubate and launch their products and services to the world.",
            list: [
                'Developed and shipped highly interactive web applications', 
                'List Item 8', 
                'List Item 7', 
                'List Item 6'
            ]
        },
        {
            tab: 'Freelance',
            role: 'Founder and CEO',
            tabTitle: 'Dream Intelligence',
            duration: 'November 2018 - Present',
            details: "3. I enjoy creating tech solutions to my daily problems. My interest in software development started back in 2013 when I accidentally stumbled upon a batch programming ebook in one of my harddrives — turns out there's so much you could do on a black & white terminal!",
            list: ['Developed and shipped highly interactive web applications', 'List Item 8', 'List Item 7', 'List Item 6']
        },
    ]
    const [curTabContent, setCurTab] = useState(0);

    function tabSwitcher(e){
        console.log(e.target.id);
        setCurTab(parseInt(e.target.id));
    }
    return (
        <div id='experience'>
            <div className='sectionContainer experienceContainer'>
                <div className='flexSpaceBetween'>
                    <h2 className='sectionTitle'> <span className='linkText'> 02. </span> Experience </h2>
                    <div className='horizontalLine'></div>
                </div>
                <div className='tabsContainer'>
                    <div className='tabs'>
                        <div className='tabList'>
                            {
                                tabs.map((item, index) => {
                                    return (
                                        <p key={index} className={curTabContent === index ? "selectedTab" : "eachTab"} id={index} onClick={(e) => tabSwitcher(e)}> {item['tab']} </p>
                                    )
                                })
                            }
                        </div>
                        <div className='tabExpanded'>
                            {/* Role */}
                            <h2 className='tabTitle' style={{fontSize: '18px'}}> {tabs[curTabContent]['role']}  </h2>

                            {/* Title */}
                            <h2 className='linkText tabTitle'> {'' + tabs[curTabContent]['tabTitle']}  </h2>

                            {/* Duration */}
                            <p className='tabDuration'> {tabs[curTabContent]['duration']} </p>

                            {/* Brief Explanation */}
                            <p className='tabDescription'> {tabs[curTabContent]['details']} </p>

                            {/* What I did and learnt */}
                            <div className='tabExpandedList'>
                                <ul>
                                    {
                                        tabs[curTabContent]['list'].map((item, index) => {
                                            return (
                                                <li className='experiencesList' key={index}> {item} </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}