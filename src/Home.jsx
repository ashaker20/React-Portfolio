import ImageCarousel from './ImageCarousel';

export default function Home () {

    const projects = {
        "Recipe App": {
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
        },
        "Portfolio": {
            images: [

            ],
            tools: [
                "React",
                "Framer Motion",
                "React Router",
                "React Scroll",
                "CSS",
            ]
        }
    }

    const techImages = {
        "Android Studio": "./images/tech_stack/Android_Studio.png",
        "React": "./images/tech_stack/React.png",
        "Kotlin": "./images/tech_stack/Kotlin.png",
        "Firebase": "./images/tech_stack/Firebase.png",
    }
    
    console.log(projects["Recipe App"])
    console.log(projects["Recipe App"].images)

    return (
        <div className='scroll-container' style={{ width: '100vw' }}>
            <section className='scroll-item' id='home' style={{ height: '100vh', width: '100vw', backgroundColor: '#242424' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1>Adnan Shaker</h1>
            </section>
            <section className='scroll-item' id='projects' style={{position: "absolute", height: '100vh', width: '100vw', backgroundColor: '#242424' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{position: "absolute", top: "0px"}} ><h1>Recipe ∞</h1></div>
                <div style={{margin: "0 150px", display: 'flex', alignItems: "center", gap: "50px"}}>
                    <ImageCarousel {...projects["Recipe App"]}/>
                    <div>
                        <p>Recipe App is an android application that allows users to search for recipes based on ingredients they have on hand. Users can also create an account to save their favorite recipes and create a shopping list for ingredients they need to buy.</p>
                        <h2>Technologies Used</h2>
                        <div style={{display: "flex", justifyContent: "center", gap:"30px"}}>{projects["Recipe App"].tools.map((t) =><img alt={t} style={{maxWidth:"10%"}} src={techImages[t]}/> )}</div>
                    </div>
                </div>
            </section>
            {/* scroll icon, allow scrolling between pages, smooth transition. */}
        </div>
    );
};
