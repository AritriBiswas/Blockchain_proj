import React from 'react';
import { useState } from "react";
import "./CreateFundPage.css";
import useEth from "../../contexts/EthContext/useEth";



export default function CreateFundPage() {
    const [charityName, setCharityName] = useState("");
    const [ownerAddress, setOwnerAddress] = useState("");
    const [amountRequired, setAmountRequired] = useState("");
    const [minAmountToDonate, setMinAmountToDonate] = useState("");
    const [discription, setDiscription] = useState("");
    const { state } = useEth();
   
   

    // useEffect(() => {
    //     setIsLoading(true);
    //     if (state.contract) {
    //         setIsLoading(false);
    //     }
    // }, [state.contract]);

    const handleSubmit = async () => {
        
        try {
            await state.contract.methods
                .createFund(
                    ownerAddress,
                    charityName,
                    amountRequired,
                    discription,
                    minAmountToDonate
                ).send();
                

            
        } catch (err) {
            console.error(err);
        }

        setCharityName("");
        setOwnerAddress("");
        setAmountRequired("");
        setMinAmountToDonate("");
        setDiscription("");
    };



  return (
    <div className="form-container">
                <h1 className="create-fund-heading">
                    Create Your <span className="main-heading1">Own</span> Fund
                </h1>
                <div className="full-form">
                    <form className="form-fields">
                        <label className="charity-label">
                            Charity Name:
                            <input
                                type="text"
                                className="box"
                                value={charityName}
                                onChange={(e) => setCharityName(e.target.value)}
                            />
                        </label>
                        <label className="charity-label">
                            Owner Address:
                            <input
                                type="text"
                                className="box"
                                value={ownerAddress}
                                onChange={(e) =>
                                    setOwnerAddress(e.target.value)
                                }
                            />
                        </label>
                        <label className="charity-label">
                            Amount Required:
                            <input
                                type="text"
                                className="box"
                                value={amountRequired}
                                onChange={(e) =>
                                    setAmountRequired(e.target.value)
                                }
                            />
                        </label>
                        <label className="charity-label">
                            Min amount to donate:
                            <input
                                type="text"
                                className="box"
                                value={minAmountToDonate}
                                onChange={(e) =>
                                    setMinAmountToDonate(e.target.value)
                                }
                            />
                        </label>
                        <label className="charity-label">
                            Description:
                            <input
                                type="text"
                                className="box"
                                id="desc-box"
                                style={{ height: "27rem", width: "91rem" }}
                                value={discription}
                                onChange={(e) => setDiscription(e.target.value)}
                            />
                        </label>
                    </form>
                   
                        <button
                            className="create-fund-btn"
                            onClick={handleSubmit}
                        >
                            Create
                        </button>
                   
                </div>
            </div>
  )
}
