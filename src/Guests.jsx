import { useState, useEffect } from "react";
import { getGuests } from "./api";

export default function Guests(setGuestId) {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    const syncGuests = async () => {
      const data = await getGuests();
      setGuests(data);
    };
    syncGuests();
  }, []);

  return (
    <>
      <section className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {guests.map((guest) => (
              <tr key={guest.id} onClick={() => setGuestId(guest.id)}>
                <td>{guest.name}</td>
                <td>{guest.email}</td>
                <td>{guest.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <p>Please select a guest to see all details.</p>
    </>
  );
}
