import React from "react";

export const Shoes=()=>{
    return(
        <div style={{border:'1px solid black',width:'1200px',height:'660px',display:'flex',flexDirection:'column'}}>
            <div style={{border:'1px solid black',flex:'1',display:'flex',flexDirection:'row'}}>
                <div style={{flex:'1',textAlign:'center',marginTop:'10px'}}>
                    <a style={{fontFamily:'Arial,sans serif',fontSize:'25px',fontWeight:'bolder'}}>Wearup. 
                        <a style={{fontFamily:'Arial,sans-serif',fontSize:'15px',fontWeight:'lighter',marginLeft:'20px'}}>|</a>
                        <a style={{fontFamily:'Arial,sans-serif',fontSize:'15px',fontWeight:'lighter',marginLeft:'20px'}}>Order Overview</a></a>
                </div>
                <div style={{flex:'2',display:'flex',flexDirection:'row'}}>
                    <div style={{flex:'0.7'}}></div>
                    <div style={{flex:'1',display:'flex'}}>
                        <p style={{fontFamily:'arial,sans serif',fontWeight:'bold',fontSize:'15px'}}>Information</p>
                    </div>
                    <div style={{flex:'1'}}>
                    <p style={{fontFamily:'arial,sans serif',fontWeight:'bold',fontSize:'15px'}}>2 Payment Details -----</p>
                    </div>
                    <div style={{flex:'1'}}>
                    <p style={{fontFamily:'arial,sans serif',fontWeight:'bold',fontSize:'15px'}}>3. Completed Order</p>
                    </div>
                </div>
            </div>
            <div style={{flex:'12',display:'flex',flexDirection:'row'}}>
                <div style={{flex:'1',display:'flex',flexDirection:'row'}}>
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
                        <div style={{flex:'3',display:'flex',flexDirection:'column', marginRight:'80px',marginTop:'10px',marginBottom:'10px',borderRadius:'10px'}}>
                            <div style={{flex:'1'}}>
                                <a style={{fontFamily:'arial,sans serrif',fontWeight:'bold',fontSize:'15px'}}>Available Shipping Method </a>
                            </div>
                            <div style={{border:'1px solid black',flex:'3',margin:'5px',borderRadius:'10px',display:'flex'}}>
                                <div style={{flex:'1',textAlign:'center',fontFamily:'arial,sans serif',fontWeight:'bold',paddingTop:'20px'}}>FedEx</div>
                                <div style={{flex:'2',marginTop:'15px'}}>
                                    <a style={{fontFamily:'Arial , sans serif',fontWeight:'bold',fontSize:'15px'}}>Fedex Delivery</a><br/>
                                    <a style={{fontFamily:'arial,sans sarif',fontSize:'15px',paddingBottom:'55px'}}>Delivery 2-3 days work</a>
                                </div>
                                <div style={{flex:'1',textAlign:'center',paddingTop:'20px'}}>
                                    <a style={{fontFamily:'Arial,sans serif',fontWeight:'bold'}}>Free</a>
                                </div>
                            </div>
                            <div style={{flex:'1'}}>
                                <a style={{fontFamily:'arial,sans serrif',fontWeight:'bold',fontSize:'15px'}}>Available International Shipping:</a>
                            </div>
                            <div style={{backgroundColor:'whitesmoke',flex:'3',margin:'5px',borderRadius:'10px',display:'flex'}}>
                                <div style={{flex:'1',textAlign:'center',fontFamily:'arial,sans serif',fontWeight:'bold',paddingTop:'20px'}}></div>
                                <div style={{flex:'2',marginTop:'15px'}}>
                                    <a style={{fontFamily:'Arial , sans serif',fontWeight:'bold',fontSize:'15px'}}>DHL Delivery</a><br/>
                                    <a style={{fontFamily:'arial,sans sarif',fontSize:'15px',paddingBottom:'55px'}}>Delivery 1-3 days work</a>
                                </div>
                                <div style={{flex:'1',textAlign:'center',paddingTop:'20px'}}>
                                    <a style={{fontFamily:'Arial,sans serif',fontWeight:'bold'}}>$ 12.00</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:'whitesmoke',flex:'1',display:'flex',flexDirection:'row'}}>
                    <div style={{flex:'1'}}></div>
                    <div style={{flex:'6',display:'flex',flexDirection:'column'}}>
                        <div style={{flex:'1'}}>
                            <p style={{fontFamily:'Arial,sans serif',fontWeight:'bolder',fontSize:'18px'}}>Payment Details</p>
                            <a style={{fontFamily:'arial,sans serif',fontSize:'15px'}}>Complete your purchase item by providing your<br/>payment details order.</a>
                        </div>
                        <div style={{flex:'2.5',display:'flex',flexDirection:'column'}}>
                            <div style={{flex:'1',marginTop:'10px'}}>
                                <a style={{fontFamily:'arial,sans serif',fontWeight:'bold',fontSize:'15px'}}>Email Address</a>
                            </div>
                            <div style={{border:'1px solid black',flex:'2',borderRadius:'10px'}}></div>
                            <div style={{flex:'1',marginTop:'10px'}}>
                                <a style={{fontFamily:'arial,sans serif',fontWeight:'bold',fontSize:'15px'}}>Card Details</a>
                            </div>
                            <div style={{border:'1px solid black',flex:'2',borderRadius:'10px'}}></div>
                            <div style={{flex:'1',marginTop:'10px'}}>
                                <a style={{fontFamily:'arial,sans serif',fontWeight:'bold',fontSize:'15px'}}>Card Holder</a>
                            </div>
                            <div style={{border:'1px solid black',flex:'2',borderRadius:'10px'}}></div>
                        </div>
                        <div style={{flex:'3',display:'flex',flexDirection:'column'}}>
                            <div style={{flex:'0.5',marginTop:'10px'}}>
                                <a style={{fontFamily:'arial,sans serif',fontWeight:'bold',fontSize:'15px'}}>Billing Address</a>
                            </div>
                            <div style={{flex:'2',display:'flex',flexDirection:'column'}}>
                                <div style={{border:'1px solid black',flex:'1',borderRadius:'10px 10px 0 0'}}></div>
                                <div style={{border:'1px solid black',flex:'1',borderRadius:'0 0 10px 10px',borderTop:'white'}}></div>
                            </div>
                            <div style={{flex:'3',display:'flex',flexDirection:'column'}}>
                                <div style={{flex:'1.8'}}>
                                    <div style={{paddingTop:'8px',display:'flex'}}>
                                        <a style={{fontFamily:'arial,sans serif',fontSize:'13px',fontWeight:'bold'}}>Subtotal</a><br/>
                                        <a style={{fontFamily:'arial,sans serif',fontSize:'13px',fontWeight:'bold',marginLeft:'305px'}}>$ 397.00</a>
                                    </div>
                                    <div style={{paddingTop:'8px',display:'flex'}}>
                                        <a style={{fontFamily:'arial,sans serif',fontSize:'13px',fontWeight:'bold'}}>Vat (20%)</a><br/>
                                        <a style={{fontFamily:'arial,sans serif',fontSize:'13px',fontWeight:'bold',marginLeft:'315px'}}>$ 2.89</a>
                                    </div>
                                    <div style={{paddingTop:'8px',display:'flex'}}>
                                        <a style={{fontFamily:'arial,sans serif',fontSize:'13px',fontWeight:'bold'}}>Total</a><br/>
                                        <a style={{fontFamily:'arial,sans serif',fontSize:'13px',fontWeight:'bold',marginLeft:'330px'}}>$ 399.89</a>
                                    </div>
                                </div>
                                <div style={{backgroundColor:'black',flex:'1',borderRadius:'10px',textAlign:'center',marginBottom:'10px'}}>
                                    <p style={{fontFamily:'arial ,sans serif',fontWeight:'bold',fontSize:'15px',color:'white'}}>Pay $ 399.89</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{flex:'1.5'}}></div>
                </div>
            </div>
        </div>
    )
}