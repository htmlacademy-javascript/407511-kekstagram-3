import {MINUTES_PER_HOUR} from './consts.js';

// Функция принимает время в формате строки вида '08:00' и возвращает число минут
function convertToMinutes (time) {
  const timeUnits = time.split(':');
  const hour = parseInt(timeUnits[0], 10);
  const minutes = parseInt(timeUnits[1], 10);
  return hour * MINUTES_PER_HOUR + minutes;
}

/* Функция принимает время начала и конца рабочего дня, время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.*/
function checkIsMeetingInWorktime (dayStart, dayEnd, meetingStart, meetingDuration) {
  const dayStartInMinutes = convertToMinutes(dayStart);
  const dayEndInMinutes = convertToMinutes(dayEnd);
  const meetingStartInMinutes = convertToMinutes(meetingStart);
  const meetingEndInMinutes = meetingStartInMinutes + meetingDuration;

  return (meetingStartInMinutes >= dayStartInMinutes) && (meetingEndInMinutes <= dayEndInMinutes);
}

checkIsMeetingInWorktime('08:00', '17:30', '14:00', 90);
