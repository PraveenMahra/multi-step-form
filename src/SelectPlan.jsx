// import { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAppContext } from "./AppContext";
import { plans } from "./plan";

function SelectPlan() {
  const { state, dispatch } = useAppContext();
  const { selectedBilling, selectedPlanIndex } = state;

  const selectedPlans =
    selectedBilling === "monthly" ? plans.monthly : plans.yearly;

  const handlePlanSelection = (index) => {
    dispatch({ type: "SET_SELECTED_PLAN_INDEX", payload: index });
  };

  const handleBillingChange = (billing) => {
    dispatch({ type: "SET_SELECTED_BILLING", payload: billing });
  };

  return (
    <div className="ml-80 w-[48rem]">
      <div>
        <h2 className="text-[#011b3b] text-[3.2rem] font-bold tracking-wide">
          Select your plan
        </h2>
        <p className="text-[#8f8f97] tracking-wide mb-[3rem]">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="flex gap-8">
        {selectedPlans.map((plan, index) => (
          <div
            key={index}
            className={`border  p-6 w-[20rem]  flex flex-col rounded-2xl hover:border-[#534e98] hover:bg-[#f8f9fe] transition-all duration-300 cursor-pointer ${
              selectedPlanIndex === index ? "border-[#534e98] bg-[#f8f9fe]" : ""
            }`}
            onClick={() => handlePlanSelection(index)}
          >
            <img className="w-[4rem]" src={plan.icon} alt="icon" />
            <span className="mt-16 text-[#001533] font-bold tracking-wide">
              {plan.name}
            </span>
            <span className="text-[#95959f] tracking-wide text-[1.4rem]">
              {plan.price}
            </span>
            <span className="text-[1.2rem] text-[#001533] tracking-wide">
              {plan.text}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-[3rem] gap-8 bg-[#f8f9fe] p-4 cursor-pointer ">
        <span
          className={`tracking-wide font-bold text-[#15243d] text-[1.4rem] clickable ${
            selectedBilling === "monthly" ? "text-[#15243d]" : "text-[#9696a0]"
          }`}
          onClick={() => handleBillingChange("monthly")}
        >
          Monthly
        </span>
        <span
          className="text-[3rem] text-[#15243d] clickable"
          onClick={() => handleBillingChange("monthly")}
        >
          {selectedBilling === "monthly" ? <BsToggleOff /> : <BsToggleOn />}
        </span>
        <span
          className={`tracking-wide font-bold text-[#15243d] text-[1.4rem] clickable ${
            selectedBilling === "yearly" ? "text-[#15243d]" : "text-[#9696a0]"
          }`}
          onClick={() => handleBillingChange("yearly")}
        >
          Yearly
        </span>
      </div>

      <div className="flex justify-between mt-[10rem]">
        <Link to="/personal-info">
          <button className="button-secondary">Go Back</button>
        </Link>
        <Link
          to={{
            pathname: "/add-ons",
          }}
        >
          <button
            className={`button-primary ${
              selectedPlanIndex !== null ? "" : "disabled"
            }`}
          >
            Next Step
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SelectPlan;
