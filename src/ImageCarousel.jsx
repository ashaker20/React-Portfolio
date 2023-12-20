import { useState } from "react";

export default function ImageCarousel ({images = [], type = "desktop", color = "white", userType = "desktop"}) {

    const [index, setIndex] = useState(0)

    function handlePrev () {
        if (index == 0){
            setIndex(images.length - 1)
        }
        else{
            setIndex(index - 1)
        }
    }
    function handleNext () {
        if (index == (images.length - 1)){
            setIndex(0)
        }
        else{
            setIndex(index + 1)
        }
    }

    if (userType === "desktop") {
        if (type === "mobile") {
            return (
                <div style={{overflow:"hidden", maxHeight:"9999px"}}>
                    <img className="noselect" style={{borderRadius: "5%",width:"auto", height:"35vw", backgroundSize: "contain"}} src= {images[index]}/>
                    <div style={{display: "flex", gap:"20px", justifyContent: "center"}}>
                        <button className="noselect" style={{backgroundColor: color}} onClick={handlePrev} >{"<"}</button>
                        <button className="noselect" style={{backgroundColor: color}} onClick={handleNext}>{">"}</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{maxWidth: "50%"}}>
                    <img className="noselect" style={{borderRadius: "5%",width:"100%", height:"auto", backgroundSize: "contain", border:"2px solid gray"}} src= {images[index]}/>
                    <div style={{display: "flex", gap:"20px", justifyContent: "center"}}>
                        <button className="noselect" style={{backgroundColor: color}} onClick={handlePrev} >{"<"}</button>
                        <button className="noselect" style={{backgroundColor: color}} onClick={handleNext}>{">"}</button>
                    </div>
                </div>
            )
        }
    } else {
        if (type === "mobile") {
            return (
                <div style={{overflow:"hidden", maxHeight:"9999px"}}>
                    <img className="noselect" style={{borderRadius: "5%",width:"auto", height:"50vh", backgroundSize: "contain"}} src= {images[index]}/>
                    <div style={{display: "flex", gap:"20px", justifyContent: "center"}}>
                        <button className="noselect" style={{backgroundColor: color}} onClick={handlePrev} >{"<"}</button>
                        <button className="noselect" style={{backgroundColor: color}} onClick={handleNext}>{">"}</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{maxWidth: "80%"}}>
                    <img className="noselect" style={{borderRadius: "5%",width:"100%", height:"auto", backgroundSize: "contain", border:"2px solid gray"}} src= {images[index]}/>
                    <div style={{display: "flex", gap:"20px", justifyContent: "center"}}>
                        <button className="noselect" style={{backgroundColor: color}} onClick={handlePrev} >{"<"}</button>
                        <button className="noselect" style={{backgroundColor: color}} onClick={handleNext}>{">"}</button>
                    </div>
                </div>
            )
        }
    }

}