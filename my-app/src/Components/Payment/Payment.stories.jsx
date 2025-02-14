import react from "react";
import {Payment} from './Payment'

export default{
    title:"Components/Payment",
    component:Payment,
};
const Template =(args)=><Payment { ...args}/>;
export const payment=Template.bind({})