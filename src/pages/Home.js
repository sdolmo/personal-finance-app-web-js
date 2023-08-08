import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import "../assets/styles/Home.css";

const features = [
  {
    id: 1,
    title: "Secure",
    icon: "lock",
    content: "Safely connect banking data by loging into your account",
  },
  {
    id: 2,
    title: "Transactions",
    icon: "check",
    content: "View latest transactions data from your connected accounts",
  },
  {
    id: 3,
    title: "Budgeting",
    icon: "bill",
    content:
      "Compare spending over the last few months and review distribution of spending habits",
  },
];

export default function Home() {
  return (
    <div className="home">
      <Hero heading="Budgeting" subHeading="made easy" />
      <div className="features__container">
        <div className="features">
          {features.map((feature) => (
            <Card
              key={feature.id}
              title={feature.title}
              content={feature.content}
              iconImg={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
