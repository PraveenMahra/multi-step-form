import { Link } from "react-router-dom";
import { useAppContext } from "./AppContext";

function AddOns() {
  const { state, dispatch } = useAppContext();

  const handleAddOnSelection = (addOn) => {
    const updatedAddOns = [...state.selectedAddOns];
    const indexOfAddOn = updatedAddOns.indexOf(addOn);

    if (indexOfAddOn === -1) {
      updatedAddOns.push(addOn);
    } else {
      updatedAddOns.splice(indexOfAddOn, 1);
    }

    dispatch({ type: "SET_SELECTED_ADDONS", payload: updatedAddOns });
  };

  return (
    <div className="ml-80 w-[48rem]">
      <div>
        <h2 className="text-[#011b3b] text-[3.2rem] font-bold tracking-wide">
          Pick add-ons
        </h2>
        <p className="text-[#8f8f97] tracking-wide mb-[3rem]">
          Add-ons help enhance your gaming experiance.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="border rounded-2xl flex items-center justify-between p-6">
          <div className="flex items-center gap-8">
            <input
              className="w-[2rem] h-[2rem] cursor-pointer"
              type="checkbox"
              onChange={() => handleAddOnSelection("onlineService")}
            />
            <div className=" tracking-wide">
              <p className="text-[#0d234a] font-bold">Online service</p>
              <p className="text-[#b0b0ba] text-[1.4rem] font-[500]">
                Access to multiplayer games
              </p>
            </div>
          </div>
          <div>
            <p className="text-[#4c4791] text-[1.4rem] tracking-wide font-[500]">
              +$1/mo
            </p>
          </div>
        </div>

        <div className="border rounded-2xl flex items-center justify-between p-6">
          <div className="flex items-center gap-8">
            <input
              className="w-[2rem] h-[2rem] cursor-pointer"
              type="checkbox"
              onChange={() => handleAddOnSelection("largerStorage")}
            />
            <div className=" tracking-wide">
              <p className="text-[#0d234a] font-bold">Larger storage</p>
              <p className="text-[#b0b0ba] text-[1.4rem] font-[500]">
                Extra 1TB of cloud save
              </p>
            </div>
          </div>
          <div>
            <p className="text-[#4c4791] text-[1.4rem] tracking-wide font-[500]">
              +$2/mo
            </p>
          </div>
        </div>

        <div className="border rounded-2xl flex items-center justify-between p-6">
          <div className="flex items-center gap-8">
            <input
              className="w-[2rem] h-[2rem] cursor-pointer"
              type="checkbox"
              onChange={() => handleAddOnSelection("customizableProfile")}
            />
            <div className=" tracking-wide">
              <p className="text-[#0d234a] font-bold"> Customizable profile</p>
              <p className="text-[#b0b0ba] text-[1.4rem] font-[500]">
                Custom theme on your proifle
              </p>
            </div>
          </div>
          <div>
            <p className="text-[#4c4791] text-[1.4rem] tracking-wide font-[500]">
              +$2/mo
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-[10rem]">
        <Link to="/select-plan">
          <button className="button-secondary">Go Back</button>
        </Link>
        <Link
          to={{
            pathname: "/summary",
          }}
        >
          <button className="button-primary">Next Step</button>
        </Link>
      </div>
    </div>
  );
}

export default AddOns;
