export async function fetchWithToken(url, options = {}) {
    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    };
  
    const response = await fetch(url, {
      ...options,
      headers,
      credentials: "include", // Ensures cookies are sent with the request
    });
  
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
  
    return response.json();
  }
  