import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const query = req.nextUrl.searchParams.get("query") || "";

  const products = prisma.product.findMany({
    where: {
      name: query,
    },
  });

  return NextResponse.json({});
};
