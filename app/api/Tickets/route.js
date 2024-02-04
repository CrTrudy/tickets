import Ticket from "@/app//(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("POST Ticket");
  try {
    const body = await req.json();
    const TicketData = body.formData;
    console.log("...........");
    await Ticket.create(TicketData);

    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
