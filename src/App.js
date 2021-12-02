import "./styles.css";

function makeDiv(person) {
  return (
    <div>
      Hello {person.name} {person.lastname}!
    </div>
  );
}

export default function App() {
  let people = [
    { name: "victor", lastname: "lymar" },
    { name: "traci", lastname: "sibel" }
  ];

  let divs = [];
  for (const person of people) {
    divs.push(makeDiv(person));
  }

  return (
    <div className="App">
      <h1>Hello Team</h1>
      <h2>Start editing to see some magic happen!</h2>

      {divs}
    </div>
  );
}
