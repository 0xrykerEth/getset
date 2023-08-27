import { ethers } from "./ethers.js";
import { abi, contract } from "./contracts.js";

const set = document.querySelector(".set");
const get = document.querySelector(".get");
const input = document.querySelector(".mood");
const cnbtn = document.querySelector(".cntbtn");
const addy = document.querySelector(".addy");
const showmood = document.querySelector(".showMood");
const mood = document.querySelector(".mood");

cnbtn.onclick = connect;
get.onclick = getMood;
set.onclick = setMood;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const address = await ethereum.request({ method: "eth_accounts" });
    addy.innerHTML = address;
    console.log(address.reverse());
  }
}

async function getMood() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contracts = new ethers.Contract(contract, abi, signer);
    const mood = await contracts.getMood();
    console.log(mood);
    showmood.innerText = `Rate Banak being a bitch in a scale of to 10: ${mood}`;
    console.log(mood);
  }
}

async function setMood() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contracts = new ethers.Contract(contract, abi, signer);
    const moods = mood.value;
    await contracts.setMood(moods);
  }
}
