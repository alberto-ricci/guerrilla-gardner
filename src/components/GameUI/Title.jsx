// Title.jsx
// Displays the main animated game title.

export default function Title() {
	// TailwindCSS classes for the title styling
	const titleStyle =
		"text-3xl sm:text-4xl font-extrabold text-green-800 mb-8 drop-shadow-sm animate-fade-in";

	return <h1 className={titleStyle}>Guerrilla Gardener 🌱</h1>;
}
