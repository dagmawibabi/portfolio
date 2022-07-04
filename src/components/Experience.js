import './Experience.css'
import { useState } from 'react';

export const Experience = () => {
    let tabs = [
        {
            tab: 'Tab 1',
            tabTitle: 'Title 1',
            duration: 'January 2020 - Present',
            details: "1. Hello! My name is Dagmawi and I enjoy creating tech solutions to my daily problems. My interest in software development started back in 2013 when I accidentally stumbled upon a batch programming ebook in one of my harddrives — turns out there's so much you could do on a black & white terminal!",
            list: ['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4']
        },
        {
            tab: 'Tab 2',
            tabTitle: 'Title 2',
            duration: 'January - March 2020',
            details: "2. My name is Dagmawi and I enjoy creating tech solutions to my daily problems. My interest in software development started back in 2013 when I accidentally stumbled upon a batch programming ebook in one of my harddrives — turns out there's so much you could do on a black & white terminal!",
            list: ['List Item 5', 'List Item 6', 'List Item 7', 'List Item 8']
        },
        {
            tab: 'Tab 3',
            tabTitle: 'Title 3',
            duration: 'April - June 2020',
            details: "3. I enjoy creating tech solutions to my daily problems. My interest in software development started back in 2013 when I accidentally stumbled upon a batch programming ebook in one of my harddrives — turns out there's so much you could do on a black & white terminal!",
            list: ['List Item 9', 'List Item 8', 'List Item 7', 'List Item 6']
        },
        {
            tab: 'Tab 4',
            tabTitle: 'Title 4',
            duration: 'July - December 2020',
            details: "4. My interest in software development started back in 2013 when I accidentally stumbled upon a batch programming ebook in one of my harddrives — turns out there's so much you could do on a black & white terminal!",
            list: ['List Item 5', 'List Item 4', 'List Item 3', 'List Item 2']
        },
    ]
    const [curTabContent, setCurTab] = useState(0);
    function tabSwitcher(e){
        console.log(e.target.id);
        setCurTab(e.target.id);
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
                            <p className={curTabContent === '0' ? "selectedTab" : "eachTab"} id='0' onClick={(e) => tabSwitcher(e)}> Tab 1 </p>
                            <p className={curTabContent === '1' ? "selectedTab" : "eachTab"} id='1' onClick={(e) => tabSwitcher(e)}> Tab 2 </p>
                            <p className={curTabContent === '2' ? "selectedTab" : "eachTab"} id='2' onClick={(e) => tabSwitcher(e)}> Tab 3 </p>
                            <p className={curTabContent === '3' ? "selectedTab" : "eachTab"} id='3' onClick={(e) => tabSwitcher(e)}> Tab 4 </p>
                        </div>
                        <div className='tabExpanded'>
                            {/* Title */}
                            <h2 className='linkText tabTitle'> {tabs[curTabContent]['tabTitle']}  </h2>

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