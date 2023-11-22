import { Link } from "react-router-dom";
import { useAppContext } from "./AppContext";

function Summary() {
  const { state } = useAppContext();
  const { selectedBilling, selectedPlanIndex, selectedAddOns } = state;

  const plans = {
    monthly: [
      {
        icon: "/src/assets/images/icon-arcade.svg",
        name: "Arcade",
        price: "$9/mo",
      },
      {
        icon: "/src/assets/images/icon-advanced.svg",
        name: "Advanced",
        price: "$12/mo",
      },
      { icon: "/src/assets/images/icon-pro.svg", name: "Pro", price: "$15/mo" },
    ],
    yearly: [
      {
        icon: "/src/assets/images/icon-arcade.svg",
        name: "Arcade",
        price: "$90/year",
        text: "2 months free",
      },
      {
        icon: "/src/assets/images/icon-advanced.svg",
        name: "Advanced",
        price: "$120/year",
        text: "2 months free",
      },
      {
        icon: "/src/assets/images/icon-pro.svg",
        name: "Pro",
        price: "$150/year",
        text: "2 months free",
      },
    ],
  };

  const selectedPlans =
    selectedBilling === "monthly" ? plans.monthly : plans.yearly;
  const selectedPlan = selectedPlans[selectedPlanIndex];

  const calculateTotal = () => {
    let total = parseInt(selectedPlan.price.substring(1), 10);

    selectedAddOns.forEach((addOn) => {
      if (addOn === "onlineService") {
        total += 1;
      } else if (addOn === "largerStorage") {
        total += 2;
      } else if (addOn === "customizableProfile") {
        total += 2;
      }
    });

    return total;
  };

  return (
    <div className="ml-80 w-[48rem]">
      <div>
        <h2 className="text-[#011b3b] text-[3.2rem] font-bold tracking-wide">
          Finishing up
        </h2>
        <p className="text-[#8f8f97] tracking-wide mb-[3rem]">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="flex flex-col bg-[#f8f9fe] gap-8 p-8">
        <div className="flex items-center justify-between">
          <div className="tracking-wide">
            <p className="text-[#0d234a] font-bold">
              {selectedPlan.name} ({selectedBilling})
            </p>
            <Link to="/select-plan">
              <p className="text-[#b0b0ba] text-[1.4rem] font-[500] underline hover:text-[#0d234a] cursor-pointer">
                Change
              </p>
            </Link>
          </div>
          <div>
            <p className="text-[#011b3b] tracking-wide font-bold">
              {selectedPlan.price}
            </p>
          </div>
        </div>
        <div className="border h-[1px] w-auto"></div>
        {selectedAddOns.map((addOn) => (
          <div className="flex justify-between tracking-wide" key={addOn}>
            <p className="text-[#b0b0ba] text-[1.4rem] font-[500]">{addOn}</p>
            <span className="text-[#4c4791] text-[1.4rem]">
              +${addOn === "onlineService" ? 1 : 2}/mo
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between tracking-wide mt-16 p-8">
        <p className="text-[#b0b0ba] text-[1.4rem] font-[500]">
          Total (per month)
        </p>
        <span className="text-[#453fd4] font-bold">${calculateTotal()}mo</span>
      </div>
      <div className="flex justify-between mt-[10rem]">
        <Link to="/add-ons">
          <button className="button-secondary">Go Back</button>
        </Link>
        <Link to="/thank-you">
          <button className="button-primary">Confirm</button>
        </Link>
      </div>
    </div>
  );
}

export default Summary;
