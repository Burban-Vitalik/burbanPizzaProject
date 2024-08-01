import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export const GET = async () => {
  const ingredients = await prisma.ingridient.findMany();

  return NextResponse.json(ingredients);
};
