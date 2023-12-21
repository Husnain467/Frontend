import React from "react";
import "./news.css";
import prado from "../Img/prado.webp";
import cruiser from "../Img/cruiser.webp";
import vezel from "../Img/vezel.png";
import Tucson from "../Img/tucson.jpg";

const News = () => {
  const pradoDescription = `
    Unveiling the Toyota Prado – a Masterpiece of Adventure and Elegance! 
    Prepare to embark on a journey where power meets sophistication, and where the road becomes your playground. The Toyota Prado, a mid-size SUV, is more than a vehicle; it's a statement of style, capability, and innovation.

    **Rugged Elegance:**
    The Prado's exterior is a testament to its robust design. With its bold front grille, muscular lines, and distinctive silhouette, the Prado commands attention on any road. Whether you're navigating city streets or conquering off-road terrains, the Prado's rugged elegance stands out.

    **Off-Road Mastery:**
    Adventure awaits with the Prado's exceptional off-road capabilities. Equipped with advanced four-wheel-drive technology, terrain management systems, and durable suspension, this SUV is engineered to tackle the toughest landscapes. Unleash your spirit of exploration with confidence.

    **Luxurious Interior:**
    Step into a world of comfort and luxury. The Prado's interior is crafted with precision, featuring premium materials, modern design elements, and advanced technology. From spacious seating to intuitive controls, every detail is designed for your comfort and convenience.

    **Innovative Features:**
    Stay connected and entertained with the Prado's state-of-the-art features. The infotainment system, navigation, and connectivity options are seamlessly integrated, enhancing your driving experience. Safety is paramount, with advanced driver-assistance features ensuring peace of mind on every journey.

    **Performance Excellence:**
    Powering the Prado is a dynamic and efficient engine. Whether you're cruising on the highway or tackling challenging terrains, the Prado delivers a responsive and exhilarating performance. Experience the thrill of the drive like never before.

    **Versatility Redefined:**
    The Prado is not just a vehicle; it's a versatile companion for your lifestyle. From family road trips to solo adventures, the Prado adapts to your needs. Foldable rear seats, ample cargo space, and thoughtful storage solutions make every journey convenient and enjoyable.

    **Own the Adventure:**
    Join the ranks of those who choose not just a car but a lifestyle. The Toyota Prado is more than transportation; it's an invitation to explore, experience, and embrace the thrill of the open road.

    Discover the Toyota Prado – where every drive is an adventure waiting to unfold.
  `;
  const cruiserDescription = `
    Unveiling the Toyota Prado – a Masterpiece of Adventure and Elegance! 
    Prepare to embark on a journey where power meets sophistication, and where the road becomes your playground. The Toyota Prado, a mid-size SUV, is more than a vehicle; it's a statement of style, capability, and innovation.

    **Rugged Elegance:**
    The Prado's exterior is a testament to its robust design. With its bold front grille, muscular lines, and distinctive silhouette, the Prado commands attention on any road. Whether you're navigating city streets or conquering off-road terrains, the Prado's rugged elegance stands out.

    **Off-Road Mastery:**
    Adventure awaits with the Prado's exceptional off-road capabilities. Equipped with advanced four-wheel-drive technology, terrain management systems, and durable suspension, this SUV is engineered to tackle the toughest landscapes. Unleash your spirit of exploration with confidence.

    **Luxurious Interior:**
    Step into a world of comfort and luxury. The Prado's interior is crafted with precision, featuring premium materials, modern design elements, and advanced technology. From spacious seating to intuitive controls, every detail is designed for your comfort and convenience.

    **Innovative Features:**
    Stay connected and entertained with the Prado's state-of-the-art features. The infotainment system, navigation, and connectivity options are seamlessly integrated, enhancing your driving experience. Safety is paramount, with advanced driver-assistance features ensuring peace of mind on every journey.

    **Performance Excellence:**
    Powering the Prado is a dynamic and efficient engine. Whether you're cruising on the highway or tackling challenging terrains, the Prado delivers a responsive and exhilarating performance. Experience the thrill of the drive like never before.

    **Versatility Redefined:**
    The Prado is not just a vehicle; it's a versatile companion for your lifestyle. From family road trips to solo adventures, the Prado adapts to your needs. Foldable rear seats, ample cargo space, and thoughtful storage solutions make every journey convenient and enjoyable.

    **Own the Adventure:**
    Join the ranks of those who choose not just a car but a lifestyle. The Toyota Prado is more than transportation; it's an invitation to explore, experience, and embrace the thrill of the open road.

    Discover the Toyota Prado – where every drive is an adventure waiting to unfold.
  `;

  const newsData = [
    {
      title: "Exciting News: The Latest Car Models Are Here!",
      content: pradoDescription,
      image: prado,
    },
    {
      title: "Classic Cars Showcase: Timeless Beauties Revived",
      content:cruiserDescription,
      image: cruiser,
    },
  ];

  return (
    <div className="news">
      <h2>Latest News</h2>
      {newsData.map((news, index) => (
        <div key={index}>
          <h3>{news.title}</h3>
          <img src={news.image} alt={`News ${index + 1}`}/>
          <p>{news.content}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
