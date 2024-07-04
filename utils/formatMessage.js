import toHhMm from './convertTimestamp.js';

function formatMessage(username, text) {
  const timeStamp = toHhMm(Date.now());
  console.log(timeStamp);

  return {
    username,
    text,
    time: timeStamp,
  };
}

export default formatMessage;
