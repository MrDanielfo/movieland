export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
  }
};

export default async function fetchData(url: string) {
  try {

    const response = await fetch(url, options);
    const data = await response.json();
    return data
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}