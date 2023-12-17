

export default function Sidebar({images}) {
    
    return (
        <div style={{
            position:"absolute", 
            display:"flex", 
            justifyContent:"center", 
            flexDirection:"column", 
            alignItems:"end", 
            margin:"0px 20px", 
            gap:"40px", 
            zIndex:"0", 
            width:"auto",
        }} >
            {/* put tool image, draw line straight down */}
            {/* on hover, animation that increases  */}
            {/* by the end, overlay goes over whole page. maybe word comes out of right side.  */}
            {
                images.map((image) => {
                    return (
                            <img className="sidebar-img" src={image}/>
                            // {/* <div style={{height: "1px", width: "100%", backgroundColor: "white"}}></div> */}
                    )
                })
            }
            {/* <div></div> */}
        </div>
    )
}