/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;
const today = new Date();
// define a string with the date format 'HH:MM'
const time = today.getHours() + ":" + today.getMinutes();

// open popup with current time
// grep says clockPopup is somewhere in map.js 
WA.room.onEnterZone('clock', () => {
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})

WA.room.onEnterZone('hello', () => {
    currentPopup =  WA.ui.openPopup("helloPopup","Hello",[]);
})

// close popup when leaving zones
WA.room.onLeaveZone('clock', closePopUp)
WA.room.onLeaveZone('hello', closePopUp)

// close popup and set currentPopup to undefined
function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
