// components/ui/SupportBar.jsx
// 🟩⬜🟥 Visual representation of city support using 21 colored boxes

import SupportBox from "./SupportBox.jsx";
import { clampSupport, getSupportShade } from "../../data/supportShades.js";

export default function SupportBar({ supportValue }) {
	const totalBoxes = 21;
	const centerIndex = Math.floor(totalBoxes / 2);
	const clampedSupport = clampSupport(supportValue);
	const activeBoxes = Math.round(Math.abs(clampedSupport) * centerIndex);

	return (
		<div className="flex flex-row gap-1 w-full justify-center mb-4">
			{Array.from({ length: totalBoxes }, (_, index) => {
				const isLeft = index < centerIndex;
				const isRight = index > centerIndex;
				const isCenter = index === centerIndex;

				const isActive =
					(clampedSupport < 0 &&
						isLeft &&
						index >= centerIndex - activeBoxes) ||
					(clampedSupport > 0 &&
						isRight &&
						index <= centerIndex + activeBoxes);

				const color = isCenter
					? "bg-yellow-400"
					: isActive
					? getSupportShade(index, centerIndex, clampedSupport)
					: "bg-gray-300";

				return (
					<SupportBox
						key={index}
						color={color}
					/>
				);
			})}
		</div>
	);
}
