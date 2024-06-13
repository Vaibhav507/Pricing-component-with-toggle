import React, { useState } from "react";

function Card() {
    
    const[basic,setBasic] = useState("$199.99")
    const[prof,setProf] = useState("$249.99")
    const[master,setMaster] = useState("$399.99")
    const[dot,setdot] = useState("dot");

    const change = () => {
        if(dot=="dot") {
            setdot("dot right");
            setBasic("$19.99");
            setMaster("$39.99");
            setProf("$24.99");
        }
        else if (dot=="dot right") {
            setdot("dot");
            setBasic("$199.99");
            setMaster("$399.99");
            setProf("$249.99");
        }
        
    };

    return(
        <div className="container">
            <div className="top-section">
                <h2>Our Pricing</h2>
                <div className="switch">
                    <p>Annually</p>
                    <div className="toggle" onClick={change}>
                        <div className={dot}></div>
                    </div>
                    <p>Monthly</p>
                </div>
            </div>
            <div className="bottom-section">
                <div className="card1">
                    <h3>Basic</h3>
                    <h1>{basic}</h1>
                    <div className="info">
                        <hr />
                        <p>500 GB Storage</p>
                        <hr />
                        <p>2 Users Allowed</p>
                        <hr />
                        <p>Send up to 3 GB</p>
                        <hr />
                        <div className="button">
                            <p>Learn More</p>
                        </div>
                    </div>
                </div>
                <div className="card2">
                    <h3>Professional</h3>
                    <h1>{prof}</h1>
                    <div className="info">
                        <hr />
                        <p>1 TB Storage</p>
                        <hr />
                        <p>5 Users Allowed</p>
                        <hr />
                        <p>Send up to 10 GB</p>
                        <hr />
                        <div className="button2">
                            <p>Learn More</p>
                        </div>
                    </div>
                </div>
                <div className="card1">
                    <h3>Master</h3>
                    <h1>{master}</h1>
                    <div className="info">
                        <hr />
                        <p>2 TB Storage</p>
                        <hr />
                        <p>10 Users Allowed</p>
                        <hr />
                        <p>Send up to 20 GB</p>
                        <hr />
                        <div className="button">
                            <p>Learn more</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
/*
  
  &dollar;19.99
  &dollar;199.99
  

  &dollar;24.99
  &dollar;249.99
  

  &dollar;39.99
  &dollar;399.99
  
*/
    );
 }

 export default Card