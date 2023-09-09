const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

function updateDateTime() {
    const now = new Date();
    const currentDate = daysOfTheWeek[now.getUTCDay()];
    const currentUTCTime = now.toISOString().split('T')[1];

    currentDayElement.textContent = daysOfTheWeek[now.getUTCDay()];
    currentUTCTimeElement.textContent = currentUTCTime;

}

updateDateTime();
setInterval(updateDateTime, 1);