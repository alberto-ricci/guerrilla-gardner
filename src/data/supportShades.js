// components/ui/supportShades.js
// 🎨 Defines color shading logic for public support visualization

export const greenShades = [
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

export const redShades = [
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

// Clamp value to [-1, 1]
export const clampSupport = (val) => Math.max(-1, Math.min(1, val));

export function getSupportShade(index, centerIndex, support) {
	const distance = Math.abs(index - centerIndex) - 1;
	const shadeIndex = Math.min(distance, greenShades.length - 1);

	if (support < 0 && index < centerIndex) {
		return greenShades[shadeIndex];
	}
	if (support > 0 && index > centerIndex) {
		return redShades[shadeIndex];
	}
	return "bg-gray-300";
}
