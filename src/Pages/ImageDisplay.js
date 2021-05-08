import React,{useState,useEffect} from "react"
function ImageDisplay(props) {
    console.log(props)
   return (
        <div>
            <img src={props.url}  width="800px"/>
     
        </div>
    )
}

export default ImageDisplay
