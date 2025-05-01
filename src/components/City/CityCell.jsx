// components/CityCell.jsx
// 🧩 Renders the appropriate cell component based on the tile type in the grid

import EventCell from "./EventCell";
import GardenCell from "./GardenCell";
import PoliceCell from "./PoliceCell";
import EmptyCell from "./EmptyCell";
import BuildingCell from "./BuildingCell";

/**
 * Renders the correct cell component for the grid based on `cell.type`
 * @param {object} cell - The cell data object
 * @param {function} onClick - Function to call when a cell is clicked
 * @param {boolean} shouldReveal - Optional flag to reveal police (or other hidden content)
 */
export default function CityCell({ cell, onClick, shouldReveal }) {
	switch (cell.type) {
		case "event":
			return <EventCell onClick={() => onClick(cell)} />;

		case "garden":
			return <GardenCell />;

		case "police":
			return (
				<PoliceCell
					shouldReveal={shouldReveal}
					onClick={() => onClick(cell)}
				/>
			);

		case "building":
			return <BuildingCell />;

		case "empty":
		default:
			return (
				<EmptyCell
					onClick={() => onClick(cell)}
					stealthHit={cell.stealthHit}
				/>
			);
	}
}
