const increaseAction = (step)=>{
    return {type:"increase",step:step};
}
const decreaseAction = (step)=>{
    return {type:"decrease",step:step};
}
export {increaseAction,decreaseAction};