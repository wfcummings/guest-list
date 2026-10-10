import { useState } from "react";
import Guests from "./Guests";
import GuestDetails from "./GuestDetails";

export default function App() {
  const [guestId, setGuestId] = useState(null);

  return (
    <main>
      {guestId ? (
        <GuestDetails guestId={guestId} setGuestId={setGuestId} />
      ) : (
        <Guests setGuestId={setGuestId} />
      )}
    </main>
  );
}
