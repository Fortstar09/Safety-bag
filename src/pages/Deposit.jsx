import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomCard from "@/components/CustomCard";
import DashboardLayout from "@/components/DashboardLayout";
import { X } from "lucide-react";

const Deposit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [balance, setBalance] = useState(0);

  // Load balance from localStorage
  useEffect(() => {
    const storedBalance = localStorage.getItem("walletBalance");
    if (storedBalance) {
      setBalance(parseFloat(storedBalance));
    }
  }, []);

  const handleDeposit = () => setIsModalOpen(true);

  const handleAmountSubmit = (e) => {
    e.preventDefault();
    const enteredAmount = parseFloat(amount);

    // Validate amount
    if (isNaN(enteredAmount) || enteredAmount < 12) {
      alert("Minimum deposit is 12 USDC");
      return;
    }

    console.log("Amount entered:", enteredAmount);

    setLoading(true);
    setStep(2);

    // simulate 3s spinner
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 3000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("0x8F1cD9Dabf88dBeDBeAf32451Afd1203aF8cE0D2");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirmDeposit = () => {
    setStep(4); // reload screen
    setTimeout(() => {
      const newBalance = balance + parseFloat(amount);
      localStorage.setItem("walletBalance", newBalance.toString());
      setBalance(newBalance);
      setStep(5); // show confirmed
    }, 3000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStep(1);
    setAmount("");
    setCopied(false);
  };

  return (
    <DashboardLayout>
      <div className="bg-white w-full py-10 px-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CustomCard title="Deposit with crypto" img="/icons/bank-fill.svg">
           <p className="text-gray-600 text-sm">
            Limit: <span className="font-medium text-gray-800">12 - 12,000 USDC</span>
          </p>
          <p className="text-gray-600 mt-2 text-sm">
            Balance: <span className="font-semibold">{balance.toFixed(2)} USDC</span>
          </p>
          <button
            onClick={handleDeposit}
            className="text-white mt-4 bg-green py-2 w-full px-3 inline-flex justify-center items-center rounded-[4px] hover:bg-green/70 font-semibold"
          >
            Deposit
          </button>
        </CustomCard>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl mb-2"
              >
                <X size={16} color="#212121" />
              </button>

              {/* Progress bar */}
              <div className="flex justify-between items-center my-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div
                    key={s}
                    className={`h-2 w-1/5 ${
                      s <= step ? "bg-green" : "bg-gray-200"
                    }`}
                  ></div>
                ))}
              </div>

              {step === 1 && (
                <form
                  onSubmit={handleAmountSubmit}
                  className="flex flex-col gap-4"
                >
                  <h2 className="text-lg font-semibold text-center mb-2">
                    Enter Deposit Amount (USDC)
                  </h2>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    required
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green"
                  />
                  <button
                    type="submit"
                    className="bg-green text-white py-2 rounded hover:bg-green/80"
                  >
                    Submit
                  </button>
                </form>
              )}

              {step === 2 && loading && (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="w-10 h-10 border-4 border-green border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-600">Generating deposit address...</p>
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col items-center gap-4">
                  <h2 className="text-lg font-semibold text-center">
                    Send USDC to the address below
                  </h2>
                  <div className="bg-gray-100 px-3 py-2 rounded w-full text-center text-sm break-all flex justify-between items-center">
                    <span>0x8F1cD9Dabf88dBeDBeAf32451Afd1203aF8cE0D2</span>
                    <svg
                      onClick={handleCopy}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 16h8m-8-4h8m2 8a2 2 0 002-2V6a2 2 0 00-2-2H8l-4 4v12a2 2 0 002 2h12z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-green">
                    {copied ? "Copied!" : "Click icon to copy"}  or Scan Qr Code below
                  </p>
                  <img src="/images/qr-code.png" alt="qrcode"  />
                  <button
                    onClick={handleConfirmDeposit}
                    className="bg-green text-white py-2 w-full rounded hover:bg-green/80"
                  >
                    I have sent the crypto
                  </button>
                </div>
              )}

              {step === 4 && (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="w-10 h-10 border-4 border-green border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-600">Verifying deposit...</p>
                </div>
              )}

              {step === 5 && (
                <div className="flex flex-col items-center justify-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-green rounded-full flex items-center justify-center text-white text-2xl mb-3"
                  >
                    ✓
                  </motion.div>
                  <p className="text-green font-semibold">
                    Deposit Confirmed!
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Your new balance is {balance.toFixed(2)} USDC
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DashboardLayout>
  );
};

export default Deposit;
