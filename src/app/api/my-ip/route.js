export async function GET() {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
  
    return new Response(JSON.stringify({ ip: data.ip }), {
      headers: { "Content-Type": "application/json" },
    });
  }