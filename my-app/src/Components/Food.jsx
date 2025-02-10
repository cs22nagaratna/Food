import React,{useState} from "react";
import { FaCircle } from "react-icons/fa";
import { BsWindowSidebar } from "react-icons/bs";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaShieldHalved } from "react-icons/fa6";
import { CiSaveUp2 } from "react-icons/ci";
import { IoMdRefresh } from "react-icons/io";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RxCopy } from "react-icons/rx";
import { FaLock } from "react-icons/fa";
import { CiBezier } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";



export const Food=()=>{
    const [liked,setLiked]=useState(false);
    
    return(
        <div style={{border:'1px solid black',width:'1000px',height:'120px',display:"flex",flexDirection:"column"}}>
            {/* <div style={{border:'1px solid black',flex:'1',display:'flex',flexDirection:'row'}}>
                <div style={{flex:'1',display:'flex'}}>
                    <div style={{margin:'5px',marginTop:'15px',marginBottom:'15px'}}>
                        {!liked && <FaCircle  style={{ fill: "red" }}/>}
                    </div>
                    <div style={{margin:'5px',marginTop:'15px',marginBottom:'15px'}}>
                        {!liked && <FaCircle  style={{ fill: "yellow" }}/>}
                    </div>
                    <div style={{margin:'5px',marginTop:'15px',marginBottom:'15px'}}>
                        {!liked && <FaCircle  style={{ fill: "green" }}/>}
                    </div>
                    <div style={{margin:'5px',marginTop:'15px',marginBottom:'15px'}}>
                        <BsWindowSidebar />
                    </div>
                    <div style={{margin:'5px',marginTop:'15px',marginBottom:'15px'}}>
                    <MdOutlineArrowBackIos />
                    </div>    
                    <div style={{margin:'5px',marginTop:'15px',marginBottom:'15px'}}>
                    <MdOutlineArrowForwardIos />
                    </div> 
                </div>
                <div style={{flex:'2',flexDirection:'row',display:'flex'}}>
                    <div style={{margin:'5px',marginTop:'15px',marginBottom:'15px'}}>
                        <FaShieldHalved />
                    </div>
                    <div style={{border:'1px solid black',flex:'17',margin:'8px',borderRadius:'10px'}}>
                        <div style={{justifyContent:'center',textAlign:'center'}}>
                            <FaLock /><a>figma.com</a>
                        </div>
                        <div  style={{justifyContent:'right',display:'flex',alignItems:'center'}}><IoMdRefresh /></div>
                    </div>
                </div>
                <div style={{flex:'1',display:'flex',justifyContent:'right'}}>
                    <div style={{margin:'5px',marginTop:'15px',marginBottom:'15px'}}>
                        <FaRegArrowAltCircleDown />
                    </div>
                    <div style={{margin:'5px',marginTop:'15px',marginBottom:'15px'}}>
                        <CiSaveUp2 />
                    </div>
                    <div style={{margin:'5px',marginTop:'15px',marginBottom:'15px'}}>
                        <FaPlus />
                    </div>
                    <div style={{margin:'5px',marginTop:'15px',marginBottom:'15px'}}> 
                        <RxCopy />
                    </div>
                </div>
            </div>
            
            <div style={{border:'1px solid black',flex:'1.5',flexDirection:'row',display:'flex'}}>
                <div style={{flex:'1',display:'flex'}}>
                    <h2>Food Slice</h2>
                </div>
                <div style={{flex:'3',flexDirection:'row',display:'flex'}}>
                    <div style={{border:'1px solid black',flex:'3',display:'flex',marginRight:'10px',marginTop:'20px',marginBottom:'20px',borderRadius:'10px'}}>
                        <p>search food</p>
                    </div>
                    <div style={{flex:'1',display:'flex'}}>
                        <div style={{border:'1px solid black',flex:'1',marginTop:'20px',marginBottom:'20px',backgroundColor:'red'}}>
                            <p>Filter <FaFilterCircleDollar /></p>
                            
                        </div>
                    </div>
                    <div style={{flex:'1'}}></div>
                </div>
                <div style={{flex:'2',display:'flex'}}>
                    <div style={{ flex:'2'}}></div>
                    <div style={{ flex:'0.5',marginTop:'40px',marginBottom:'20px'}}>
                    <FaRegBell />

                    </div>
                    <div style={{ border:'1px solid black',flex:'3',display:'flex',marginTop:'20px',marginBottom:'20px'}}>
                        <div style={{border:'1px solid black',flex:'1',display:'flex'}}>
                            <div style={{border:'1px solid black',borderRadius:'20px',flex:'1',margin:'10px'}}></div>
                        </div>
                        <div style={{border:'1px solid black',flex:'3'}}>David Brown</div>
                    </div>
                </div>
            </div> */}
            <div style={{flex:'1.5',flexDirection:'row',display:'flex'}}>
                <div style={{flex:'1',display:'flex',flexDirection:'row'}}>
                    <div style={{flex:'1',display:'flex'}}>
                        <div style={{margin:'3px',marginTop:'15px'}}>
                            {!liked && <FaCircle  style={{ fill: "red" }}/>}
                        </div>
                        <div style={{margin:'3px',marginTop:'15px'}}>
                            {!liked && <FaCircle  style={{ fill: "yellow" }}/>}
                        </div>
                        <div style={{margin:'3px',marginTop:'15px'}}>
                            {!liked && <FaCircle  style={{ fill: "green" }}/>}
                        </div>
                    </div>
                    <div style={{flex:'2',display:'flex'}}>
                        <div style={{flex:'1',marginTop:'15px',textAlign:'center'}}>
                            <BsWindowSidebar />
                        </div>
                        <div style={{flex:'1',marginTop:'15px',textAlign:'center'}}>
                            <MdOutlineArrowBackIos />
                        </div>
                        <div style={{flex:'1',marginTop:'15px',textAlign:'center'}}>
                            <MdOutlineArrowForwardIos />
                        </div>
                        <div style={{flex:'1'}}></div>
                    </div>
                </div>
                <div style={{flex:'3',display:'flex'}}>
                    <div style={{flex:'2'}}></div>
                    <div style={{flex:'1',marginTop:'15px',textAlign:'center'}}>
                        <FaShieldHalved />
                    </div>
                    <div style={{flex:'12',display:'flex'}}>
                        <div style={{backgroundColor:'whitesmoke',flex:'1',margin:'8px',borderRadius:'5px',display:'flex'}}>
                            <div style={{flex:'10',textAlign:'center',marginTop:'5px'}}>
                                <FaLock /><a>figma.com</a>
                            </div>
                            <div style={{flex:'1',textAlign:'center',marginTop:'8px'}}>
                                <IoMdRefresh />
                            </div>
                        </div>
                    </div>
                    <div style={{flex:'1'}}></div>
                </div>
                <div style={{flex:'1',display:'flex'}}>
                    <div style={{flex:'1'}}></div>
                    <div style={{flex:'1',marginTop:'15px',textAlign:'center'}}>
                        <FaRegArrowAltCircleDown />
                    </div>
                    <div style={{flex:'1',marginTop:'15px',textAlign:'center'}}>
                        <CiSaveUp2 />
                    </div>
                    <div style={{flex:'1',marginTop:'15px',textAlign:'center'}}>
                        <FaPlus />
                    </div>
                    <div style={{flex:'1',marginTop:'15px',textAlign:'center'}}>
                        <RxCopy />
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:'whitesmoke',flex:'0.1'}}></div>
            <div style={{border:'1px solid ',flex:'2',display:'flex'}}>
                <div style={{flex:'1.3'}}>
                    <p style={{textAlign:'center',fontFamily:'Arial,san-serif'}}>foodslice</p>
                </div>
                <div style={{flex:'5',display:'flex'}}>
                    <div style={{flex:'1'}}></div>
                    <div style={{flex:'8',display:'flex'}}>
                        <div style={{border:'1px solid black',backgroundColor:'whitesmoke', flex:'2.5',margin:'10px', borderRadius:'10px'}}>
                            <p style={{marginLeft:'10px',fontFamily:'Arial ,sans serif'}}>Search food</p>
                        </div>
                        <div style={{border:'1px solid red',backgroundColor:'red',margin:'10px', flex:'1',borderRadius:'10px'}}>
                            <p style={{color:'white',marginLeft:'10px',fontFamily:'Arial,sans-serif'}}>filter</p>
                        </div>
                    </div>
                    <div style={{flex:'2'}}></div>
                </div>
                <div style={{flex:'1'}}></div>
                <div style={{flex:'2',display:'flex'}}>
                    <div style={{flex:'1',textAlign:'center',marginTop:'20px'}}>
                        <CiBezier />
                    </div>
                    <div style={{border:'1px solid whitesmoke',backgroundColor:'whitesmoke',margin:'10px', flex:'4',display:'flex'}}>
                        <div style={{border:'1px solid black',flex:'1',margin:'10px',borderRadius:'80px'}}></div>
                        <div style={{flex:'5',fontFamily:'arial,sans serif'}}>
                            <p>David Brown<IoIosArrowDown /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 