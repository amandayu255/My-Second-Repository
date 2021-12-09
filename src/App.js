import "./styles.css";

function displayPerson(first, last, apps) {
  return (
    <div>
      Hello {first} {last}! You like {apps}.
    </div>
  );
}

function displayApps(one, two) {
  return (
    <div>
      {one}
      {two}!
    </div>
  );
}

export default function App() {
  let people = [
    ["Victor", "Lymar"],
    ["Traci", "Siebel"]
  ];

  let elements = [];
  for (let person of people) {
    let first = person[0];
    let last = person[1];
    elements.push(displayPerson(first, last));
  }

  let apps = [["Instagram"], ["Tik Tok"]];

  let media = [];
  for (let app of apps) {
    let one = app[0];
    let two = app[1];
    elements.push(displayApps(app));
  }

  return <div> {elements} </div>;
  return <div> {media} </div>;
}
