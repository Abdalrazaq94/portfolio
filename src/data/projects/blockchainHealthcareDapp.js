import dapp1 from "../../assets/dapp-1.png";
import dapp2 from "../../assets/dapp-2.png";
import dapp3 from "../../assets/dapp-3.png";
import dappCard from "../../assets/dapp.png";

const blockchainHealthcareDapp = {
  slug: "blockchain-healthcare-dapp",
  title: "Blockchain Healthcare Management DApp",
  cardDesc: "My honours final year project: patients own their encrypted medical records through Ethereum smart contracts, with an invisible-wallet login so non-technical users never touch crypto.",
  cardImage: dappCard,
  tags: ["Solidity", "React", "ethers.js", "IPFS", "Ollama AI", "Privy", "MetaMask"],
  desc: "My honours final year project at Glasgow Caledonian University: a Web3 healthcare system where patients own and control their encrypted medical records through Ethereum smart contracts, built to solve a real problem: making blockchain usable for people who have never touched crypto before.",
  longDesc: [
    "Traditional healthcare systems rely on centralised databases, creating single points of failure that can compromise patient data. This project builds a decentralised alternative using the Ethereum Sepolia testnet, where patients own their encrypted medical records directly through smart contracts written in Solidity, rather than trusting a hospital's central server.",
    "Personal data is stored off-chain on IPFS, while cryptographic hashes are recorded on-chain to guarantee integrity. This means the system gets blockchain's tamper-proof guarantees without bloating the chain with large medical files.",
    "The system was tested with three simulated roles (patient, doctor, administrator) across 22 real transactions on the Sepolia testnet, achieving an 85% success rate.",
  ],
  usabilityFinding: {
    title: "Key finding: the wallet problem",
    body: [
      "Usability testing surfaced the biggest real-world barrier to blockchain healthcare adoption: non-technical users struggled with the idea of managing a crypto wallet just to load funds and pay for transactions. For a patient who's never used crypto, being asked to buy Ethereum and manage a wallet before they can even book an appointment is a dealbreaker.",
      "After researching this problem in depth, I integrated Privy, a wallet infrastructure tool that lets users authenticate with something familiar: a normal email login, while a wallet is created and managed invisibly behind the scenes. Both patients and doctors sign in normally, with their wallet ID handled entirely in the background. All transaction costs are redirected to a central admin wallet, which absorbs the gas fees on the user's behalf, so patients and doctors never need to think about cryptocurrency at all.",
      "This turned out to be the difference between a technically correct blockchain system and one a real patient could actually use.",
    ],
  },
  securityFinding: {
    title: "Why local AI: keeping patient data offline",
    body: [
      "Healthcare data is some of the most sensitive information a system can hold, so sending it to an external AI API was never an option. Every cloud AI call would mean patient records leaving the system's control, creating a real UK GDPR compliance risk.",
      "To solve this, I ran Ollama locally on-device to power the AI-driven medical data interpretation, rather than calling out to a cloud model like OpenAI or Claude. This means every AI interaction happens entirely offline, with zero patient data ever transmitted over the internet or stored on a third-party server.",
      "The trade-off is real: local AI models are more limited than cloud-hosted ones, and this approach can't currently scale to production without dedicated server infrastructure. But for a healthcare system, that trade-off is the right one: privacy and data sovereignty matter more than raw model power.",
    ],
  },
  images: [dapp1, dapp2, dapp3],
  features: [
    "Smart contracts on Ethereum Sepolia testnet (Solidity)",
    "Hybrid auth: Privy for patients (invisible wallet, email login), MetaMask for doctors",
    "Off-chain storage on IPFS, cryptographic hashes recorded on-chain",
    "Gasless relayer routes transaction costs to a central admin wallet",
    "Three simulated user roles: patient, doctor, administrator",
    "22 real testnet transactions executed, 85% success rate",
  ],
  tools: ["Solidity", "React", "ethers.js", "IPFS", "Ollama", "Privy", "MetaMask", "Ethereum Sepolia Testnet"],
  liveUrl: "https://web3-health-care-dapp.vercel.app/",
  codeUrl: "https://github.com/Abdalrazaq94/web3-health-care-dapp",
  stats: [
    { label: "Transactions tested", value: "22" },
    { label: "Success rate", value: "85%" },
    { label: "User roles", value: "3" },
  ],
};

export default blockchainHealthcareDapp;