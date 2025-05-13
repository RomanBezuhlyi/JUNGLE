const container = document.querySelector('.image-container')
const afterImage = document.querySelector('.after')
const sliderBar = document.querySelector('.slider-bar')
let isDragging = false

function updatePosition(event) {
	let clientX = event.type.includes('touch')
		? event.touches[0].clientX
		: event.clientX
	let rect = container.getBoundingClientRect()
	let position = clientX - rect.left
	let percentage = (position / rect.width) * 100

	percentage = Math.max(0, Math.min(100, percentage))

	afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`
	sliderBar.style.left = `${percentage}%`
}

sliderBar.addEventListener('mousedown', () => {
	isDragging = true
})
sliderBar.addEventListener('touchstart', () => {
	isDragging = true
})

document.addEventListener('mouseup', () => {
	isDragging = false
})
document.addEventListener('touchend', () => {
	isDragging = false
})

document.addEventListener('mousemove', event => {
	if (isDragging) updatePosition(event)
})
document.addEventListener('touchmove', event => {
	if (isDragging) updatePosition(event)
})
