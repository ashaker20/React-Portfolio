import ImageCarousel from './ImageCarousel';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
import {Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function Home () {

    const projects = [
        {
            title: "RECIPE ∞",
            description: "Recipe ∞ (Infinite) is an android application that allows users to browse recipes uploaded by the community. Users can create an account and view recipes/their instructions. They can also upload recipes of their own. This was made in Android Studio, with the data being stored in Firebase. This project is in progress.",
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
            title: "PORTFOLIO",
            description: "This website was created using React. It is a single page application that showcases all of my projects, allowing you to scroll between them seamlessly.",
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
            title: "PILOT IN SIGHT",
            description: "PilotInSight is a web application that allows users to view and analyze flight data. Users can upload flight data files, and view the data in a variety of ways, including a tailored pdf report. This project is in progress.",
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
            title: "SHOPPING CART",
            description: "This website was created for a school project. It allows users to add items to a shopping cart, view their cart, checkout, and review previous orders. The site was created with Python-Flask, using SQLite for the backend. ",
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
            title: "SNOW CLIMB",
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

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    const [name, setName] = useState("")
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const myName = "Adnan Shaker".split("")
        if (counter < myName.length) {
        const timeout = setTimeout(() => {
            setName((prev) => prev + myName[counter])
            setCounter((prev) => prev + 1)
        }, 100)

        return () => {
            clearTimeout(timeout)
        }
        }

    }, [name])

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible((f) => (!f))
        }, 300)

        return () => {
            clearTimeout(timeout)
        }

    }, [visible])


    return (
        <div className='scroll-container'>
            <section className='scroll-item' id='home' style={{ height:"100dvh",backgroundColor: '#242424' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{zIndex:"1",}}>
                        {
                            name.split("").map((letter, index) => {
                                return (
                                    <span key={index} className='indivLetter'>{letter}</span>
                                )
                            })

                        }
                        {visible 
                            ? <span className='typing' style={{color: "white"}}>|</span>
                            : <span className='typing' style={{color: "transparent", textShadow:"none"}}>|</span>    
                        }

                </h1>
                <button className="noselect downButton" onClick={handleDown}  >↓</button>
            </section>
            {projects.map((p, index) => {

                let color1= index % 2 === 0 ? "#1a1a1a" : "#242424"
                let color2= index % 2 === 0 ? "#242424" : "#1a1a1a" 
                return (
                    <section key={p.id} className='scroll-item' id='projects' style={{height:"100vh", position: "relative", maxWidth: '100%', backgroundColor: color1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {p.type === "mobile" ?  
                        <div style={{maxWidth:"80%",  height:"100%",zIndex:"1", display: 'flex', alignItems: "center", gap: "", flexDirection:"column",}}>
                            <h1 className='title' >{p.title}</h1>   
                            <div style={{justifyContent:"center", height:"100%",zIndex:"1", display: 'flex', alignItems: "center", gap: "50px", flexWrap:"wrap"}}>
                                <ImageCarousel key={p.id} {...p} color={color2}/>
                                <div style={{flex:"60%", }} className='desc mobile-desc'>
                                    <h3 style={{fontSize:"1.0rem", lineClamp:"2"}}>{p.description}</h3>
                                    <div style={{display: "flex", justifyContent: "center", gap:"30px", width: "100%", alignItems: "center", flexWrap:"wrap"}}>
                                        {p.tools.map((t, index) => {
                                            return (<img title={t} className='noselect' key={index} style={{height: "auto", width: "auto", maxWidth:"5%", borderRadius:"10px"}} src={techImages[t]}/> )
                                        }
                                    )}
                                    </div>
                                </div>
                            </div> 
                        </div>
                        :
                        <div style={{maxWidth:"80%",  height:"100%",zIndex:"1", display: 'flex', alignItems: "center", gap: "20px", flexDirection:"column",}}>
                            <h1 className='title' >{p.title}</h1>    
                            <ImageCarousel key={p.id} {...p} color={color2}/>
                            <div style={{}} className='desc'>
                                <h3 style={{fontSize:"1.0rem"}}>{p.description}</h3>
                                <div style={{display: "flex", justifyContent: "center", gap:"30px", width: "100%", alignItems: "center", flexWrap:"wrap"}}>
                                    {p.tools.map((t, index) => {
                                        return (<img title={t} className='noselect' key={index} style={{height: "auto", width: "auto", maxWidth:"5%", borderRadius:"10px"}} src={techImages[t]}/> )
                                    }
                                )}</div>
                            </div>
                        </div>
                        }
                        
                    </section>
                )
            }
        )}
        <section className='scroll-item' id='contact' style={{height:"100vh", backgroundColor: '#242424' , flexDirection:"column", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1 style={{zIndex:"1",}}>
                        {
                            "Contact Me".split("").map((letter, index) => {
                                return (
                                    <span key={index} className='indivLetter'>{letter}</span>
                                )
                            })

                        }
            </h1>
            {/* have icons for linkedin, and email.  */}

            <div style={{zIndex:"1", display: "flex", gap:"30px", justifyContent:"center", alignItems: "center"}}>
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
        {isMobile ? 
            <Sidebar images={sideBarImages} type="mobile"/> 
            :
            <Sidebar images={sideBarImages} type="desktop"/>
        }
        <Analytics />
        <SpeedInsights />
        </div>
    );
};
