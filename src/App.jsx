import { useState } from "react";
import Guests from "./Guests";
import GuestDetails from "./GuestDetails";

export default function App() {
  const [guestId, setGuestId] = useState();

  return (
    <>
      <h1>Guest List</h1>
      <main>
        {guestId ? (
          <GuestDetails guestId={guestId} setGuestId={setGuestId} />
        ) : (
          <Guests setGuestId={setGuestId} />
        )}
      </main>
    </>
  );
}
