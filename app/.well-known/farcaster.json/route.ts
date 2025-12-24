export async function GET() {
  const config = {
    "accountAssociation": {
        "header": "eyJmaWQiOjYxNiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDVFNzlGNjkwY2NENDIwMDdENUEwYUQ2NzhDRDQ3NDc0MzM5NDAwRTMifQ",
        "payload": "eyJkb21haW4iOiJiZWMud2F0Y2gifQ",
        "signature": "MHhlODc4NzE5MzdjYjExOGI0YTBmODE4MzcxM2RlZmY5YTI2ZDQ0Yjg3MDZkZDk3OGM3NjUyYWFkNDAzZmM4NjM2NjhkNzBiYTRjMzY5YjdjM2ViODZjZWU5MzdkMTkxZGY1ZWM4NTA5MzJiM2Y5ZDNkZTZiMDEyOWQxZWMwMmNlYTFi"
    },
    frame: {
      version: "1",
      name: "bec.watch",
      iconUrl: 'https://i.imgur.com/ylSBHuG.png',
      splashImageUrl: 'https://i.imgur.com/ylSBHuG.png',
      splashBackgroundColor: "#000000",
      homeUrl: 'https://bec.watch',
      noindex: false
    },
  };

  return Response.json(config);
}