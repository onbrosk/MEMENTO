

export async function GET(request: Request) {
  const q = new URL(request.url).searchParams.get("q");

  if((!q || typeof q !== "string")) {
    return new Response("Missing required query param: q", { status: 400 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return new Response("Missing required environment variable: OPENAI_API_KEY", { status: 500 });
  }

  const url = 
    `https://www.googleapis.com/books/v1/volumes` +
    `?q=${encodeURIComponent(q)}` +
    `&key=${apiKey}`;
  
  const res = await fetch(url);
  
  if (!res.ok) {
    return new Response("Failed to fetch data from Google Books API", { status: res.status });
  }

  const data = await res.json();
  return new Response(JSON.stringify(data));
  }

