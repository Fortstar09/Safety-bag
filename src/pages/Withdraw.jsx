/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import CustomCard from "@/components/CustomCard";
import { toast } from "sonner";

const PENDING_TO_PROCESS_MS = 4000;
const PROCESSING_TO_COMPLETE_MS = 10000;
const MIN_WITHDRAWAL = 20;
const MAX_WITHDRAWAL = 10000;

const Withdraw = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [amount, setAmount] = useState("");
  const [coin, setCoin] = useState("USDT");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(2500);
  const [withdrawals, setWithdrawals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const timeoutsRef = useRef({});

  // Load data from persistent storage on mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load balance
        const balanceResult = await window.storage.get("walletBalance");
        if (balanceResult) {
          setBalance(parseFloat(balanceResult.value));
        }

        // Load withdrawals
        const withdrawalsResult = await window.storage.get("withdrawals");
        if (withdrawalsResult) {
          try {
            setWithdrawals(JSON.parse(withdrawalsResult.value));
          } catch {
            setWithdrawals([]);
          }
        }
      } catch (error) {
        console.log("No stored data found, using defaults:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  // Save withdrawals to persistent storage whenever they change
  useEffect(() => {
    if (!isLoading) {
      const saveWithdrawals = async () => {
        try {
          await window.storage.set("withdrawals", JSON.stringify(withdrawals));
        } catch (error) {
          console.error("Failed to save withdrawals:", error);
        }
      };
      saveWithdrawals();
    }
  }, [withdrawals, isLoading]);

  // Save balance to persistent storage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      const saveBalance = async () => {
        try {
          await window.storage.set("walletBalance", balance.toString());
        } catch (error) {
          console.error("Failed to save balance:", error);
        }
      };
      saveBalance();
    }
  }, [balance, isLoading]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(timeoutsRef.current).forEach((t) => clearTimeout(t));
    };
  }, []);

  // Worker: watch withdrawals array; if no processing tx, start the next pending flow.
  useEffect(() => {
    const hasProcessing = withdrawals.some((t) => t.status === "processing");
    if (!hasProcessing) {
      const nextPending = withdrawals.find((t) => t.status === "pending");
      if (nextPending) {
        startPendingToProcessingFlow(nextPending.id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [withdrawals]);

  const startPendingToProcessingFlow = (txId) => {
    if (timeoutsRef.current[txId]) {
      clearTimeout(timeoutsRef.current[txId]);
    }

    const t1 = setTimeout(() => {
      setWithdrawals((prev) =>
        prev.map((tx) =>
          tx.id === txId
            ? { ...tx, status: "processing", updatedAt: Date.now() }
            : tx
        )
      );

      const t2 = setTimeout(() => {
        setWithdrawals((prev) =>
          prev.map((tx) =>
            tx.id === txId
              ? { ...tx, status: "completed", updatedAt: Date.now() }
              : tx
          )
        );

        setBalance((prev) => {
          const tx = withdrawals.find((t) => t.id === txId) || null;
          const amt = tx ? parseFloat(tx.amount) : 0;
          return +(prev - amt).toFixed(6);
        });

        delete timeoutsRef.current[txId];
      }, PROCESSING_TO_COMPLETE_MS);

      timeoutsRef.current[txId] = t2;
    }, PENDING_TO_PROCESS_MS);

    timeoutsRef.current[txId] = t1;
  };

  const computeFeeAndReceive = (amt) => {
    const fixedFee = 1;
    const variable = amt * 0.003;
    const fee = +(fixedFee + variable).toFixed(6);
    const receive = +(amt - fee).toFixed(6);
    return { fee, receive };
  };

  const submitWithdrawal = () => {
    const amt = parseFloat(amount);
    if (isNaN(amt)) {
      alert("Enter a valid amount");
      return;
    }

    const dynamicMin = Math.max(MIN_WITHDRAWAL, 1);
    const dynamicMax = Math.min(MAX_WITHDRAWAL, balance);

    if (amt < dynamicMin) {
      alert(`Minimum withdrawal is ${dynamicMin} USDT`);
      return;
    }
    if (amt > dynamicMax) {
      alert(
        `Maximum withdrawal is ${dynamicMax} USDT (or your current balance)`
      );
      return;
    }
    if (!address || address.length < 8) {
      alert("Please provide a valid address");
      return;
    }

    const { fee, receive } = computeFeeAndReceive(amt);

    const tx = {
      id: `tx_${Date.now()}`,
      amount: amt,
      coin,
      address,
      fee,
      receiveAmount: receive,
      status: "pending",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    setWithdrawals((prev) => [tx, ...prev]);
    setModalStep(3);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setModalStep(1);
    setAmount("");
    setAddress("");
    setCoin("USDT");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalStep(1);
    setAmount("");
    setAddress("");
    setCoin("USDT");
  };

  const formatTime = (ts) => {
    if (!ts) return "-";
    const d = new Date(ts);
    return d.toLocaleString();
  };

  const handleStep1Submit = () => {
    const amt = parseFloat(amount);
    const dynamicMin = Math.max(MIN_WITHDRAWAL, 1);
    const dynamicMax = Math.min(MAX_WITHDRAWAL, balance);
    if (isNaN(amt) || amt <= 0) {
      alert("Enter a valid amount");
      return;
    }
    if (amt < dynamicMin) {
      alert(`Minimum withdrawal is ${dynamicMin} USDT`);
      return;
    }
    if (amt > dynamicMax) {
      alert(`Maximum withdrawal is ${dynamicMax} USDT`);
      return;
    }
    if (!address || address.length < 8) {
      alert("Please enter a valid address");
      return;
    }
    setModalStep(2);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600 dark:text-textWhite2/70">Loading...</div>
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="min-h-dvh bg-white dark:bg-bgDark2 ">
        <div className="bg-white dark:bg-bgDark2  w-full py-10 px-5 md:px-7">
          <h1 className="text-2xl font-bold mb-6 dark:text-textWhite1">Withdraw</h1>
          <div className="bg-white dark:bg-bgDark2  w-full py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <CustomCard title="Withdraw to wallet" img="/icons/bank-fill.svg">
              <p className="text-gray-600 dark:text-textWhite2/70 text-sm">
                Limit:{" "}
                <span className="font-medium text-gray-800 dark:text-slate-200/80">
                  20 - 12,000 USDT
                </span>
              </p>
              <p className="text-gray-600 dark:text-textWhite2/70 mt-2 text-sm">
                Balance:{" "}
                <span className="font-semibold">{balance.toFixed(2)} USDT</span>
              </p>
              <button
                onClick={openModal}
                className="text-white mt-4 bg-brand py-2 w-full px-3 inline-flex justify-center items-center rounded-[6px] hover:bg-brand/70 font-semibold"
              >
                Deposit
              </button>
            </CustomCard>
            <CustomCard title="Paypal" img="/icons/paypal.svg">
              <p className="text-gray-600 dark:text-textWhite2/70 text-sm">
                Limit:{" "}
                <span className="font-medium text-gray-800 dark:text-slate-200/80">
                  50 - 5,000 USDT
                </span>
              </p>
              <p className="text-gray-600 dark:text-textWhite2/70 mt-2 text-sm opacity-0">
                Balance:{" "}
                <span className="font-semibold">{balance.toFixed(2)} USDT</span>
              </p>
              <button
                  onClick={()=> {
                  toast.error("Service unavailable right now, kindly try Withdraw to wallet")
                }}
                className="text-white mt-4 bg-brand py-2 w-full px-3 inline-flex justify-center items-center rounded-[6px] hover:bg-brand/70 font-semibold"
              >
                Deposit
              </button>
            </CustomCard>
            <CustomCard title="Online Bank Transfer" img="/icons/bankTransfer.svg">
              <p className="text-gray-600 dark:text-textWhite2/70 text-sm">
                Limit:{" "}
                <span className="font-medium text-gray-800 dark:text-slate-200/80">
                  5 - 10,000 USDT
                </span>
              </p>
              <p className="text-gray-600 dark:text-textWhite2/70 mt-2 text-sm opacity-0">
                Balance:{" "}
                <span className="font-semibold">{balance.toFixed(2)} USDT</span>
              </p>
              <button
                  onClick={()=> {
                  toast.error("Service unavailable right now, kindly try Withdraw to wallet")
                }}
                className="text-white mt-4 bg-brand py-2 w-full px-3 inline-flex justify-center items-center rounded-[6px] hover:bg-brand/70 font-semibold"
              >
                Deposit
              </button>
            </CustomCard>
            <CustomCard title="Withdraw as bitcoin" img="/icons/bitconIcon.svg">
              <p className="text-gray-600 dark:text-textWhite2/70 text-sm">
                Limit:{" "}
                <span className="font-medium text-gray-800 dark:text-slate-200/80">
                  10 - 20,000 USDT
                </span>
              </p>
              <p className="text-gray-600 dark:text-textWhite2/70 mt-2 text-sm opacity-0">
                Balance:{" "}
                <span className="font-semibold">{balance.toFixed(2)} USDT</span>
              </p>
              <button
                onClick={()=> {
                  toast.error("Service unavailable right now, kindly try Withdraw to wallet")
                }}
                className="text-white mt-4 bg-brand py-2 w-full px-3 inline-flex justify-center items-center rounded-[6px] hover:bg-brand/70 font-semibold"
              >
                Deposit
              </button>
            </CustomCard>
          </div>

          <div className="bg-white dark:bg-bgDark1 border border-gray-100 dark:border-white/20 rounded-lg shadow-sm overflow-hidden mt-12">
            <div className="p-4 border-b border-gray-100 dark:bg-bgDark1">
              <h2 className="text-lg font-semibold text-textWhite1">Recent Withdrawals</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="text-xs text-gray-500  uppercase bg-gray-50 dark:bg-bgDark1">
                    <th className="px-4 py-3">ID</th>
                    <th className="px-4 py-3">Amount</th>
                    <th className="px-4 py-3">Coin</th>
                    <th className="px-4 py-3">Address</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Created</th>
                  </tr>
                </thead>
                <tbody>
                  {withdrawals.length === 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-4 py-6 text-center text-gray-500 dark:text-textWhite2/80"
                      >
                        No withdrawals yet
                      </td>
                    </tr>
                  )}

                  {withdrawals.map((tx) => (
                    <motion.tr
                      key={tx.id}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.18 }}
                      className="border-t hover:bg-gray-50 dark:bg-bgDark1/50"
                    >
                      <td className="px-4 py-3 text-sm font-mono dark:text-textWhite2/80">{tx.id}</td>
                      <td className="px-4 py-3 text-sm font-medium dark:text-textWhite2/80">
                        {tx.amount} {tx.coin}
                      </td>
                      <td className="px-4 py-3 text-sm dark:text-textWhite2/80">{tx.coin}</td>
                      <td className="px-4 py-3 text-sm break-all max-w-[240px] font-mono dark:text-textWhite2/80">
                        {tx.address}
                      </td>
                      <td className="px-4 py-3">
                        {tx.status === "pending" && (
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 text-sm">
                            Pending
                          </span>
                        )}
                        {tx.status === "processing" && (
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm">
                            <span className="w-3 h-3 border-2 border-blue-700 border-t-transparent rounded-full animate-spin inline-block" />
                            Processing
                          </span>
                        )}
                        {tx.status === "completed" && (
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm">
                            ✓ Completed
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500 dark:text-textWhite2/80">
                        {formatTime(tx.createdAt)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg w-full max-w-lg p-6 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Withdraw Crypto</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
                  >
                    ×
                  </button>
                </div>

                <div className="flex gap-2 items-center mb-6">
                  <StepDot
                    label="1. Details"
                    active={modalStep === 1}
                    done={modalStep > 1}
                  />
                  <div className="flex-1 h-[1px] bg-gray-200" />
                  <StepDot
                    label="2. Preview"
                    active={modalStep === 2}
                    done={modalStep > 2}
                  />
                  <div className="flex-1 h-[1px] bg-gray-200" />
                  <StepDot
                    label="3. Queue"
                    active={modalStep === 3}
                    done={modalStep > 3}
                  />
                </div>

                {modalStep === 1 && (
                  <div className="flex flex-col gap-4">
                    <label className="text-sm">
                      <span className="font-medium">Amount (USDT)</span>
                      <input
                        type="number"
                        step="0.000001"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="block w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="e.g., 100.00"
                      />
                    </label>

                    <label className="text-sm">
                      <span className="font-medium">Coin</span>
                      <select
                        value={coin}
                        onChange={(e) => setCoin(e.target.value)}
                        className="block w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="USDT">USDT</option>
                        {/* <option value="USDT">USDC</option>
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option> */}
                      </select>
                    </label>

                    <label className="text-sm">
                      <span className="font-medium">Destination Address</span>
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="block w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Paste wallet address"
                      />
                    </label>

                    <div className="flex items-center justify-between gap-3 mt-2">
                      <button
                        onClick={closeModal}
                        className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleStep1Submit}
                        className="px-4 py-2 text-white rounded font-semibold bg-brand hover:bg-brand/60"
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                )}

                {modalStep === 2 && (
                  <div className="flex flex-col gap-4">
                    <h4 className="font-semibold">Preview Withdrawal</h4>
                    <div className="grid gap-3 text-sm bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-textWhite2/70">Amount</span>
                        <span className="font-medium">
                          {parseFloat(amount).toFixed(6)} {coin}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-textWhite2/70">Estimated Fee</span>
                        <span className="font-medium text-red-600">
                          -{computeFeeAndReceive(parseFloat(amount)).fee} {coin}
                        </span>
                      </div>
                      <div className="h-px bg-gray-200" />
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-textWhite2/70">
                          You&apos;ll receive
                        </span>
                        <span className="font-bold text-green-600">
                          {computeFeeAndReceive(parseFloat(amount)).receive}{" "}
                          {coin}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-textWhite2/70">Destination</span>
                        <span className="break-all max-w-[240px] font-mono text-xs">
                          {address}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 mt-4">
                      <button
                        onClick={() => setModalStep(1)}
                        className="px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
                      >
                        Back
                      </button>
                      <button
                        onClick={submitWithdrawal}
                        className="px-4 py-2 bg-brand text-white rounded font-semibold hover:bg-brand/60"
                      >
                        Confirm & Queue
                      </button>
                    </div>
                  </div>
                )}

                {modalStep === 3 && (
                  <div className="flex flex-col gap-4">
                    <div className="text-center py-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-3xl text-green-600">✓</span>
                      </div>
                      <h4 className="font-semibold text-lg mb-2">
                        Withdrawal Queued!
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-textWhite2/70">
                        Your withdrawal has been added to the queue and will be
                        processed shortly.
                      </p>
                    </div>

                    <div className="border-t pt-4">
                      <h5 className="text-sm font-medium mb-3">
                        Queued Withdrawals
                      </h5>
                      <div className="space-y-2 max-h-48 overflow-auto">
                        {withdrawals.length === 0 && (
                          <div className="text-sm text-gray-500 text-center py-4">
                            No queued withdrawals
                          </div>
                        )}
                        {withdrawals.map((tx) => (
                          <div
                            key={tx.id}
                            className="p-3 border rounded-lg flex items-start justify-between gap-3 bg-gray-50"
                          >
                            <div className="flex-1">
                              <div className="text-sm font-medium">
                                {tx.amount} {tx.coin}
                              </div>
                              <div className="text-xs text-gray-500 font-mono">
                                {tx.id}
                              </div>
                            </div>

                            <div className="flex flex-col items-end">
                              {tx.status === "pending" && (
                                <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs">
                                  Pending
                                </span>
                              )}
                              {tx.status === "processing" && (
                                <span className="flex items-center gap-2 px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs">
                                  <span className="w-3 h-3 border-2 border-blue-700 border-t-transparent rounded-full animate-spin inline-block" />
                                  Processing
                                </span>
                              )}
                              {tx.status === "completed" && (
                                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                                  ✓ Completed
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-4">
                      <button
                        onClick={closeModal}
                        className="px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
};

export default Withdraw;

function StepDot({ label, active, done }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
          done
            ? "bg-green-600 text-white"
            : active
            ? "bg-green-100 text-green-700 ring-2 ring-green-600"
            : "bg-gray-100 text-gray-500"
        }`}
      >
        {done ? "✓" : label.split(".")[0]}
      </div>
      <div className="text-xs text-gray-600 dark:text-textWhite2/70 hidden sm:block">
        {label.split(".")[1]}
      </div>
    </div>
  );
}
