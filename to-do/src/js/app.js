import "../css/main.css";
import "../css/modals.css";

import { Element } from "./elements";
import { Event } from "./events";
import { LS, GetCount } from "./LS";

const Elements = new Element();
export const Events = new Event();
const Storage = new LS();

export let highCount = GetCount("high");
export let mediumCount = GetCount("medium");
export let lowCount = GetCount("low");

SetWarnings()

window.addEventListener("load", () => {
    Storage.LoadALLTODOs("high");
    Storage.LoadALLTODOs("medium");
    Storage.LoadALLTODOs("low");
});


export function SetWarnings() {
    if (highCount > 0) {
        Elements.highWarning.classList.add("not-visible");
    } else if (highCount === 0) {
        Elements.highWarning.classList.remove("not-visible");
    }
    if (mediumCount > 0) {
        Elements.mediumWarning.classList.add("not-visible");
    } else if (mediumCount === 0) {
        Elements.mediumWarning.classList.remove("not-visible");
    }
    if (lowCount > 0) {
        Elements.lowWarning.classList.add("not-visible");
    } else if (lowCount > 0) {
        Elements.lowWarning.classList.remove("not-visible");
    }
}

export function SetCounts() {
    highCount = GetCount("high");
    mediumCount = GetCount("medium");
    lowCount = GetCount("low");
}



