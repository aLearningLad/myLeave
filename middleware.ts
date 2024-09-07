import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { createClient } from "./utils/supabase/server";

export async function middleware(request: NextRequest) {
  const supabase = createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  const user = userData.user;
  if (!user) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    NextResponse.redirect(url);
    return;
  }

  if (user && request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/home";
    NextResponse.redirect(url);
    return;
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    "/home",
    "/profile",
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
