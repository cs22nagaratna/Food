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
import { FaFilterCircleDollar } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


export const Food=()=>{
    const [liked,setLiked]=useState(false);
    
    return(
        <div style={{border:'1px solid black',width:'1000px',height:'150px',display:"flex",flexDirection:"column"}}>
            <div style={{border:'1px solid black',flex:'1',display:'flex',flexDirection:'row'}}>
            <div style={{flex:'1',display:'flex'}}>
                    <div style={{margin:'5px',marginTop:'15px',marginBottom:'15px'}}>
                        {!liked && <FaCircle  style={{ fill: "orange" }}/>}
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
                        <div style={{border:'1px solid orange',flex:'1',marginTop:'20px',marginBottom:'20px',backgroundColor:'orange'}}>
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
            </div>
        </div>
    )
} 