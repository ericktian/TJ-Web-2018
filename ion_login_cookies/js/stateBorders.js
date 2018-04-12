// fullState = ["alabama","alaska","arizona","arkansas","california","colorado","connecticut","delaware",
// "florida","georgia","hawaii","idaho","illinois","indiana","iowa","kansas","kentucky","louisiana","maine",
// "maryland","massachusetts","michigan","minnesota","mississippi","missouri","montana","nebraska","nevada",
// "new hampshire","new jersey","new mexico","new york","north carolina","north dakota","ohio","oklahoma",
// "oregon","pennsylvania","rhode island","south carolina","south dakota","tennessee","texas","utah","vermont",
// "virginia","washington","west virginia","wisconsin","wyoming"]
fullState = ['ALABAMA', 'ALASKA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO', 'CONNECTICUT', 'DELAWARE', 'FLORIDA', 
'GEORGIA', 'HAWAII', 'IDAHO', 'ILLINOIS', 'INDIANA', 'IOWA', 'KANSAS', 'KENTUCKY', 'LOUISIANA', 'MAINE', 'MARYLAND',
'MASSACHUSETTS', 'MICHIGAN', 'MINNESOTA', 'MISSISSIPPI', 'MISSOURI', 'MONTANA', 'NEBRASKA', 'NEVADA', 'NEW HAMPSHIRE',
'NEW JERSEY', 'NEW MEXICO', 'NEW YORK', 'NORTH CAROLINA', 'NORTH DAKOTA', 'OHIO', 'OKLAHOMA', 'OREGON', 'PENNSYLVANIA',
'RHODE ISLAND', 'SOUTH CAROLINA', 'SOUTH DAKOTA', 'TENNESSEE', 'TEXAS', 'UTAH', 'VERMONT', 'VIRGINIA', 'WASHINGTON',
'WEST VIRGINIA', 'WISCONSIN', 'WYOMING']


// abbState = ['al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'de',
// 'fl', 'ga', 'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 
// 'md', 'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv',
// 'nh', 'nj', 'nm', 'ny', 'nc', 'nd', 'oh', 'ok',
// 'or', 'pa', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut', 'vt',
// 'va', 'wa', 'wv', 'wi', 'wy']
abbState = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 
'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 
'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 
'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];

adjacent = [/*0*/[8,9,23,41], /*1*/[], /*2*/[4,27,30,43], /*3*/[17,23,24,35], /*4*/[2,27,36], /*5*/[15,30,35,42,43,49], 
/*6*/[20,31,38], /*7*/[19,29,37], /*8*/[0,9], /*9*/[0,8,32,39,41], /*10*/[], /*11*/[25,27,36,43,46,49], /*12*/[13,14,16,24,48],
/*13*/[12,16,21,34], /*14*/[12,22,24,26,40,48], /*15*/[5,24,26,35], /*16*/[12,13,24,34,41,45,47], /*17*/[3,23,42], /*18*/[28],
/*19*/[7,37,45,47], /*20*/[6,28,31,38,44], /*21*/[13,34], /*22*/[14,33,40,48], /*23*/[0,3,17,41], /*24*/[3,12,14,15,16,26,35,41],
/*25*/[11,33,40,49], /*26*/[5,14,15,24,40,49], /*27*/[2,4,11,36,43], /*28*/[18,20,44], /*29*/[7,31,37], /*30*/[2,5,35,42],
/*31*/[6,20,29,37,44], /*32*/[9,39,41,45], /*33*/[22,25,40], /*34*/[13,16,21,37,47], /*35*/[3,5,15,24,30,42], /*36*/[4,11,27,46],
/*37*/[7,19,29,31,34,47], /*38*/[6,20], /*39*/[9,32], /*40*/[14,22,25,26,33,49], /*41*/[0,3,9,16,23,24,32,45], /*42*/[3,17,30,35],
/*43*/[2,5,11,27,49], /*44*/[20,28,31], /*45*/[16,19,32,41,47], /*46*/[11,36], /*47*/[16,19,34,37,45], /*48*/[12,14,21,22], 
/*49*/[5,11,25,26,40,43]]

    //initial functions
