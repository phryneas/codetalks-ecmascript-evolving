var TestComponent = function TestComponent(props) {
  return React.createElement(
    "div",
    { className: "card" },
    React.createElement(
      "h1",
      { style: { color: "green" } },
      props.title
    ),
    React.createElement(
      "p",
      null,
      props.content
    )
  );
};