import EventCell from "./EventCell";
import GardenCell from "./GardenCell";
import PoliceCell from "./PoliceCell";
import EmptyCell from "./EmptyCell";
import BuildingCell from "./BuildingCell";

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
		case "building": // ✅ NEW
			return <BuildingCell />;
		case "empty":
		default:
			return <EmptyCell onClick={() => onClick(cell)} />;
	}
}
