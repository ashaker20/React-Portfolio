
export default function Home () {

    return (
        <div className='scroll-container' style={{ width: '100vw' }}>
            <section className='scroll-item' id='home' style={{ height: '100vh', width: '100vw', backgroundColor: '#242424' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1>Adnan Shaker</h1>
            </section>
            <section className='scroll-item' id='projects' style={{position: "absolute", height: '100vh', width: '100vw', backgroundColor: '#242424' , display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{margin: "0 100px"}}>
                    <div style={{position: "absolute", top: "0px", left: "100px"}} ><h1>Projects</h1></div>
                    <p style={{}}>I am a computer science major with a passion for software development. I love solving complex problems and building innovative solutions. My skills include programming languages like JavaScript, Python, and Java, as well as web development frameworks like React and Node.js. I am constantly learning and exploring new technologies to stay up-to-date with the latest industry trends. In my free time, I enjoy working on personal coding projects and contributing to open-source communities.</p>
                </div>
            </section>
            {/* scroll icon, allow scrolling between pages, smooth transition. */}
        </div>
    );
};
