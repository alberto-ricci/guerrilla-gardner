export default function SupportBar({ supportValue }) {
	const clampedSupport = Math.max(-1, Math.min(1, supportValue));
	const totalBoxes = 21;
	const centerIndex = Math.floor(totalBoxes / 2);

	const greenShades = [
		"bg-green-100",
		"bg-green-200",
		"bg-green-300",
		"bg-green-400",
		"bg-green-500",
		"bg-green-600",
		"bg-green-700",
		"bg-green-800",
		"bg-green-900",
	];

	const redShades = [
		"bg-red-100",
		"bg-red-200",
		"bg-red-300",
		"bg-red-400",
		"bg-red-500",
		"bg-red-600",
		"bg-red-700",
		"bg-red-800",
		"bg-red-900",
	];

	const getShade = (index, type) => {
		const distance = Math.abs(index - centerIndex) - 1; // -1 because center is neutral
		const shadeIndex = Math.min(distance, greenShades.length - 1);

		if (type === "green") return greenShades[shadeIndex];
		if (type === "red") return redShades[shadeIndex];
		return "bg-gray-300";
	};

	const activeBoxes = Math.round(Math.abs(clampedSupport) * centerIndex);

	return (
		<div className="flex flex-row gap-1 w-full justify-center mb-2">
			{Array.from({ length: totalBoxes }, (_, index) => {
				const isLeft = index < centerIndex;
				const isRight = index > centerIndex;

				const isActive =
					(clampedSupport < 0 &&
						isLeft &&
						index >= centerIndex - activeBoxes) ||
					(clampedSupport > 0 &&
						isRight &&
						index <= centerIndex + activeBoxes);

				let color = "bg-gray-300"; // Default gray

				if (isActive) {
					if (clampedSupport < 0 && isLeft) {
						color = getShade(index, "green");
					}
					if (clampedSupport > 0 && isRight) {
						color = getShade(index, "red");
					}
				}

				if (index === centerIndex) color = "bg-yellow-400";

				return (
					<div
						key={index}
						className={`w-6 h-6 rounded-sm border border-black transition-all duration-500 ${color}`}
					/>
				);
			})}
		</div>
	);
}
