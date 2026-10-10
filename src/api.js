export const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2608";

//Sends a GET request to the API to obtain Guests data.
export async function getGuests() {
  try {
    const response = await fetch(API + "/guests");
    const result = await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function getGuest(id) {
  try {
    const response = await fetch(API + "/guests/" + id);
    const result = await response.json();
    return result.data;
  } catch (e) {
    console.error(e);
    return null;
  }
}
