import { useEffect, useState } from "react"

export default function Sidebar({images}) {

    const [page, setPage] = useState(0)
    function handleClick(index) {
        setPage(index)
        scrollTo(0, window.innerHeight * index)
    }

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         const scroll = window.scrollY
    //         const page = Math.floor(scroll * window.innerHeight)
    //         setPage(page)
    //     })
    // },[])

    

    function updateSidebar() {
        console.log("IN FUNCTION")
        let scrollVar = Math.floor(document.documentElement.scrollTop/window.innerHeight)
        setPage(() => scrollVar)
    }

    useEffect(() => {
        window.addEventListener('scroll', updateSidebar);
        addEventListener("wheel", (event) => {scrollBy(0, Math.sign(event.deltaY)*window.window.innerHeight);});
        // onwheel = (event) => {};

        return () => window.removeEventListener('scroll', updateSidebar);

    }, [])


    
    return (
        <div style={{
            position:"fixed", 
            display:"flex", 
            justifyContent:"center", 
            flexDirection:"column", 
            alignItems:"end", 
            margin:"0px 20px", 
            gap:"40px", 
            zIndex:"0", 
            width:"auto",
            top:"7%",
        }} >
            {/* put tool image, draw line straight down */}
            {/* on hover, animation that increases  */}
            {/* by the end, overlay goes over whole page. maybe word comes out of right side.  */}
            {
                images.map((image, index) => {
                    return (
                        index === page ?
                            <img key={index} onClick={() => handleClick(index)} className="sidebar-img-selected noselect" src={image}/>
                        :
                            <img key={index} onClick={() => handleClick(index)} className="sidebar-img noselect" src={image}/>
                            // {/* <div style={{height: "1px", width: "100%", backgroundColor: "white"}}></div> */}
                    )
                })
            }
            {/* <div></div> */}
        </div>
    )
}