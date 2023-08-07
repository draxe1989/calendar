export function createCalendar(month) {
  const today = new Date();
  today.setMonth(today.getMonth() + month);

  let firstMonthDay = new Date(today);
  firstMonthDay.setDate(1);
  const fmd = firstMonthDay.toDateString();
  firstMonthDay = new Date(fmd);

  const firstTableDay = new Date(firstMonthDay);
  if (firstMonthDay.getDay() !== 0) {
    firstTableDay.setDate(2 - firstMonthDay.getDay());
  } else {
    firstTableDay.setDate(-5);
  }

  let lastMonthDay = new Date(today);
  lastMonthDay.setMonth(lastMonthDay.getMonth() + 1);
  lastMonthDay.setDate(0);
  const lmd = lastMonthDay.toDateString();
  lastMonthDay = new Date(lmd);

  const lastTableDay = new Date(lastMonthDay);
  if (lastMonthDay.getDay() !== 0) {
    lastTableDay.setDate(lastTableDay.getDate() + 7 - lastMonthDay.getDay());
  }

  const calendar = [];
  const date = new Date(firstTableDay);
  let week = 0;
  let counter = 1;

  while (date <= lastTableDay) {
    if (counter === 1) {
      calendar.push([]);
    }

    calendar[week].push(date.getDate());

    date.setDate(date.getDate() + 1);
    counter++;

    if (counter > 7) {
      week++;
      counter = 1;
    }
  }

  return calendar;
}
