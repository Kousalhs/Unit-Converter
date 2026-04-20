const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function () {
  const value = Number(inputEl.value)

  // LENGTH
  const metersToFeet = (value * 3.28084).toFixed(3)
  const feetToMeters = (value / 3.28084).toFixed(3)

  // VOLUME
  const litersToGallons = (value * 0.264172).toFixed(3)
  const gallonsToLiters = (value / 0.264172).toFixed(3)

  // MASS
  const kilosToPounds = (value * 2.20462).toFixed(3)
  const poundsToKilos = (value / 2.20462).toFixed(3)

  // RENDER
  lengthEl.textContent =
    `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`

  volumeEl.textContent =
    `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`

  massEl.textContent =
    `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`
})