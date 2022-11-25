// code your solution here
function saturdayFun(fun='roller-skate'){
    return`This Saturday, I want to ${fun}!`

}
saturdayFun('This Saturday, I want to bathe my dog!')


let mondayWork = function(work='go to the office'){
    return` This Monday, I will ${work}`

}
mondayWork('This Monday, I will work from home.');



let wrapAdjective = function(style="*"){
    return function(adjective="special"){
        return `You are ${style}${adjective}${style}!`
    }
}
