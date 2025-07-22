export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (!token) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Token is required",
        }),
        { status: 400 }
      );
    }

    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const data = await res.json();
    if (!res.ok) {
      return new Response(JSON.stringify(data), { status: res.status });
    }

    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error?.message || "Internal Server Error",
      }),
      { status: 500 }
    );
  }
}
