const BOT_TOKEN = "123456789:ABC-DEF1234ghIkl-zyx57W2v1u123ew11";
const CHAT_ID = "123456789"; // siz olgan chat ID

const sendMessageToTelegram = async (email) => {
  const message = `📩 Yangi obunachi: ${email}`;
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    })
  });
};
