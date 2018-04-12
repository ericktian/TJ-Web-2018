// #!/usr/bin/nodejs
abbState = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 
'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 
'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 
'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
console.log('1 '+abbState.indexOf('VA'))         /////////
// fullState = ['ALABAMA', 'ALASKA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO', 'CONNECTICUT', 
// 'DELAWARE', 'FLORIDA', 'GEORGIA', 'HAWAII', 'IDAHO', 'ILLINOIS', 'INDIANA', 'IOWA', 'KANSAS', 'KENTUCKY', 
// 'LOUISIANA', 'MAINE', 'MARYLAND', 'MASSACHUSETTS', 'MICHIGAN', 'MINNESOTA', 'MISSISSIPPI', 'MISSOURI', 
// 'MONTANA', 'NEBRASKA', 'NEVADA', 'NEW HAMPSHIRE', 'NEW JERSEY', 'NEW MEXICO', 'NEW YORK', 'NORTH CAROLINA', 
// 'NORTH DAKOTA', 'OHIO', 'OKLAHOMA', 'OREGON', 'PENNSYLVANIA', 'RHODE ISLAND', 'SOUTH CAROLINA', 'SOUTH DAKOTA', 
// 'TENNESSEE', 'TEXAS', 'UTAH', 'VERMONT', 'VIRGINIA', 'WASHINGTON', 'WEST VIRGINIA', 'WISCONSIN', 'WYOMING'];
fullState = ['ALABAMA', 'ALASKA', 'ARIZONA', 'ARKANSAS', 'CALIFORNIA', 'COLORADO', 'CONNECTICUT', 'DELAWARE', 'FLORIDA', 
'GEORGIA', 'HAWAII', 'IDAHO', 'ILLINOIS', 'INDIANA', 'IOWA', 'KANSAS', 'KENTUCKY', 'LOUISIANA', 'MAINE', 'MARYLAND',
'MASSACHUSETTS', 'MICHIGAN', 'MINNESOTA', 'MISSISSIPPI', 'MISSOURI', 'MONTANA', 'NEBRASKA', 'NEVADA', 'NEW HAMPSHIRE',
'NEW JERSEY', 'NEW MEXICO', 'NEW YORK', 'NORTH CAROLINA', 'NORTH DAKOTA', 'OHIO', 'OKLAHOMA', 'OREGON', 'PENNSYLVANIA',
'RHODE ISLAND', 'SOUTH CAROLINA', 'SOUTH DAKOTA', 'TENNESSEE', 'TEXAS', 'UTAH', 'VERMONT', 'VIRGINIA', 'WASHINGTON',
'WEST VIRGINIA', 'WISCONSIN', 'WYOMING'];
adjacent = [/*0*/[8,9,23,41], /*1*/[], /*2*/[4,27,30,43], /*3*/[17,23,24,35], /*4*/[2,27,36], /*5*/[15,30,35,42,43,49], 
/*6*/[20,31,38], /*7*/[19,29,37], /*8*/[0,9], /*9*/[0,8,32,39,41], /*10*/[], /*11*/[25,27,36,43,46,49], /*12*/[13,14,16,24,48],
/*13*/[12,16,21,34], /*14*/[12,22,24,26,40,48], /*15*/[5,24,26,35], /*16*/[12,13,24,34,41,45,47], /*17*/[3,23,42], /*18*/[28],
/*19*/[7,37,45,47], /*20*/[6,28,31,38,44], /*21*/[13,34], /*22*/[14,33,40,48], /*23*/[0,3,17,41], /*24*/[3,12,14,15,16,26,35,41],
/*25*/[11,33,40,49], /*26*/[5,14,15,24,40,49], /*27*/[2,4,11,36,43], /*28*/[18,20,44], /*29*/[7,31,37], /*30*/[2,5,35,42],
/*31*/[6,20,29,37,44], /*32*/[9,39,41,45], /*33*/[22,25,40], /*34*/[13,16,21,37,47], /*35*/[3,5,15,24,30,42], /*36*/[4,11,27,46],
/*37*/[7,19,29,31,34,47], /*38*/[6,20], /*39*/[9,32], /*40*/[14,22,25,26,33,49], /*41*/[0,3,9,16,23,24,32,45], /*42*/[3,17,30,35],
/*43*/[2,5,11,27,49], /*44*/[20,28,31], /*45*/[16,19,32,41,47], /*46*/[11,36], /*47*/[16,19,34,37,45], /*48*/[12,14,21,22], 
/*49*/[5,11,25,26,40,43]]

console.log('2 '+abbState.indexOf('VA'))         /////////



function stateToPrimitive(oneState){
    input = oneState.toUpperCase()
    abbInd = abbState.indexOf(input)
    fullInd = fullState.indexOf(input)
    if(abbInd>=0){
        return abbInd
    }
    return fullInd
}
function doStatesBorder(state1, state2){
    if(getBorder(stateToPrimitive(state1)).indexOf(stateToPrimitive(state2))>=0){
        return true
    }
    return false
}

// var express = require('express');
// var stateBorders = require('stateBorders.js');
// var app = express();








console.log('3 '+abbState.indexOf('VA'));         /////////
console.log(abbState);


// on startup
var startNum = 1;
while(startNum == 1 || startNum == 10)
    startNum = Math.floor(Math.random() * 50);
var startNum2 = 1;
while(startNum2 == 1 || startNum2 == 10)
    startNum2 = Math.floor(Math.random() * 50);
console.log('startNum ' + startNum);//////
console.log('startNum2 ' + startNum2);/////
document.getElementById(abbState[startNum]).style['fill'] = '#D3D3D3';
document.getElementById(abbState[startNum2]).style['fill'] = '#FF0000';
var resultSpan = document.getElementById('res');
resultSpan.innerHTML = 'Game started! Starting with the grey state, enter a state name or abbreviation to move to a state. Try to reach the red state by only moving to adjacent states.';

// functions
function enterState(){
    var stateAbb = document.getElementById('stateField').value.toUpperCase();
    //
    console.log(stateAbb);////
    console.log(abbState);////
    console.log('4 ' +abbState.indexOf('VA'))//////
    
    index = abbState.indexOf(stateAbb);
    console.log(index);////////////
    if(index==-1){
        index = fullState.indexOf(stateAbb);
        stateAbb = abbState[index];
        //
        console.log('here '+stateAbb);//////
    }
    if(index>=0){
        var state = document.getElementById(stateAbb);
        console.log('stateAbb '+stateAbb);//////////////////////////////////
        console.log(startNum);
        console.log('abbState[startNum] ' + abbState[startNum]);////////////
        if(state.style['fill']=='rgb(211, 211, 211)'){
            resultSpan.innerHTML = 'already moved here';
        }
        else if(doStatesBorder(stateAbb, abbState[startNum])){
            state.style['fill'] = '#FFFF00';
            document.getElementById(abbState[startNum]).style['fill'] = 'D3D3D3';
            resultSpan.innerHTML = 'moved!';
            console.log('startNum1 ' + startNum);///////////
            startNum = stateToPrimitive(stateAbb);
            console.log('startNum2 ' + startNum);//////////
            if(startNum == startNum2){
                resultSpan.innerHTML = 'CONGRATS! YOU WON!';
            }
        }
        else{
            resultSpan.innerHTML = 'not a bordering state';
        }
    }
    else{
        resultSpan.innerHTML = 'invalid move';// u dumbo';
    }
}