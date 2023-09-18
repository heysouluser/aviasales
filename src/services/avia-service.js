const url = 'https://aviasales-test-api.kata.academy/';
let id = null;

export const aviaService = async () => {
  if (id === null) {
    const response = await fetch(`${url}search`);
    if (!response.ok) {
      throw new Error(`Could not fetch ${url}search, received ${response.status}`);
    }
    const body = await response.json();
    id = body.searchId;
  }

  const ticketsResponse = await fetch(`${url}tickets?searchId=${id}`);
  if (!ticketsResponse.ok) {
    throw new Error(`Could not fetch ${url}tickets, received ${ticketsResponse.status}. Refresh this page.`);
  }
  return ticketsResponse.json();
};
