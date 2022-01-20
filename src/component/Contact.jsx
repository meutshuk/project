import Card from "./Card";

export default function Contact(props) {
  const { data } = props;

  const card = data.map((item) => (
    <Card
      key={item.id}
      name={item.name}
      username={item.username}
      email={item.email}
      phone={item.phone}
      address={item.address}
    />
  ));

  return <div className="container">{card}</div>;
}
