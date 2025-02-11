import React from "react";

export const Shoes=()=>{
    return(
        <div style={{border:'1px solid black',width:'1200px',height:'660px',display:'flex',flexDirection:'column'}}>
            <div style={{border:'1px solid red',flex:'1',display:'flex',flexDirection:'row'}}>
                <div style={{flex:'1',textAlign:'center',marginTop:'10px'}}>
                    <a style={{fontFamily:'Arial,sans serif',fontSize:'25px',fontWeight:'bolder'}}>Wearup. 
                        <a style={{fontFamily:'Arial,sans-serif',fontSize:'15px',fontWeight:'lighter',marginLeft:'20px'}}>|</a>
                        <a style={{fontFamily:'Arial,sans-serif',fontSize:'15px',fontWeight:'lighter',marginLeft:'20px'}}>Order Overview</a></a>
                </div>
                <div style={{border:'1px solid darkblue',flex:'2',display:'flex',flexDirection:'row'}}>
                    <div style={{flex:'0.7'}}></div>
                    <div style={{border:'1px solid black',flex:'1'}}></div>
                    <div style={{border:'1px solid black',flex:'1'}}></div>
                    <div style={{border:'1px solid black',flex:'1'}}></div>
                </div>
            </div>
            <div style={{border:'1px solid red',flex:'12',display:'flex',flexDirection:'row'}}>
                <div style={{border:'1px solid darkblue',flex:'1',display:'flex',flexDirection:'row'}}>
                    <div style={{flex:'1'}}></div>
                    <div style={{flex:'6',display:'flex',flexDirection:'column'}}>
                        <div style={{flex:'1'}}>
                            <p style={{fontFamily:'Arial,sans serif',fontWeight:'bolder',fontSize:'18px'}}>Summary Order</p>
                            <a style={{fontFamily:'arial,sans serif',fontSize:'15px'}}>Check your items and select your shipping for better<br/>experience order item.</a>
                        </div>
                        <div style={{border:'1px solid black', flex:'4',display:'flex', marginRight:'80px',marginTop:'10px',marginBottom:'10px',borderRadius:'10px'}}>
                            <div style={{flex:'1',margin:'15px',display:'flex',flexDirection:'column'}}>
                                <div style={{flex:'1',display:'flex',flexDirection:'row'}}>
                                    <div style={{border:'1px solid black',flex:'0.7',borderRadius:'5px',margin:'5px'}}></div>
                                    <div style={{flex:'2'}}>
                                        <a style={{fontFamily:'arial,sans serif',fontSize:'14px',fontWeight:'bold'}}>NewBalance 57/40 Men's <a style={{fontWeight:'lighter',marginLeft:'30px'}}>42 EU-8.5 US</a></a><br/>
                                        <a style={{fontFamily:'arial,sans serif',fontSize:'14px',fontWeight:'bold'}}>Sneakers-Mindful Grey</a><br/>
                                        <p style={{fontWeight:'bold'}}>$  129.00</p>
                                    </div>
                                </div>
                                <div style={{flex:'1',display:'flex',flexDirection:'row'}}>
                                    <div style={{border:'1px solid black',flex:'0.7',borderRadius:'5px',margin:'5px'}}></div>
                                    <div style={{flex:'2'}}>
                                        <a style={{fontFamily:'arial,sans serif',fontSize:'14px',fontWeight:'bold'}}>NewBalance 57/40 Men's <a style={{fontWeight:'lighter',marginLeft:'30px'}}>42 EU-8.5 US</a></a><br/>
                                        <a style={{fontFamily:'arial,sans serif',fontSize:'14px',fontWeight:'bold'}}>Sneakers-Mindful Grey</a><br/>
                                        <p style={{fontWeight:'bold'}}>$  129.00</p>
                                    </div>
                                </div>
                                <div style={{flex:'1',display:'flex',flexDirection:'row'}}>
                                    <div style={{border:'1px solid black',flex:'0.7',borderRadius:'5px',margin:'5px'}}></div>
                                    <div style={{flex:'2'}}>
                                        <a style={{fontFamily:'arial,sans serif',fontSize:'14px',fontWeight:'bold'}}>NewBalance 57/40 Men's <a style={{fontWeight:'lighter',marginLeft:'30px'}}>42 EU-8.5 US</a></a><br/>
                                        <a style={{fontFamily:'arial,sans serif',fontSize:'14px',fontWeight:'bold'}}>Sneakers-Mindful Grey</a><br/>
                                        <p style={{fontWeight:'bold'}}>$  129.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{border:'1px solid darkblue',flex:'3',display:'flex',flexDirection:'column', marginRight:'80px',marginTop:'10px',marginBottom:'10px',borderRadius:'10px'}}>
                            <div style={{border:'1px solid red',flex:'1'}}></div>
                            <div style={{border:'1px solid red',flex:'3'}}></div>
                            <div style={{border:'1px solid red',flex:'1'}}></div>
                            <div style={{border:'1px solid red',flex:'3'}}></div>
                        </div>
                    </div>
                </div>
                <div style={{border:'1px solid darkblue',flex:'1'}}></div>
            </div>
        </div>
    )
}