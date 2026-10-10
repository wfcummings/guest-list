import { useState, useEffect } from "react";
import { getGuest } from "./api";

export default function GuestDetails({ guestId, setGuestId }) {
  const [guest, setGuest] = useState(null);

  useEffect(() => {
    const syncGuest = async () => {
      const data = await getGuest(guestId);
      setGuest(data);
    };
    syncGuest();
  }, [guestId]);

  if (!guest) return <p>Loading...</p>;

  return (
    <article>
      <h1>{guest.name}</h1>
      <address>
        {guest.email}
        <br />
        {guest.phone}
      </address>
      <p>{guest.job}</p>
      <p>{guest.bio}</p>
      <button onClick={() => setGuestId(null)}>Back</button>
    </article>
  );
}
