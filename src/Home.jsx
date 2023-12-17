import ImageCarousel from './ImageCarousel';

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
                "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbXxlbnwwfHwwfHx8MA%3D%3D",
                "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww",
            ],
            tools: [
                "React",
                "Framer Motion",
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
                // "./images/pilotinsight/PilotInSight1.png",
                // "./images/pilotinsight/PilotInSight2.png",
                // "./images/pilotinsight/PilotInSight3.png",
                // "./images/pilotinsight/PilotInSight4.png",
                // "./images/pilotinsight/PilotInSight5.png",
                "unsplash.com/photos/4HvPWqQ5Zqg",
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
    }
    
    // console.log(projects["Recipe App"])
    // console.log(projects["Recipe App"].images)

    function handleDown() {
        window.scrollBy(0, window.innerHeight)
    }

    return (
        <div className='scroll-container' style={{ width: '100%' }}>
            <section className='scroll-item' id='home' style={{  height: '100vh', width: '100%', backgroundColor: '#242424' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1>Adnan Shaker</h1>
                <button  onClick={handleDown}  style={{position:"absolute" , bottom: "30px", fontSize: "2.5em", padding:"10px", borderRadius:"40px"}}>↓</button>
            </section>

            {projects.map((p, index) => {

                let color1= index % 2 === 0 ? "#1a1a1a" : "#242424"
                let color2= index % 2 === 0 ? "#242424" : "#1a1a1a"

                return (
                    <section key={p.id} className='scroll-item' id='projects' style={{position: "relative", height: '100vh', width: '100%', backgroundColor: color1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{position: "absolute", top: "0px"}}><h1>{p.title}</h1></div>
                        <div style={{margin: "0 150px", display: 'flex', alignItems: "center", gap: "50px"}}>
                            <ImageCarousel key={p.id} {...p}/>
                            <div>
                                <h3>{p.description}</h3>
                                <h2>Technologies Used</h2>
                                <div style={{display: "flex", justifyContent: "center", gap:"30px", width: "100%", alignItems: "center"}}>
                                    {p.tools.map((t) => {
                                        return (<img title={t} style={{height: "auto", width: "auto", maxWidth:"10%"}} src={techImages[t]}/> )
                                    }
                                )}</div>
                            </div>
                        </div>
                        {index !== projects.length - 1 && 
                            <button  onClick={handleDown}  style={{position:"absolute" , bottom: "30px", fontSize: "2.5em", padding:"10px", borderRadius:"40px", backgroundColor: color2}}>↓</button>
                        }
                    </section>
                )
            }
            )}
{/* 
            <section className='scroll-item' id='projects' style={{position: "relative", height: '100vh', width: '100%', backgroundColor: '#242424' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{position: "absolute", top: "0px"}}><h1>Recipe ∞</h1></div>
                <div style={{margin: "0 150px", display: 'flex', alignItems: "center", gap: "50px"}}>
                    <ImageCarousel {...projects["Recipe App"]}/>
                    <div>
                        <h3>Recipe ∞ is an android application that allows users to search for recipes based on ingredients they have on hand. Users can also create an account to save their favorite recipes and create a shopping list for ingredients they need to buy.</h3>
                        <h2>Technologies Used</h2>
                        <div style={{display: "flex", justifyContent: "center", gap:"30px"}}>{projects["Recipe App"].tools.map((t) =><img alt={t} style={{maxWidth:"10%"}} src={techImages[t]}/> )}</div>
                    </div>
                </div>
            </section>
            <section className='scroll-item' id='projects' style={{position: "relative", height: '100vh', width: '100%', backgroundColor: '#242424' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{position: "absolute", top: "0px"}}><h1>Portfolio</h1></div>
                <div style={{margin: "0 150px", display: 'flex', alignItems: "center", gap: "50px"}}>
                    <ImageCarousel {...projects["Portfolio"]}/>
                    <div>
                        <p>Recipe App is an android application that allows users to search for recipes based on ingredients they have on hand. Users can also create an account to save their favorite recipes and create a shopping list for ingredients they need to buy.</p>
                        <h2>Technologies Used</h2>
                        <div style={{display: "flex", justifyContent: "center", gap:"30px"}}>{projects["Recipe App"].tools.map((t) =><img alt={t} style={{maxWidth:"10%"}} src={techImages[t]}/> )}</div>
                    </div>
                </div>
            </section> */}
            {/* scroll icon, allow scrolling between pages, smooth transition. */}
        </div>
    );
};
