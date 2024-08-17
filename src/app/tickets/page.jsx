import Link from "next/link";

const getData = async () => {
  const req = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });
  const data = await req.json();
  return { data };
};

async function Tickets() {
  const { data } = await getData();
  return (
    <div className="w-full ">
      <div className="flex justify-between">
        <h1>Ticked List</h1>
        <Link href="/tickets/addTickets" className="btn btn-primary p-2">
          Add ticket
        </Link>
      </div>
      {data.map((ticket) => {
        return (
          <Link href={"/tickets/" + ticket.id}>
            <div key={ticket.id} className="card">
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200) + "..."}</p>
              <p className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Tickets;
