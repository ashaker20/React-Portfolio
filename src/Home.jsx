import ImageCarousel from './ImageCarousel';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import {Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function Home () {

    const projects = [
        {
            title: "Recipe ∞",
            description: "Recipe ∞ (Infinite) is an android application that allows users to browse recipes uploaded by the community. Users can create an account, and view recipes and their instructions, or upload recipes of their own.",
            images: [
                "./images/recipe/RecipePhoto1.png",
                "./images/recipe/RecipePhoto2.png",
                "./images/recipe/RecipePhoto3.png",
                "./images/recipe/RecipePhoto4.png",
                "./images/recipe/RecipePhoto5.png",
            ],
            tools: [
                "Android Studio",
                "Kotlin",
                "Firebase",
            ],
            type: "mobile",
            id: 0,
        },
        {
            title: "Portfolio",
            description: "This website was created using React and Framer Motion. It is a single page application that uses React Scroll to navigate between sections.",
            images: [
                "./images/portfolio/Portfolio1.png",
                "./images/portfolio/Portfolio2.png",
                "./images/portfolio/Portfolio3.png",

            ],
            tools: [
                "React",
                "JavaScript",
                "HTML",
                "CSS",
            ],
            type: "desktop",
            id: 1,
        },
        {
            title: "PilotInSight",
            description: "PilotInSight is a web application that allows users to view and analyze flight data. Users can upload flight data files, and view the data in a variety of ways, including graphs and tables.",
            images: [
                "./images/pilot_in_sight/image1.png",
            ],
            tools: [
                "Node.js",
                "Express",
                "JavaScript",
                "HTML",
                "CSS",
                "Python",
                "Cesium.js",
            ],
            type: "desktop",
            id: 2,
        },
        // {
        //     title: "xv6 Docker Implementation",
        //     description: "This project was created to allow students to run xv6 on their own computers without having to install a virtual machine. It uses Docker to run the xv6 operating system in a container.",
        //     images: [
        //         "./images/xv6/xv6.png",
        //     ],
        //     tools: [
        //         "C",
        //     ],
        //     type: "desktop",
        //     id: 3,
        // },
        // {
        //     title: "Registration Site",
        //     description: "This website was created for a school project. It allows users to register for a course, and view their registration status.",
        //     images: [
        //         "./images/registration_site/RegistrationSite1.png",
        //         "./images/registration_site/RegistrationSite2.png",
        //         "./images/registration_site/RegistrationSite3.png",
        //         "./images/registration_site/RegistrationSite4.png",
        //     ],
        //     tools: [
        //         "Python",
        //         "Flask",
        //         "JavaScript",
        //         "HTML",
        //         "CSS",
        //         "MySQL"
        //     ],
        //     type: "desktop",
        //     id: 3,
        // },
        {
            title: "Shopping Cart",
            description: "This website was created for a school project. It allows users to add items to a shopping cart, and view their cart.",
            images: [
                "./images/shopping_cart/ShoppingCart1.png",
                "./images/shopping_cart/ShoppingCart2.png",
                "./images/shopping_cart/ShoppingCart3.png",
                "./images/shopping_cart/ShoppingCart4.png",
            ],
            tools: [
                "Python",
                "Flask",
                "HTML",
                "CSS",
                "JavaScript",
                "SQLite",
            ],
            type: "desktop",
            id: 3,
        },
        {
            title: "Snow Climb",
            description: "Snow Climb is a mobile game created using Unity. It is a 2D platformer where the player must climb a mountain while avoiding obstacles.",
            images: [
                "./images/snow_climb/SnowClimb1.png",
                "./images/snow_climb/SnowClimb2.png",
                "./images/snow_climb/SnowClimb3.png",
            ],
            tools: [
                "Unity",
                "C#",
            ],
            type: "desktop",
            id: 4,
        }
    ]

    const techImages = {
        "Android Studio": "./images/tech_stack/Android_Studio.png",
        "React": "./images/tech_stack/React.png",
        "Kotlin": "./images/tech_stack/Kotlin.png",
        "Firebase": "./images/tech_stack/Firebase.png",
        "Framer Motion": "./images/tech_stack/framer-motion.svg",
        "JavaScript": "./images/tech_stack/JavaScript-logo.png",
        "HTML": "./images/tech_stack/html-1.svg",
        "CSS": "./images/tech_stack/CSS.png",
        "Node.js": "./images/tech_stack/NodeJS.png",
        "Express": "./images/tech_stack/express.png",
        "Python": "./images/tech_stack/Python.png",
        "Cesium.js": "./images/tech_stack/CesiumJS.png",
        "MongoDB": "./images/tech_stack/mongodb.png",
        "C": "./images/tech_stack/c.png",
        "Flask": "./images/tech_stack/flask.png",
        "MySQL": "./images/tech_stack/mysql.png",
        "Unity": "./images/tech_stack/unity.png",
        "C#": "./images/tech_stack/csharp.png",
        "SQLite": "./images/tech_stack/SQLite.png",
    }


    const sideBarImages = [
        "./images/contact/home.png",
        techImages["Android Studio"],
        techImages["React"],
        techImages["Cesium.js"],
        techImages["Python"],
        // techImages["MySQL"],
        techImages["Unity"],
        "./images/contact/contact.png",
    ]

    const contact = [
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/adnan-shaker-5bb23725b/",
            image: "./images/contact/linkedin.png",
            id: 0,
        },
        {
            title: "Email",
            link: "mailto:adnanshaker2002@gmail.com",
            image: "./images/contact/gmail.png",
            id: 1,
        }
    ]

    function handleDown() {
        window.scrollBy(0, window.innerHeight)
    }


    return (
        <div className='scroll-container' style={{ width: '100%' }}>
            <section className='scroll-item' id='home' style={{height: '100vh', width: '100%', backgroundColor: '#242424' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{zIndex:"1",}}>Adnan Shaker</h1>
                <button className="noselect" onClick={handleDown}  style={{zIndex:"2", position:"absolute" , bottom: "30px", fontSize: "2.5em", padding:"10px", borderRadius:"40px"}}>↓</button>
            </section>
            {/* for each project, make a project section.  */}
            {projects.map((p, index) => {

                let color1= index % 2 === 0 ? "#1a1a1a" : "#242424"
                let color2= index % 2 === 0 ? "#242424" : "#1a1a1a"
                return (
                    <section key={p.id} className='scroll-item' id='projects' style={{position: "relative", height: '100vh', width: '100%', backgroundColor: color1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{zIndex:"2", position: "absolute", top: "0px"}}><h1 className='title' >{p.title}</h1></div>
                        <div style={{height:"100%",zIndex:"1", margin: "0 150px", display: 'flex', alignItems: "center", gap: "50px"}}>
                            <ImageCarousel key={p.id} {...p} color={color2}/>
                            <div style={{maxWidth:"60%"}} >
                                <h3 style={{fontSize:"1.2rem"}} >{p.description}</h3>
                                {/* <h2>Technologies Used</h2> */}
                                <div style={{display: "flex", justifyContent: "center", gap:"30px", width: "100%", alignItems: "center"}}>
                                    {p.tools.map((t, index) => {
                                        return (<img title={t} className='noselect' key={index} style={{height: "auto", width: "auto", maxWidth:"10%", borderRadius:"10px"}} src={techImages[t]}/> )
                                    }
                                )}</div>
                            </div>
                        </div>
                        {/* <Sidebar images={sideBarImages} /> */}
                        {/* {index !== projects.length - 1 &&  */}
                            <button className="noselect" onClick={handleDown}  style={{zIndex: "2",position:"absolute" , bottom: "30px", fontSize: "2.5em", padding:"10px", borderRadius:"40px", backgroundColor: color2}}>↓</button>
                        {/* } */}
                    </section>
                )
            }
        )}
        <section className='scroll-item' id='contact' style={{  height: '100vh', width: '100%', backgroundColor: '#242424' , flexDirection:"column", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{zIndex:"1",}}>Contact Me</h1>
            {/* have icons for linkedin, and email.  */}
            {/* <Sidebar images={sideBarImages} /> */}

            <div style={{zIndex:"1", display: "flex", gap:"10px", justifyContent:"center", alignItems: "center"}}>
            {
                contact.map((c) => {
                    return (
                        <a href={c.link} key={c.id} target="_blank" rel="noopener noreferrer">
                            <img title={c.title} className='contact-img noselect' src={c.image} alt={c.title} />
                        </a>
                    )
                })
            }
            </div>
        </section>
        <Sidebar images={sideBarImages} />
        <Analytics />
        <SpeedInsights />
        </div>
    );
};
