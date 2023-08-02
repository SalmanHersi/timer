function beep() {
  process.stdout.write("\x07"); // Beep sound
}

function scheduleBeep(time) {
  setTimeout(() => {
    beep();
  }, time * 1000);
}

function parseInputAndScheduleBeeps() {
  const inputArgs = process.argv
    .slice(2)
    .map(Number)
    .filter((time) => !isNaN(time) && time >= 0);

  inputArgs.forEach(scheduleBeep);
}

parseInputAndScheduleBeeps();
