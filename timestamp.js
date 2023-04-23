const timeStampConverter = function (timeStamp) {
  const dateFormat = new Date(timeStamp);
  return dateFormat.toString();
};

module.exports = { timeStampConverter };