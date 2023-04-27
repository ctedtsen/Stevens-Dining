import React from "react";
import SlideShow from "./SlideShow";
import Chat from "./Chat";

const Home = () => {
  let dining_locations =[
    {
      name: "Pierce Cafe",
      description: "Pierce Cafe serves coffees, sandwiches, and snacks, including muffins and other pastries.",
      location: "Howe Center Second Floor",
      hours: "Monday - Friday: 8 am - 8 pm, Saturday - Sunday: 8 am - 6 pm",
      crowd_fav: "Coffee",
      rating: "3",
      menu: [
        "https://www.stevensdining.com/wp-content/uploads/2022/09/17.jpg",
        "https://www.stevensdining.com/wp-content/uploads/2022/09/16.jpg",
        "https://www.stevensdining.com/wp-content/uploads/2022/09/14.jpg",
        "https://www.stevensdining.com/wp-content/uploads/2022/09/15.jpg",
      ],
      img: "https://www.stevens.edu/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmviowpldu823%2FOUV8PdrYVTyR4E6N43zrl%2F16a1cffae8f6a3b915cac1e35355c4c9%2FDSCF1308.jpg%3Fw%3D640%26h%3D360%26f%3Dcenter%26q%3D80%26fit%3Dfill&w=2400&q=80",
      link: "/piercecafe", 
      id: 7
    },
    {
      name: "America's Cup",
      description: "At America's Cup, you can stop by the Starbucks for snacks and a coffe, or head over to Create for sandwiches and salads.",
      location: "Library",
      hours: "Monday - Friday: 9 am - 6 pm (Starbucks), 11 am - 6 pm (Create)",
      crowd_fav: "Chicken Salad",
      rating: "4",
      menu: [
        "https://www.stevensdining.com/wp-content/uploads/2022/09/8.jpg",
        "https://www.stevensdining.com/wp-content/uploads/2022/09/5.jpg"
      ], 
      img: "https://www.stevens.edu/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmviowpldu823%2F6kglSEkQkhgKD8aJd88b8r%2Ffe1f30df06c4f862c701d8919e8d6057%2FCampus_Public_Spaces__5_.png%3Fw%3D640%26h%3D360%26f%3Dcenter%26q%3D80%26fit%3Dfill&w=2400&q=80",
      link: "/america",
      id: 1
    },
    {
      name: "Gateway Cafe",
      description: "At Gateway Cafe, you can get a Lavazza coffe as well as various snacks and meals, including paninis, yogurts parfaits, breakfast sandwhiches, and smoothies.",
      location: "Gateway North",
      hours: "Monday - Friday: 8 am - 8 pm",
      crowd_fav: "Panini",
      rating: "3",
      menu: [
        "https://www.stevensdining.com/wp-content/uploads/2022/09/10.jpg",
        "https://www.stevensdining.com/wp-content/uploads/2022/09/11.jpg",
        "https://www.stevensdining.com/wp-content/uploads/2022/09/12.jpg"
      ],
      img: "https://www.stevens.edu/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmviowpldu823%2F3u1j1fbjJe1D2HGaxeqWU0%2F435b90df29dc5063098c81804791ae4f%2Fnewcafe.jpg%3Fw%3D640%26h%3D360%26f%3Dcenter%26q%3D80%26fit%3Dfill&w=2400&q=80",
      link: "/gateway",
      id: 2
    },
    {
      name: "Pierce Dining Hall",
      description: "Pierce Dining Hall serves breakfast, lunch, and dinner, having different items on different days.",
      location: "Howe Center",
      hours: "Monday - Sunday: 7 am - Midnight",
      crowd_fav: "Breakfast",
      rating: "1",
      menu: [
        "https://www.stevensdining.com/webtrition-pierce-dining-hall/",
      ],
      img: "https://www.stevensdining.com/wp-content/uploads/2020/08/Pierce-Photo-scaled-e1620153827402.jpg",
      link: "/pierce",
      id: 6
    },
    {
      name: "Grill Nation",
      description: "Grill Nation has a variety of American Cuisine, including burgers, hcicken tenders, and more. Customers have the ability to customize burgers and sandwiches in many ways.",
      location: "UCC Marketplace",
      hours: "Monday - Sunday: 7 am - Midnight",
      crowd_fav: "Burger",
      rating: "2",
      menu: [
        "https://www.stevensdining.com/wp-content/uploads/2022/09/18.jpg"
      ],
      img: "https://www.stevensdining.com/wp-content/uploads/2022/09/1-1-e1663099635784.jpg",
      link: "/grill", 
      id: 3
    },
    {
      name: "Halal Stall",
      description: "Celebrate Afghan cuisine at the Halal Stall. Here, customers can cutomize their meal, with choices between bowls, salads, and pitas, and even more choices for the proteins and toppings.",
      location: "UCC Marketplace",
      hours: "Monday - Sunday: 11 am - Midnight",
      crowd_fav: "Pita with Chicken Schwarma",
      rating: "5",
      menu: [
        "https://www.stevensdining.com/wp-content/uploads/2022/10/Retail-Menu-Boards-2022-20.jpg"
      ],
      img: "https://www.stevensdining.com/wp-content/uploads/2022/09/8-1-e1663099890551.jpg",
      link: "/halal",
      id: 4
    },
    {
      name: "Piccola Italia",
      description: "At Piccola Italia serves traditional itallian food, including flatbread pizzas, calzones, sandwiches, pasta, and more!",
      location: "UCC Marketplace",
      hours: "Monday - Sunday: 11 am - 8 pm",
      crowd_fav: "Cheese Pizza",
      rating: "3",
      menu: [
        "https://www.stevensdining.com/wp-content/uploads/2022/09/7-1-e1663099991652.jpg"
      ], 
      img: "https://www.stevensdining.com/wp-content/uploads/2022/09/7-1-e1663099991652.jpg",
      link: "/italia",
      id: 5
    },
    {
      name: "Sono",
      description: "Celebrate Latin American cuisine at Sono. At Sono you can enjoy burritos, quesadillas, tacos, bowls, and more! You are able to design your own meal from a selection of proteins, bean, rice, sauces, and toppings.",
      location: "UCC Marketplace",
      hours: "Monday - Sunday: 11 am - 8 pm",
      crowd_fav: "Chicken Burrito",
      rating: "5",
      menu: [
        "https://www.stevensdining.com/wp-content/uploads/2022/09/Sono-Website.001-scaled.jpeg"
      ],
      img: "https://www.stevensdining.com/wp-content/uploads/2022/09/3-1-e1663099776756.jpg",
      link: "/sono",
      id: 8
    }
  ];


  
  return (
    <div>
      <br/>
      <h1>Steven Dining</h1>
      <br/>
      <SlideShow dining_locations={dining_locations}/>
      <br/>
      <br/>
      <Chat />
    </div>
  );
};

export default Home;
