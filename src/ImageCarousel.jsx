import { useState } from "react";

export default function ImageCarousel ({images = [], type = "desktop", color = "white"}) {

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
        console.log(images)
        if (index == (images.length - 1)){
            setIndex(0)
        }
        else{
            setIndex(index + 1)
        }
    }
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
                <img className="noselect" style={{borderRadius: "5%",width:"100%", height:"auto", backgroundSize: "contain"}} src= {images[index]}/>
                <div style={{display: "flex", gap:"20px", justifyContent: "center"}}>
                    <button className="noselect" style={{backgroundColor: color}} onClick={handlePrev} >{"<"}</button>
                    <button className="noselect" style={{backgroundColor: color}} onClick={handleNext}>{">"}</button>
                </div>
            </div>
        )
    }

}