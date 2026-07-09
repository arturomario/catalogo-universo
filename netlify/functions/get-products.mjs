// Netlify Function: trae los productos usando el SDK oficial de Base44,
// que ya sabe la URL/formato correcto internamente. Corre en el servidor
// de Netlify, no en el navegador, así que CORS no aplica aquí.
import { createClient } from '@base44/sdk';

const APP_ID = "69b326911a27e82f09e67748";

export async function handler() {
  try {
    const base44 = createClient({ appId: APP_ID });
    const products = await base44.entities.Product.list("name", 1000);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=60",
      },
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: String(error) }),
    };
  }
}
