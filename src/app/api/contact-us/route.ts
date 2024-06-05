import { lineBot } from "@/lib/line-bot";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  console.debug(`POST ${req.nextUrl.pathname}`);

  let body;

  try {
    body = await req.json();
  } catch (e) {
    return NextResponse.json("Invalid body", { status: 400 });
  }

  const parsed = formSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, { status: 400 });
  }

  let messageText = "";

  if (parsed.data.name) {
    messageText += `Name: ${parsed.data.name}\n`;
  }

  if (parsed.data.email) {
    messageText += `Email: ${parsed.data.email}\n`;
  }

  if (parsed.data.phone) {
    messageText += `Phone: ${parsed.data.phone}\n`;
  }

  if (parsed.data.subject) {
    messageText += `Subject: ${parsed.data.subject}\n`;
  }

  if (parsed.data.content) {
    messageText += `Content: ${parsed.data.content}\n`;
  }

  if (messageText !== "") {
    lineBot.broadcast({
      messages: [
        {
          type: "text",
          text: messageText.trim(),
        },
      ],
    });
  }

  return NextResponse.json("OK");
}

const formSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: "名字不能為空",
    })
    .max(100, {
      message: "名字過長 (>100字)",
    })
    .optional(),
  email: z
    .string()
    .email({
      message: "電郵地址無效",
    })
    .max(200, {
      message: "電郵地址過長 (>200字)",
    }),
  phone: z
    .string()
    .min(8, {
      message: "電話號碼無效",
    })
    .max(16, {
      message: "電話號碼過長",
    })
    .optional(),
  subject: z
    .string()
    .min(1, {
      message: "主題不能為空",
    })
    .max(50, {
      message: "主題過長 (>50字)",
    })
    .optional(),
  content: z
    .string()
    .min(1, {
      message: "內容不能為空",
    })
    .max(500, {
      message: "內容太長 (>500字)",
    })
    .optional(),
});
