import React from "react";
import Navigation from "../components/navbar.js";
import "../styles/styles.css";

export default function About() {
  return (
    <>
      <Navigation />
      <div className="page public-sans">
        <h1>About Us</h1>
        <h5>About USDA</h5>
        <p>
          On May 15, 1862, President Abraham Lincoln signed legislation to establish the United States Department 
          of Agriculture (USDA or the Department). Two and a half years later in his final message to Congress,
          Lincoln called USDA “The People’s Department.” At that time, about half of all Americans lived on farms,
          compared with about two percent today. But through our work on food, agriculture, economic development,
          science, natural resource conservation, and a host of other issues, USDA continues to fulfill Lincoln’s
          vision—serving millions of Americans every day. The agriculture and food industry contributes $1.1 trillion
          to the U.S. domestic product and represents nearly 11% of total U.S. employment. Furthermore, USDA over
          the years has gained more authorities to expand its support not only in agriculture but the support
          infrastructure that give all producers better access to market and its surrounding communities and
          natural resources to also thrive. Today, USDA is comprised of 29 agencies organized under eight Mission
          Areas and 16 Staff Offices, with nearly 100,000 employees serving the American people at more than 6,000
          locations across the country and abroad.
        </p>
        <h5>USDA Mission </h5>
        <p>
          To serve all Americans by providing effective, innovative, science-based public policy leadership
          in agriculture, food and nutrition, natural resource protection and management, rural development,
          and related issues with a commitment to deliverable equitable and climate-smart opportunities that inspire
          and help America thrive
        </p>
        <h5>USDA Vision</h5> 
        <p>
          An equitable and climate-smart food and agriculture economy that protects and improves the health,
          nutrition, and quality of life of all Americans; yields healthy land, forests, and clean water;
          helps rural America thrive; and feeds the world.
        </p>
        <h5>USDA Core Values </h5>
        <p>
          <b>Respect and Dignity:</b> We treat all people with courtesy and respect, and we value the inherent dignity of every individual.
        </p>
        <p>
          <b>Equity and Inclusion:</b> We seek to end discrimination in all forms, wherever it exists, and expand services and opportunities to underserved people and communities across America, starting with our workforce. 
        </p>
        <p>
          <b>Trust and Integrity:</b> We act in a manner that is deserving of the public’s trust and with the utmost integrity in everything we do as public servants. 
        </p>
        <p>
          <b>Service and Results:</b> We listen to our internal and external customers and actively incorporate their ideas on how to best reach our diverse customers and deliver service that significantly and positively impacts the lives of all Americans. 
        </p>
        <p>
          <b>Science Leadership:</b> We base our decisions and policy on science and data that are reliable, timely, relevant and free from political interference.
        </p>
        {/* Add more content here */}
      </div>
    </>
  );
}