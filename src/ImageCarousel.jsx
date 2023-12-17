import { useState } from "react";

export default function ImageCarousel ({images, type}) {

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
            <div style={{width: "80%"}}>
                <div>
                    <img style={{maxWidth:"100%"}} src= {images[index]}/>
                </div>
                <div style={{display: "flex", gap:"20px", justifyContent: "center"}}>
                    <button onClick={handlePrev} >{"<"}</button>
                    <button onClick={handleNext}>{">"}</button>
                </div>
            </div>
        )
    } else {
        return (
            <div style={{width: "500%"}}>
                <div>
                    <img style={{maxWidth:"100%", borderRadius: "10px"}} src= {images[index]}/>
                </div>
                <div style={{display: "flex", gap:"20px", justifyContent: "center"}}>
                    <button onClick={handlePrev} >{"<"}</button>
                    <button onClick={handleNext}>{">"}</button>
                </div>
            </div>
        )
    }

}