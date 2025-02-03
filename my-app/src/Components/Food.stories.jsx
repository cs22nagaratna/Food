import React from "react";
import {Food} from "./Food"

export default{
    title:"Components/Food",
    component:Food,
};
const Template=(args)=><Food {...args}/>
export const food=Template.bind({})
 