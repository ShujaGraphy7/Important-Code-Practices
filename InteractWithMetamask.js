import { useState } from "react";
import { ethers } from "ethers";

import MyToken from "../SmartContractAbi/MyToken.json";

const address = "0xF609503a6d7F351CD81833Fad2F520ED406B625c";

function CurrentUser() {
  const [currentUser, setCurrentUser] = useState("");

  const metamaskConnectivity = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();
    const erc721 = new ethers.Contract(address, MyToken, provider);
    const erc721_rw = new ethers.Contract(address, MyToken, signer);

    setCurrentUser((await signer.getAddress()).toString());
  };

  return (
    <>
      <button onClick={metamaskConnectivity}>Connect me</button>
      <div className="mt-5">{currentUser}</div>
    </>
  )
}

export default CurrentUser;
