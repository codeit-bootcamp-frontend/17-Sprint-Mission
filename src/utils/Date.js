function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime());
}
export function getFormattedDate(date) {
  const newDate = new Date(date);
  if (!isValidDate(newDate)) return '';

  const krDate = newDate.toLocaleString('ko-KR');
  const formattedDate = krDate.slice(0, krDate.lastIndexOf('.'));
  return formattedDate;
}
export const getTimeDiffrenceString = (date) => {
  const today = new Date();
  const dateValue = new Date(date);
  if (!isValidDate(dateValue)) return '';

  const diffrence = Math.floor(
    (today.getTime() - dateValue.getTime()) / 1000 / 60
  );
  if (diffrence < 60) {
    return `${diffrence}분전`;
  }

  const hourDifference = Math.floor(diffrence / 60);
  if (hourDifference < 24) {
    return `${hourDifference}시간전`;
  }

  const dayDifference = Math.floor(diffrence / 60 / 24);
  if (dayDifference < 365) {
    return `${dayDifference}일전`;
  }

  return `${Math.floor(dayDifference / 365)}년전`;
};
