function updateCurrentDayAndTime() {
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    currentDayElement.textContent = daysOfTheWeek[currentDate.getUTCDay()];
    
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    setInterval(() => {
        const UTCTmeString = new Date().toISOString().split('T')[1];
        currentUTCTimeElement.textContent = UTCTmeString;
    }, 1);

}

updateCurrentDayAndTime();
