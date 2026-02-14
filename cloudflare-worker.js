export default {
  async fetch(request) {
    const url = new URL(request.url);

    // ZET GTFS-RT endpoint (original)
    const target = "https://www.zet.hr/gtfs-rt-protobuf";

    const res = await fetch(target, {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    // Clone response and add CORS
    const newHeaders = new Headers(res.headers);
    newHeaders.set("Access-Control-Allow-Origin", "*");
    newHeaders.set("Access-Control-Allow-Headers", "*");

    return new Response(res.body, {
      status: res.status,
      headers: newHeaders
    });
  }
};