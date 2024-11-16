function getMinutesSinceStartOfDay() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();

  const totalMinutes = hours * 60 + minutes;

  alert(`С начала дня прошло ${totalMinutes} минут.`);
}
getMinutesSinceStartOfDay();
