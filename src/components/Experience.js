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
                "Deployed, secured and maintained multiple web apps",
                "Wrote automating code to backup, log and maintain multiple projects",
                "Write modern, performant, maintainable code for a diverse array of internal projects", 
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
                "Communicate technology strategy to partners and investors",
                "Align technology-related decisions with the company's goals", 
                "Built and deployed MVPs and tech solutions for clients and internal teams",
                "Developed, implemented, managed and evaluated the company's technology resources", 
            ]
        },
        {
            tab: 'Dream Intelligence',
            role: 'Founder and CEO',
            tabTitle: 'Dream Intelligence',
            duration: 'November 2018 - Present',
            details: "I've founded and i'm running my own technology solutions company which has helped bring a great line of incredible and complex products and services to the world. I'm running all aspects of business and working to expand and enrich my company.",
            list: [
                "Handle day to day business and technology directions",
                "Architected and implemented multiple products and solutions",
                "Prototyped and demoed multiple MVPs for a eHealth company",
                "Offer a great line of products to help ease life and solve problems",
                "Communicated with business partners, investors, and stakeholders on visions and goals of the company and products",
                "Collaborated and partnered with multiple start ups and companies to bring real world problem solving services and products",
            ]
        },
        {
            tab: 'Udeaz',
            role: 'Co-founder and CTO',
            tabTitle: 'Udeaz',
            duration: 'March - June 2020',
            details: "I've co-founded and spearheaded a startup company that provides a platform for youth entrepreneurs to educate, incubate and launch their products and services to the world.",
            list: [
                "Planned and devised the start up's business strategy",
                "Managed and oversaw the start up's technology resources", 
                "Developed and shipped highly interactive web applications", 
                "Handled promotions, outreach and marketing for the start up's brand", 
            ]
        },
        {
            tab: 'Freelance',
            role: 'Web and Mobile App Developer',
            tabTitle: 'Freelance',
            duration: '2018 - 2021 ',
            details: "I've freelanced on the side for multiple years. I've learnt and developed multiple technologies and projects. I've worked with several startups and clients to create products that solve real-world problems.",
            list: [
                "Worked on lots of contract-based projects", 
                "System analysis and modeling for multiple clients and projects", 
                "Specification and Requirements engineering for a ride hauling company", 
                "Interfaced with clients on a weekly basis, providing technological expertise",
                "Helped solidify a brand direction for a graphic design and animations studio",
                "Developed, secured, deployed and maintained multiple web and mobile apps for multiple startup companies",
            ]
        },
        {
            tab: 'Arif Events',
            role: 'Intern',
            tabTitle: 'Arif Events',
            duration: 'July - September 2019',
            details: "I've interned at this amazing event organizing and managing tech company that taught me so much about start up business running, event planning and project management.",
            list: [
                "Worked closely with the CEO to learn about product branding and business management",
                "Worked with the company's marketing team to create and manage event marketing campaigns", 
                "Worked closely with developers and management team to develop and document smaller features on the company's website", 
            ]
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