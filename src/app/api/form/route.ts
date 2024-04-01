import { NextResponse } from "next/server";
import axios from "axios";

const TELEGRAM_API = "https://api.telegram.org/bot";

export async function POST(req: Request) {
  const TELEGRAM_API_KEY = process.env.TELEGRAM_API_KEY;
  const TELEGRAM_CHAT_IDS = process.env.TELEGRAM_CHAT_IDS;

  if (!TELEGRAM_API_KEY || !TELEGRAM_CHAT_IDS) {
    return NextResponse.json("Telegram API key or chat IDs are not provided");
  }

  const { fullName, birthday, region, phone, profession, comment } =
    await req.json();

  const telegramMessage = `Вітаю, Ви отримали нову заявку: \nІм'я: ${fullName}\nДата народження: ${birthday}\nТелефон: ${phone}${
    profession && `\nПрофесія: ${profession}`
  }\nМісто проживання: ${region}\n${comment && `Повідомлення: ${comment}`}`;

  try {
    const chatIds = JSON.parse(TELEGRAM_CHAT_IDS);
    const promises = chatIds.map((telegram: any) =>
      axios.post(`${TELEGRAM_API}${TELEGRAM_API_KEY}/sendMessage`, {
        chat_id: telegram,
        text: telegramMessage,
      })
    );

    await Promise.all(promises);

    return NextResponse.json("Ok");
  } catch (error) {
    console.error("Error sending messages to Telegram:", error);
    return NextResponse.json("Error sending messages to Telegram");
  }
}
