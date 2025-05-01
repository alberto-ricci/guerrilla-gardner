// src/data/index.js

import badEvents from "./badEvents";
import goodEvents from "./goodEvents";
import neutralEvents from "./neutralEvents";

import * as supportMessages from "./supportMessages";
import * as supportShades from "./supportShades";
import { quoteList } from "./quotes"; // named export

// Combine all event types into a single enriched array
const events = [
	...badEvents.map((event) => ({ ...event, type: "bad" })),
	...goodEvents.map((event) => ({ ...event, type: "good" })),
	...neutralEvents.map((event) => ({ ...event, type: "neutral" })),
];

// 🔁 Default export remains for core event system
export default events;

// ✅ Named exports for other shared game data
export { quoteList, supportMessages, supportShades };
