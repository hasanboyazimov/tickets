const getData = async (id) => {
  const req = await fetch("http://localhost:4000/tickets/" + id);
  const data = await req.json();
  return data;
};

async function SingleTicket({ params }) {
  const data = await getData(params.id);
  return (
    <div className="card">
      <h1>SingleTicket - {data.title}</h1>
      <p>{data.body}</p>
      <p className={`pill ${data.priority}`}>{data.priority} priority</p>
    </div>
  );
}

export default SingleTicket;
