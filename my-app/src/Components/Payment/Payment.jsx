import React from "react";

export const Payment=()=>{
    return(
        <div style={{border:'1px solid black',width:'1200px',height:'800px',display:'flex',flexDirection:'row'}}>
            <div style={{flex:'0.2'}}></div>
            <div style={{flex:'2',display:'flex',flexDirection:'column'}}>
                <div style={{border:'1px solid red',flex:'1.5'}}></div>
                <div style={{flex:'1.5',display:'flex',flexDirection:'column'}}>
                    <div style={{flex:'1'}}>
                        <p style={{fontFamily:'arial,sans sarif',fontWeight:'bold',fontSize:'20px'}}>Card Number</p>
                        <a style={{fontFamily:'arial,sans serif'}}>Enter the 16-digit card number on the card</a>
                    </div>
                    <div style={{border:'1px solid black',flex:'1',borderRadius:'10px',backgroundColor:'whitesmoke'}}></div>
                </div>
                <div style={{flex:'4',display:'flex',flexDirection:'column'}}>
                    <div style={{flex:'1',display:'flex'}}>
                        <div style={{flex:'1',fontFamily:'arial , sans serif'}}>
                            <p style={{fontWeight:'bold'}}>CVV Number</p>
                            <a>Enter the 3 or 4 digit number on the card</a>
                        </div>
                        <div style={{border:'1px solid black',flex:'1',borderRadius:'10px',marginTop:'10px',marginBottom:'10px',display:'flex'}}>
                            <div style={{flex:'4',textAlign:'center'}}>
                                <p style={{fontWeight:'bold'}}>327</p>
                            </div>
                            <div style={{flex:'1'}}></div>
                        </div>
                    </div>
                    <div style={{flex:'1',display:'flex'}}>
                        <div style={{flex:'1',fontFamily:'arial , sans serif'}}>
                            <p style={{fontWeight:'bold'}}>Expiry Date</p>
                            <a>Enter the expiry date of the card</a>
                        </div>
                        <div style={{border:'1px solid black',flex:'1',borderRadius:'10px',marginTop:'10px',marginBottom:'10px',display:'flex'}}>
                            <div style={{border:'1px solid black',flex:'2'}}></div>
                            <div style={{flex:'1'}}></div>
                            <div style={{border:'1px solid black',flex:'2'}}></div>
                        </div>
                    </div>
                    <div style={{flex:'1',display:'flex'}}>
                        <div style={{flex:'1',fontFamily:'arial , sans serif'}}>
                            <p style={{fontWeight:'bold'}}>Password</p>
                            <a>Enter the dynamic password</a>
                        </div>
                        <div style={{border:'1px solid black',flex:'1',borderRadius:'10px',marginTop:'10px',marginBottom:'10px',display:'flex'}}>
                            <div style={{flex:'4',textAlign:'center'}}></div>
                            <div style={{flex:'1'}}></div>
                        </div>
                    </div>
                    <div style={{backgroundColor:'blue',flex:'1',marginTop:'30px',marginBottom:'30px',borderRadius:'10px',textAlign:'center',fontWeight:'bold'}}>
                        <p style={{fontSize:'25px',color:'white',fontFamily:'arial,sans serif'}}>Pay Now</p>
                    </div>
                    <div style={{flex:'0.5'}}></div>
                </div>
            </div>
            <div style={{flex:'0.3'}}></div>
            <div style={{border:'1px solid black',flex:'1',display:'flex',flexDirection:"column"}}>
                <div style={{flex:'0.5',display:'flex',flexDirection:'column'}}>
                    <div style={{flex:'1',marginTop:'62px',marginLeft:'120px',backgroundColor:'blue',boxShadow:'2px 5px 35px blue', marginRight:'120px'}}></div>
                </div>
                <div style={{flex:'1',marginRight:'60px', marginLeft:'60px',borderRadius:'10px 10px 0 0'}}></div>
                <div style={{flex:'4',display:'flex',flexDirection:'column',backgroundColor:'whitesmoke',borderRadius:'20px'}}>
                    <div style={{flex:'0.8',marginRight:'60px',marginLeft:'60px',textAlign:'center', backgroundColor:'white',borderRadius:'0 0 10px 10px'}}>
                        <p style={{fontFamily:'arial,sans sarif'}}>Jonothan Michael</p>
                    </div>
                    <div style={{flex:'1',fontFamily:'arial,sans sarif',display:'flex',flexDirection:'column'}}>
                        <a style={{marginLeft:'60px',paddingTop:'20px'}}>Company <a style={{paddingLeft:'150px'}}>Apple</a></a><br/>
                        <a style={{marginLeft:'60px'}}>Order Number <a style={{paddingLeft:'100px'}}>1266201</a></a><br/>
                        <a style={{marginLeft:'60px'}}>Product <a style={{paddingLeft:'110px'}}>MackBook Ale</a></a><br/>
                        <a style={{marginLeft:'60px',}}>VAT (20%) <a style={{paddingLeft:'135px'}}>$100.00</a></a><br/>
                        <div style={{flex:'1',display:'flex'}}>
                            <div style={{flex:'1',backgroundColor:'white',marginRight:'300px',marginTop:'50px',borderRadius:'0 100px 0 0'}}></div>
                            <div style={{flex:'1',backgroundColor:'white',marginTop:'50px',borderRadius:'100px 0 0 0'}}></div>
                        </div>
                    </div>
                    <div style={{flex:'0.5',display:'flex',flexDirection:'column'}}>
                        <div style={{flex:'0.4',display:'flex'}}>
                            <div style={{backgroundColor:'white',flex:'1',marginRight:'300px',borderRadius:'0 0 100px 0'}}></div>
                            <div style={{backgroundColor:'white',flex:'1',borderRadius:'0 0 0 100px'}}></div>
                        </div>
                        <div style={{flex:'2',fontFamily:'arial,sans sarif',display:'flex'}}>
                            <div style={{marginLeft:'60px',flex:'2'}}>
                                <p>You have to Pay</p>
                                <a style={{fontSize:'25px',fontWeight:'bold'}}>549<a style={{fontSize:'15px'}}>.99 USD</a></a>
                            </div>
                            <div style={{flex:'1'}}></div>
                        </div>
                    </div>
                </div>
                <div style={{flex:'0.3'}}></div>
            </div>
        </div>
    )
}