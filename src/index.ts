/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;
const today = new Date();
// define a string with the date format 'HH:MM'
const time = today.getHours() + ":" + today.getMinutes();

// open popup with current time
// no idea what clockPopup refers to
WA.room.onEnterZone('clock', () => {
    currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
})

// close popup when leaving zone 'clock'
WA.room.onLeaveZone('clock', closePopUp)

// close popup and set currentPopup to undefined
function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
