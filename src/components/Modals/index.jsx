// src/components/Modals/index.jsx

// Main dynamic modal that chooses the correct variant
export { default as EventModal } from "./EventModal";

// Specific modal variants
export { default as GoodEventModal } from "./GoodEventModal";
export { default as BadEventModal } from "./BadEventModal";
export { default as NeutralEventModal } from "./NeutralEventModal";

// Shared layout + styles
export { default as BaseEventModal } from "./BaseEventModal";
export * from "./getEventStyles"; // export `eventStyles`
