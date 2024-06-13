import React, { useEffect, useState } from "react";
import { PackejeDetailes } from "./tabs/PackejeDetailes";
import imgIndividuaUnSlectedl from "./imeges/individuaUnSlectedl.png";
import imgIndividualSelected from "./imeges/individualSelected.png";
import imgPartenerUnSlected from "./imeges/partenerUnSlected.png";
import imgPartnerSelected from "./imeges/partnerSelected.png";
import imgFamilyUnSelected from "./imeges/familyUnSelected.png";
import imgFamilySelected from "./imeges/familySelected.png";
import imgJointFamilyUnSelected from "./imeges/jointFamilyUnSelected.png";
import imgJointFamilySelected from "./imeges/jointFamilySelected.png";
import axios from "axios";

const array = [
  {
    selected: imgIndividualSelected,
    default: imgIndividuaUnSlectedl,
    selectedColour: "orange",
    id: 1,
  },
  {
    selected: imgPartnerSelected,
    default: imgPartenerUnSlected,
    selectedColour: "blue",
    id: 2,
  },
  {
    selected: imgFamilySelected,
    default: imgFamilyUnSelected,
    selectedColour: "red",
    id: 3,
  },
  {
    selected: imgJointFamilySelected,
    default: imgJointFamilyUnSelected,
    selectedColour: "indigo",
    id: 4,
  },
];

export const PoojaPackeje = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [selectedId, setSelectedId] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://devpunya-backend-3gtio2vspq-el.a.run.app/noauth-api/v1/product/poojaById?pooja_id=6"
      )
      .then((response) => {
        setMyData(response.data.results.tabs["पूजा पैकेज"]);
        setSelectedPackage(response.data.results.tabs["पूजा पैकेज"][0])
    })
      .catch((error) => setIsError(error.message));
  }, []);

  const handleClick = (id) => {
    setSelectedId(id);

    const selectedIdData = myData.find((data) => data.id === id);
    setSelectedPackage(selectedIdData);
  };
  return (
    <div>
      {isError !== "" && <h2>{isError}</h2>}
      <div className="flex m-3">
        {myData.map((data) => {
          const { id, price } = data;
          const imgdata = array.find((e) => e.id === id);
          return (
            <div
              key={id}
              className="h-24 bg-slate-300 shadow-md w-[100%] m-1 rounded-xl relative"
              onClick={() => handleClick(id)}
            >
              <span
                className="absolute top-[92%] right-[30%]"
                style={{
                  color: selectedId === id ? "white" : imgdata.selectedColour,
                }}
              >
                {price}
              </span>
              <img
                src={selectedId === id ? imgdata.selected : imgdata.default}
                alt=""
              />
            </div>
          );
        })}
      </div>
      {selectedPackage && <PackejeDetailes packegeData={selectedPackage} />}
    </div>
  );
};
