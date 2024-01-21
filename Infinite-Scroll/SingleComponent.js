import React from 'react';

function SingleComponent(props) {
  return (
    <div className="container" style={{
        marginBottom : "5%",
        // border : "2px solid green",
        height : "280px"
    }}>
        <div className="card" style={{
            // border : "1px solid yellow",
            width : "100%",
            height : "240px"
        }}>
            <div className="card-body" style={{
                backgroundColor : "rgb(12, 25, 37)", 
                color : "#bfa181",
                // border : "2px solid white"
            }}>
                <h3 className="card-title">{props.title}</h3>
                <p className="card-text">{props.info}</p>
            </div>
        </div>
    </div>
  )
}

export default SingleComponent;
