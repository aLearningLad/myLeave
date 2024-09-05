import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";
import { createClient } from "./utils/supabase/server";

export async function middleware(request: NextRequest) {
  const supabase = createClient();

  try {
    const { data: potentialUserData, error: potentialError } =
      await supabase.auth.getUser();

    if (potentialError) {
      throw new Error(potentialError.message);
    }

    if (!potentialUserData.user) {
      throw new Error("No user returned from supabase client in middleware");
    }
  } catch (error) {
    console.log("Error while finding user in middleware: ", error);
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    "/home",
  ],
};
