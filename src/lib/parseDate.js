function parseDate (date) {
  const parsedDate = new Date(date);
  const month = parsedDate.getMonth() + 1;
  const day = parsedDate.getDate();

  return `${day}/${month}`;
};

export default parseDate;
