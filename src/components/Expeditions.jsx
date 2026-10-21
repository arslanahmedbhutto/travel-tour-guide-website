import React, { useState } from "react";
import "./BeginnerGuide.css";
import expeditionImage from "../assets/expiditions.jpg"; // Import the image

const itinerary = [
  {
    title: "Day 1: Arrival",
    description:
      "Welcome to your K2 Base Camp Trek! After landing in Islamabad, look for our team member holding a company sign. We'll take you to a comfortable hotel near the scenic Margalla Hills. After settling in, you can complete any necessary payments and prepare for the adventure ahead!",
  },
  {
    title: "Day 2: Flight to Skardu",
    description:
      "We’ll take a morning flight to Skardu, the gateway to Karakoram. Enjoy stunning views of the Himalayas, including Nanga Parbat. Once in Skardu, our team will escort you to your hotel, where you can relax or explore the local bazaar.",
  },
  {
    title: "Day 3: Drive to Askoli and Mongron Camp",
    description:
      "Today, we’ll embark on an around 6-hour jeep ride to Askoli Village. Enjoy the scenic Shigar Valley and follow the Braldu River. After a break, we’ll continue to Jula/Mongron Camp, where you can unwind with a hot cup of tea and snacks.",
  },
  {
    title: "Day 4: Trek to Paju Camp",
    description:
      "Get ready for stream crossings! We aim to reach Paju Camp by noon, where we’ll set up camp and soak in the beautiful surroundings.",
  },
  {
    title: "Day 5: Trek to Khoburse Camp",
    description:
      "Today's trek takes us through the ups and downs of the Baltoro Glacier. We'll enjoy lunch with views of the stunning Trango Towers before reaching Khoburse Camp for the night.",
  },
  {
    title: "Day 6: Trek to Urdukas Camp",
    description:
      "After breakfast, we’ll trek to Urdukas Camp over the rugged Baltoro Glacier. This will be a shorter day, and we’ll enjoy breathtaking views of the granite spires.",
  },
  {
    title: "Day 7: Trek to Goro I Camp",
    description:
      "We'll navigate the middle of the Baltoro Glacier today, with Masherbrum Peak on our right. After a 3-4 hour trek, we'll stop for lunch and then continue to Goro I Camp for an overnight stay.",
  },
  {
    title: "Day 8: Trek to Goro II Camp",
    description:
      "Today, we’ll trek to Goro II Camp, taking in mesmerizing views along the way. The camp offers stunning sights of Masherbrum Peak, making it worth the trek.",
  },
  {
    title: "Day 9: Trek to Concordia",
    description:
      "A highlight of the trek, today we’ll reach Concordia, surrounded by towering peaks. This area, known as the “throne room of mountain gods,” offers breathtaking views and a unique wilderness experience.",
  },
  {
    title: "Day 10: Trek to Broad Peak Base Camp",
    description:
      "We’ll trek to Broad Peak Base Camp today, crossing glacial streams and enjoying the stunning scenery.",
  },
  {
    title: "Day 11: Trek to K2 Base Camp",
    description:
      "The big day is here! We’ll reach K2 Base Camp after a 3-4 hour trek on the Godwin Austin Glacier. Take a moment to visit the Gilkey Memorial before camping overnight at Broad Peak Base Camp.",
  },
  {
    title: "Day 12: Return to Concordia",
    description:
      "We’ll trek back to Concordia today, enjoying beautiful views of the Karakoram mountains along the way.",
  },
  {
    title: "Day 13: Return to Goro II",
    description:
      "Today’s trek will take us back to Goro II. The return hike will be easier, with familiar and stunning views of the surrounding peaks.",
  },
  {
    title: "Day 14: Return to Goro I",
    description:
      "We’ll continue back to Goro I, enjoying the familiar scenery and a relaxing overnight stay.",
  },
  {
    title: "Day 15: Trek to Khoburse",
    description:
      "We'll trek from Urdukas to Khoburse today, taking in the beautiful trail along the Baltoro Glacier.",
  },
  {
    title: "Day 16: Trek to Paju Camp",
    description:
      "Today's trek brings us back to Paju Camp, where we’ll set up for an overnight stay amidst stunning views.",
  },
  {
    title: "Day 17: Trek to Mongron Camp",
    description:
      "We’ll trek back to Mongron Camp today, marking our last night camping in the wild.",
  },
  {
    title: "Day 18: Return to Skardu",
    description:
      "We’ll take jeeps back to Skardu city, where you'll have time to freshen up, shop for souvenirs, and explore.",
  },
  {
    title: "Day 19: Return to Islamabad",
    description:
      "Today, we’ll catch a PIA flight back to Islamabad, returning to the vibrant capital city of Pakistan.",
  },
];


