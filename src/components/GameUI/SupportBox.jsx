// components/ui/SupportBox.jsx
// 🎨 Represents a single colored box in the SupportBar

export default function SupportBox({ color }) {
	return (
		<div
			className={`w-6 h-6 rounded-sm border border-black transition-all duration-500 ${color}`}
		/>
	);
}
