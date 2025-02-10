import React from "react";
import {College} from './College';

export default {
    title:"Components/College",
    component:College,
};
const Template=args=><College {...args}/>
export const college= Template.bind({})