const Expeditions = () => {
  const [openCards, setOpenCards] = useState(itinerary.map(() => false));

  const toggleCard = (index) => {
    const updatedCards = [...openCards];
    updatedCards[index] = !updatedCards[index];
    setOpenCards(updatedCards);
  };

  return (
    <div>
      {/* Two-column Layout */}
      <div className="intro-section">
        <div className="text-content">
          <h1 className="title">Beginner's Guide to the K2 Base Camp Trek</h1>
          <p className="intro">
            Join us on an unforgettable adventure with our K2 Base Camp Trek for Beginners! This specially designed 20-day trek offers shorter walking distances, perfect for beginners, seniors, or anyone seeking a flexible itinerary.
          </p>
          <h3 className="title">Overview</h3>
          <p>
            Immerse yourself in the stunning landscapes of the Karakoram mountains at a comfortable pace. With shorter daily hikes, you'll have ample time to rest and soak in the breathtaking views.
          </p>
          <br/>
          <h3 className="title">All-Inclusive Experience</h3>
          <p>
            Starting and ending in Islamabad, <b>Summit Trails</b> will meet you at the airport and accompany you throughout your journey. Our experienced guides and support staff are dedicated to your safety and enjoyment as you explore the majestic surroundings. This trek is ideal for those who may not have extensive trekking experience but want to witness the beauty of K2 Base Camp.
          </p>
        </div>
        <div className="image-container">
          <img src={expeditionImage} alt="Expedition" className="expedition-image" />
        </div>
      </div>
<div>

  <h1 className="route">Route</h1>


</div>
      {/* Itinerary Section */}
      <div className="itinerary-section">
        {itinerary.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-header" onClick={() => toggleCard(index)}>
              <h2 className="card-title">{item.title}</h2>
              <span className="toggle-arrow">
                {openCards[index] ? "▲" : "▼"}
              </span>
            </div>
            {openCards[index] && (
              <p className="card-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>


      <div className="highlights-services">
  {/* Highlights Section */}
  <section className="highlights-section">
    <h2 className="route-2">K2 Base Camp Trek for Beginners Highlights with Summit Trails</h2>
   <br/><br/>
    <ul className="highlight-list">
      <li>Explore the Base Camps of K2 and Broad Peak</li>
      <li>Overnight stay at K2 Base Camp, experiencing the grandeur of the region</li>
      <li>Visit Concordia, known as the "Throne Room of the Mountain Gods"</li>
      <li>Trek across the Baltoro Glacier, one of the longest and largest glaciers outside polar regions</li>
      <li>Pay respects at the Gilkey Memorial</li>
      <li>Experienced local guides with deep knowledge of the mountains</li>
      <li>
        Stunning views of iconic 8,000m peaks, including K2 (8,611m), Broad Peak
        (8,051m), and Gasherbrum II (8,035m) from various vantage points
      </li>
      <li>
        Sightseeing of majestic peaks between 5,000m and 8,000m, such as Gasherbrum III, Chogolisa, Masherbrum, Trango Towers, and many more
      </li>
      <li>Experience breathtaking glaciers, glacial lakes, waterfalls, and streams</li>
      <li>Visit the beautiful valleys of Shigar and enjoy the vibrant culture of the region</li>
      <li>Insight into the life of Balti porters and an exciting jeep safari</li>
      <li>Opportunity to meet fellow mountaineers at the base camps</li>
      <li>Sightseeing tours in Skardu and Islamabad</li>
      <li>Knowledgeable indigenous team dedicated to your adventure</li>
      <li>A professional, well-trained support team for your safety and enjoyment</li>
      <li>
        Competitive pricing with flexible itineraries for fixed departures and customized treks
      </li>
    </ul>
  </section>

  {/* Services Section */}
  <section className="services-section">
    <br/><br/><br/>
    <h2 className="route-2">Services Included for K2 Base Camp Trek for Beginners with Summit Trails</h2>
    <br/>
    <ul className="services-list">
      <li>Comprehensive domestic transportation, including flights, jeeps, and cars</li>
      <li>Comfortable hotel accommodations on a twin-sharing basis</li>
      <li>Experienced indigenous team with extensive mountain knowledge</li>
      <li>Twin-sharing accommodations during trekking days</li>
      <li>Separate room or tent for female participants</li>
      <li>Professional guides and support staff for a safe journey</li>
      <li>Skilled cooking staff and assistants for delicious meals</li>
      <li>Reliable porter team for personal luggage (up to 15kg per person)</li>
      <li>All meals provided as per the itinerary</li>
      <li>Trekking permits, waste management fees, and toll/bridge charges included</li>
      <li>Satellite phone available for emergencies</li>
      <li>
        Daily supply of boiled water, snacks, cookies, and dried fruits during the trek
      </li>
      <li>Basic first aid kit for any minor medical needs</li>
      <li>Fully equipped mess tents, sleeping tents, and toilet/shower facilities</li>
    </ul>
  </section>
</div>

    </div>


        


  );
};

export default Expeditions;