// function toStates(indexes){
//     toRet = ""
//     for(i=0;i<indexes.length;i++){
//         toRet += fullState[indexes[i]] + ", "
//     }
//     return toRet.slice(0,-2)
// }
// function stateBorders(state){
//     input = state.toLowerCase();
    
//     abbInd = abbState.indexOf(input)
//     if(abbInd>=0){
//         indexes = adjacent[abbInd]
//         return toStates(indexes)
//     }
    
//     fullInd = fullState.indexOf(input)
//     if(fullInd>=0){
//         indexes = adjacent[fullInd]
//         return toStates(indexes)
//     }
    
//     return "That's not a state!"
// }

function getBorder(index){
    return adjacent[index]
}
function stateToPrimitive(oneState){
    input = oneState.toUpperCase()
    abbInd = abbState.indexOf(input)
    fullInd = fullState.indexOf(input)
    if(abbInd>=0){
        return abbInd
    }
    // if(fullInd>=0){
    //     return fullInd
    // }
    // return -1
    return fullInd
}
function primitiveToState(stateList){
    toRet = []
    for(i=0;i<indexes.length;i++){
        toRet.push(fullState[indexes[i]])
    }
    return toRet
}
function getStateBorders(state){
    input = state.toLowerCase();
    
    abbInd = abbState.indexOf(input)
    if(abbInd>=0){
        indexes = getBorder(abbInd)
        return primitiveToState(indexes)
    }
    
    fullInd = fullState.indexOf(input)
    if(fullInd>=0){
        indexes = getBorder(fullInd)
        return primitiveToState(indexes)
    }
    return -1
}
function bordersToString(states, origState){
    toRet = "States that border \"" + origState + "\" are:\n"
    for(i=0;i<states.length;i++){
        toRet += states[i] + ", "
    }
    return toRet.slice(0,-2)
}
function doStatesBorder(state1, state2){
    if(getBorder(stateToPrimitive(state1)).indexOf(stateToPrimitive(state2))>=0){
        return true
    }
    return false
}

//main

// console.log(stateBorders('vIRGinIa'))
// console.log(getBorderStates('vA'))
// console.log(doStatesBorder('vA', 'north cARolina'))

//command line
//checks for # of inputs, if 1 input, then finds border states of the input
//if 2 inputs, then checks if the states share a border

//info.log also works in place of process.argv
// inputArg = process.argv
// if(inputArg.length==3)          //if there is one input, the code returns the border
// {
//     output = getStateBorders(inputArg[2])
//     if(output!=-1) 
//     {
//         if(output!=0 && output!=9)console.log(bordersToString(output, inputArg[2]))    //checks if input is alaska or hawaii
//         else console.log('No states border \"' + inputArg[2] + '\"')
//     }
//     else console.log("That is not a state!")
// }    
// else if(inputArg.length==4)         //if there are two inputs, the code checks if they border
// {
//     if(stateToPrimitive(inputArg[2])>=0 && stateToPrimitive(inputArg[3])>=0){       //checks if inputs are states
//         bool = doStatesBorder(inputArg[2], inputArg[3])
//         if(bool) console.log('\"' + inputArg[2] + '\" and \"' + inputArg[3] + '\" border')
//         else console.log('\"' + inputArg[2] + '\" and \"' + inputArg[3] + '\" do not border')
//     }
//     else console.log('Those are not states!')
// }
// else console.log('Invalid input')

// module.exports.getStateBorders = getStateBorders
// module.exports.doStatesBorder = doStatesBorder
// module.exports.stateToPrimitive = stateToPrimitive
// module.exports.bordersToString = bordersToString