import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { MdErrorOutline } from "react-icons/md";



export const Order=()=>{
    return(
        <div style={{border:'1px solid black',width:'350px',height:'700px',display:'flex',flexDirection:'column',overflow:'hidden'}}>
            <div style={{border:'1px solid black',flex:'1',borderRadius:'30px',margin:'10px',display:'flex'}}>
                <div style={{flex:'2',justifyContent:'space-between',textAlign:'center',fontFamily:'Arial ,sans-serif',fontSize:'small'}}><p>Find food or beverages  </p></div>
                <div style={{flex:'2',textAlign:'end',marginRight:'20px',marginTop:'12px'}}><IoSearch /> </div>
            </div>
            <div style={{border:'1px solid whitesmoke',flex:'25',display:'flex',flexDirection:'column',margin:'10px',borderRadius:'10px' }}>
                <div style={{flex:'1',display:'flex',flexDirection:'column'}}>
                    <div style={{flex:1,display:'flex'}}>
                        <div style={{flex:'2',fontSize:'medium',fontWeight:'bold',fontFamily:'Arial ,sans serif',marginLeft:'10px'}}>
                            <p>Customer Information</p>
                        </div>
                        <div style={{flex:'1',textAlign:'end',marginRight:'10px',marginTop:'10px'}}>
                            <MdErrorOutline />
                        </div>
                    </div>
                    <div style={{backgroundColor:'whitesmoke',flex:'1',borderRadius:'10px',margin:'10px'}}>
                        <a style={{fontSize:'small',fontFamily:'Arial ,sans serif',marginLeft:'10px'}}>Customer name</a><br></br>
                        <a style={{fontSize:'medium',fontWeight:'bold',fontFamily:'Arial ,sans serif',marginLeft:'10px'}}>Emir Abiyyu</a>
                    </div>
                    <div style={{backgroundColor:'whitesmoke',flex:'1',borderRadius:'10px',margin:'10px',display:'flex'}}>
                        <div style={{flex:'5'}}>
                            <a style={{fontSize:'small',fontFamily:'Arial ,sans serif',marginLeft:'10px'}}>Number person</a><br></br>
                            <a style={{fontSize:'medium',fontWeight:'bold',fontFamily:'Arial ,sans serif',marginLeft:'10px'}}>12 Person Table</a>
                        </div>
                        <div style={{flex:'1',marginTop:'10px',display:'flex'}}>
                            <div style={{flex:'1'}}><FaMinus/></div>
                            <div style={{flex:'1'}}> 12</div>
                            <div style={{flex:'1'}}><AiFillPlusCircle/></div>
                        </div>
                    </div>
                </div>


                <div style={{flex:'2',display:'flex',flexDirection:'column'}}>
                    <div style={{flex:'1',fontSize:'medium',fontWeight:'bold',fontFamily:'Arial ,sans serif',marginLeft:'10px'}}>
                        <a>Current Order</a>
                    </div>
                    <div style={{flex:'19',display:'flex',flexDirection:'column',overflow:'hidden',backgroundColor:'whitesmoke',borderRadius:'10px', margin:'10px'}}>
                        <div style={{border:'1px solid white',flex:'1',display:'flex',flexDirection:'row',overflow:'hidden',margin:'10px',borderRadius:'10px'}}>
                            <div style={{flex:'1',backgroundColor:'white',display:'flex'}}>
                                <div style={{flex:'1',margin:'5px',backgroundColor:'whitesmoke'}}>
                                    <img src="https://bing.com/th?id=OSK.a5fc2506b4eaf08dabe0ff7a5065e95a" height={'50px'} width={'60px'}/> 
                                </div>
                            </div>
                            <div style={{backgroundColor:'white',flex:'3'}}>
                                <a style={{fontFamily:'sans-serif',fontWeight:'smoll',fontSize:'13px'}}>Japanese Chicken Gyoza</a><br></br>
                                <a style={{fontFamily:'Arial,sans serif',fontSize:'13px'}}>Rp 81.700,00</a><br></br>
                                <div style={{display:'flex'}}>
                                <div style={{}}><FaMinus/></div><div style={{}}>2</div><div style={{}}><AiFillPlusCircle/></div>
                                </div>
                            </div>
                        </div>
                        <div style={{border:'1px solid white',flex:'1',display:'flex',flexDirection:'row',overflow:'hidden',margin:'10px',borderRadius:'10px'}}>
                            <div style={{flex:'1',backgroundColor:'white',display:'flex'}}>
                                <div style={{flex:'1',margin:'5px',backgroundColor:'whitesmoke'}}>
                                    <img src="https://tse1.explicit.bing.net/th/id/OIP.nqnqyE5Al83nIdyLVMPi6wHaE8?rs=1&pid=ImgDetMain" height={'50px'} width={'60px'}/> 
                                </div>
                            </div>
                            <div style={{backgroundColor:'white',flex:'3'}}>
                                <a style={{fontFamily:'sans-serif',fontWeight:'smoll',fontSize:'13px'}}>Japanese Chicken Gyoza</a><br></br>
                                <a style={{fontFamily:'Arial,sans serif',fontSize:'13px'}}>Rp 81.700,00</a><br></br>
                                <div style={{display:'flex'}}>
                                <div style={{}}><FaMinus/></div><div style={{}}>2</div><div style={{}}><AiFillPlusCircle/></div>
                                </div>
                            </div>
                        </div>
                        <div style={{border:'1px solid white',flex:'1',display:'flex',flexDirection:'row',overflow:'hidden',margin:'10px',borderRadius:'10px'}}>
                            <div style={{flex:'1',backgroundColor:'white',display:'flex'}}>
                                <div style={{flex:'1',margin:'5px',backgroundColor:'whitesmoke'}}>
                                    <img src="https://www.mjandhungryman.com/wp-content/uploads/2022/04/toddler-dinner-ideas.jpg" height={'50px'} width={'60px'}/> 
                                </div>
                            </div>
                            <div style={{backgroundColor:'white',flex:'3'}}>
                                <a style={{fontFamily:'sans-serif',fontWeight:'smoll',fontSize:'13px'}}>Japanese Chicken Gyoza</a><br></br>
                                <a style={{fontFamily:'Arial,sans serif',fontSize:'13px'}}>Rp 81.700,00</a><br></br>
                                <div style={{display:'flex'}}>
                                <div style={{}}><FaMinus/></div><div style={{}}>2</div><div style={{}}><AiFillPlusCircle/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{flex:'2',display:'flex',flexDirection:'column'}}>
                    <div style={{flex:'2',display:'flex',flexDirection:'column'}}>
                        <div style={{flex:'1',fontSize:'medium',fontWeight:'bold',fontFamily:'Arial ,sans serif',marginLeft:'10px',marginBottom:'10px'}}>
                            <a>Payment Summary</a>
                        </div>
                        <div style={{flex:'1',fontFamily:'Arial,sans serif',fontSize:'12px',display:'flex',marginLeft:'10px',marginBottom:'5px'}}>
                            <a>Subtotal</a><br/>
                            <a style={{textAlign:'end',marginLeft:'180px'}}>Rp 1,298,000.00</a>
                        </div>
                        <div style={{flex:'1',fontFamily:'Arial,sans serif',fontSize:'12px',display:'flex',marginLeft:'10px',marginBottom:'5px'}}>
                            <a>Discount sales</a><br/>
                            <a style={{textAlign:'end',marginLeft:'150px'}}>-Rp 120,000.00</a>
                        </div>
                        <div style={{flex:'1',fontFamily:'Arial,sans serif',fontSize:'12px',display:'flex',marginLeft:'10px'}}>
                            <a>Total tax</a><br/>
                            <a style={{textAlign:'end',marginLeft:'210px'}}>Rp 40,000</a>
                        </div>
                    </div>
                    <div style={{flex:'1',display:'flex',flexDirection:'column'}}>
                        <div style={{border:'1px solid black',marginTop:'5px',display:'flex', marginLeft:'10px',flex:'1',fontWeight:'bold',fontFamily:'arial,sans serif',
                            borderLeft:'white',borderRight:'white',borderBottom:'white'}}>
                            <a>Total </a>
                            <a style={{color:'green',marginLeft:'180px',fontFamily:'Arial,sans serif',fontSize:'13px'}}>Rp 1.218.000,00</a>
                        </div>
                        <div style={{flex:'3',backgroundColor:'black',borderRadius:'50px',marginBottom:'40px',fontFamily:'arial , sans serif'}}>
                            <p style={{color:'white',justifyContent:'center',alignItems:'center',textAlign:'center'}}> Order Now</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}