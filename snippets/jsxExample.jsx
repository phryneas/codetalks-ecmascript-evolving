const TestComponent = (props) => (
    <div className="card">
      <h1 style={{ color: "green" }}>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );