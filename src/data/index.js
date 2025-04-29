import badEvents from "./badEvents";
import goodEvents from "./goodEvents";
import neutralEvents from "./neutralEvents";

const events = [
	...badEvents.map((event) => ({ ...event, type: "bad" })),
	...goodEvents.map((event) => ({ ...event, type: "good" })),
	...neutralEvents.map((event) => ({ ...event, type: "neutral" })),
];

export default events;
