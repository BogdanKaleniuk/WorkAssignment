export const listMenu = [
  {
    id: "id-1",
    name: "Tacos With Lime",
    url: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
    price: "9.99",
  },
  {
    id: "id-2",
    name: "Fries and Burger",
    url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640",
    price: "10.99",
  },
  {
    id: "id-3",
    name: "іііі and Burger",
    price: "10.99",
  },
];

export default function Product({
  url = "https://24master.com.ua/net-izobrazhenia-na-televizore.jpg",
}) {
  return (
    <ul>
      {listMenu.map((menu) => {
        return (
          <li key={menu.id}>
            <p>{menu.name}</p>
            <p>{menu.price}</p>
            <img src={menu.url || url} alt={menu.name} width={240} />
          </li>
        );
      })}
    </ul>
  );
}
