// METHOD 1: splice (no mutation)
const colors = ["Blue", "Green", "Red", "Yellow"];

const removeItem = (arr, item) => {
	let newArray = [...arr]
	const index = newArray.findIndex((element) => element === item)
	if (index !== -1) {
		newArray.splice(index, 1)
		return newArray
	}
}

console.log(removeItem(colors, 'Green'))
console.log(colors)