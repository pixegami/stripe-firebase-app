"use client";

import { useRouter } from "next/navigation";
import { PremiumPanel } from "./premiumPanel";
import { StandardPanel } from "./standardPanel";
import { useEffect, useState } from "react";

export default function AccountPage() {
  const userName = "Jack";
  const email = "jack@pixegami.com";
  const router = useRouter();
  const [isPremium, setIsPremium] = useState(false);

  const upgradeToPremium = async () => {
    console.log("Upgrade to Premium");
  };

  const manageSubscription = async () => {
    console.log("Manage Subscription");
  };

  const signOut = () => {
    router.push("/");
  };

  const upgradeToPremiumButton = (
    <button
      onClick={upgradeToPremium}
      className="bg-blue-600 p-4 px-6 text-lg rounded-lg hover:bg-blue-700 shadow-lg"
    >
      <div className="flex gap-2 items-center align-middle justify-center">
        Upgrade To Premium
      </div>
    </button>
  );

  const managePortalButton = (
    <button
      onClick={manageSubscription}
      className="bg-blue-600 p-4 px-6 text-lg rounded-lg hover:bg-blue-700 shadow-lg"
    >
      <div className="flex gap-2 items-center align-middle justify-center">
        Manage Subscription
      </div>
    </button>
  );

  const signOutButton = (
    <button
      onClick={signOut}
      className="hover:underline text-slate-500 hover:text-slate-300 text-lg text-center"
    >
      <div className="flex gap-2 items-center align-middle justify-center">
        Sign Out
      </div>
    </button>
  );

  const accountSummary = (
    <div>
      <div className="text-slate-500 mb-1">Signed in as {userName}</div>
      <div className="text-slate-300 text-xl">{email}</div>
    </div>
  );

  const statusPanel = isPremium ? <PremiumPanel /> : <StandardPanel />;
  const memberButton = isPremium ? managePortalButton : upgradeToPremiumButton;

  return (
    <div className="flex flex-col gap-8">
      {accountSummary}
      {statusPanel}
      {memberButton}
      {signOutButton}
    </div>
  );
}
