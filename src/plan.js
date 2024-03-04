import ArcadeImg from "./assets/images/icon-arcade.svg";
import AdvancedImg from "./assets/images/icon-advanced.svg";
import ProImg from "./assets/images/icon-pro.svg";

export const plans = {
  monthly: [
    {
      icon: ArcadeImg,
      name: "Arcade",
      price: "$9/mo",
    },
    {
      icon: AdvancedImg,
      name: "Advanced",
      price: "$12/mo",
    },
    {
      icon: ProImg,
      name: "Pro",
      price: "$15/mo",
    },
  ],
  yearly: [
    {
      icon: ArcadeImg,
      name: "Arcade",
      price: "$90/year",
      text: "2 months free",
    },
    {
      icon: AdvancedImg,
      name: "Advanced",
      price: "$120/year",
      text: "2 months free",
    },
    {
      icon: ProImg,
      name: "Pro",
      price: "$150/year",
      text: "2 months free",
    },
  ],
};
