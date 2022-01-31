import React from "react";

const GenerateBoxes = (props) => {
    const {colorList} = props

    
    return (
        <div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}}>
                    {colorList.map((color,index)=>(
                        <div key={index}>
                            <p>{color}</p>
                            <p style={{backgroundColor:color,width:100,height:100,margin:5}}></p>
                        </div>
                            
                    ))}
                </div>
        </div>

    )
} 

export default GenerateBoxes;