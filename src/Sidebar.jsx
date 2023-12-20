import { useEffect, useState } from "react"

export default function Sidebar({images, type = "desktop"}) {

    const [page, setPage] = useState(0)
    function handleClick(index) {
        scrollTo(0, window.innerHeight * index)
        updateSidebar()
    }

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         const scroll = window.scrollY
    //         const page = Math.floor(scroll * window.innerHeight)
    //         setPage(page)
    //     })
    // },[])

    

    function updateSidebar() {
        // console.log("current Top:" + document.documentElement.scrollTop)
        let scrollVar = Math.round(document.documentElement.scrollTop/window.innerHeight)
        // console.log(scrollVar)
        setPage(() => scrollVar)
    }

    useEffect(() => {
        // console.log("height:" + window.innerHeight)
        // console.log("top:" + document.documentElement.scrollTop)
        window.addEventListener('scroll', updateSidebar);
        addEventListener("wheel", (event) => {scrollBy(0, Math.sign(event.deltaY)*window.innerHeight);});
        // onwheel = (event) => {};

        return () =>  {
            window.removeEventListener('scroll', updateSidebar);
        }

    }, [])

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
                {/* <div></div> */}
            </div>
    )
}