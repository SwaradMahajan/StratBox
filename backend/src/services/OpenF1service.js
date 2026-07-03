const BASE_URL = "https://api.openf1.org/v1";

export async function fetchFromOpenF1(endpoint) {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    // OpenF1 returns 404 when no data exists yet
    if (response.status === 404) {
        return [];
    }

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`OpenF1 Error ${response.status}: ${text}`);
    }

    return await response.json();
}