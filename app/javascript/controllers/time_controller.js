import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="time"
export default class extends Controller {
  static targets = [ "icon", "time", "form", "startsAt", "endsAt" ]

  initialize() {
    this.elapsedTime = 0;
    this.timer = null;
    this.state = "stop";
  }

  click() {
    switch(this.state) {
      case "stop":
        this.iconTarget.textContext = "II"
        this.state = "start"
        this.startTime = Date.now()
        this.startsAtTarget.value = this.milliSecondsToHHMM(this.startTime)
        this.timer = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime
          this.updateTime()
        }, 100)
        break
      case "start":
        clearInterval(this.timer)
        this.endsAtTarget.value = this.milliSecondsToHHMM(Date.now())
        this.timer = null
        this.formTarget.requestSubmit()
        break
    }
  }

  updateTime() {
    const timeInSeconds = Number(this.elapsedTime / 1000);
    this.timeTarget.textContent = `${timeInSeconds} s`;
  }

  milliSecondsToHHMM(milliSeconds) {
    const date = new Date(milliSeconds)
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")
    const value = `${hours}:${minutes}`
    console.log(value)
    return value
  }
}
