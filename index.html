// Netlify Function: proxy para traer los productos de Base44 sin bloqueo de CORS.
// Corre en el servidor de Netlify, no en el navegador -> CORS no aplica aquí.

exports.handler = async function (event, context) {
  const APP_ID = "69b326911a27e82f09e67748";
  const API_KEY = "467163ec0ee544b5a15bcdf2b91e4c74";

  try {
    const response = await fetch(
      `https://api.base44.com/v1/apps/${APP_ID}/entities/Product?sort_by=name&limit=1000`,
      { headers: { api_key: API_KEY } }
    );

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers: { "Access-Control-Allow-Origin": "*" },
        body: JSON.stringify({ error: `Base44 respondió ${response.status}` }),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: String(error) }),
    };
  }
};
