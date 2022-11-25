// code your solution here
function saturdayFun(fun='roller-skate'){
    console.log(`This Saturday, I want to ${fun}!`);

}
saturdayFun();
saturdayFun('This Saturday, I want to bathe my dog!')


const mondayWork = function(work='go to the office'){
    console.log(`${work}`);

}
mondayWork();
mondayWork('This Monday, I will work from home.');


function wrapAdjective(){

    return function(wrap="*"){
        console.log(`You were ${wrap}`)

    }    
}
