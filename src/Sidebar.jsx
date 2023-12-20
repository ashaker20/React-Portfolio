import { useEffect, useState } from "react"

export default function Sidebar({images, type = "desktop"}) {

    const [page, setPage] = useState(Math.round(document.documentElement.scrollTop/window.innerHeight))
    const [height, setHeight] = useState(document.documentElement.scrollTop)

    function handleClick(index) {
        scrollTo(0, window.innerHeight * index)
        updateSidebar()
    }

    function updateSidebar() {
        let scrollVar = Math.round(document.documentElement.scrollTop/window.innerHeight)
        setPage(() => scrollVar)
    }

    useEffect(() => {
        window.addEventListener('scroll', updateSidebar);
        addEventListener("wheel", (event) => {scrollBy(0, Math.sign(event.deltaY)*window.innerHeight);});
        return () =>  {
            window.removeEventListener('scroll', updateSidebar);
        }

    }, [])


    useEffect(() => {
        setHeight(window.innerHeight)
    }, [height])

    const isMobile = type === "mobile" ? true : false
    
    return (
        !isMobile &&
            <div style={{
                position:"fixed", 
                display:"flex", 
                justifyContent:"center", 
                flexDirection:"column", 
                alignItems:"end", 
                margin:"0px 40px", 
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
            </div>
    )
}