import react from "react";
import {Shoes} from './Shoes'

export default{
    title:"Components/Shoes",
    component:Shoes,
};
const Template=(args)=><Shoes {...args}/>
export const shoes=Template.bind({})