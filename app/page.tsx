"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import StationNavigation from "@/components/navigation-interface";
import SplashScreen from "@/components/splashscreen";
import WelcomeScreen from "@/components/welcome-screen";
import LanguageSelection from "@/components/language-selection";
import { nodeFriendlyNames } from "@/components/navigation-interface";

const HomePage = () => {
  const [step, setStep] = useState<"splash" | "welcome" | "language" | "navigation">("splash");
  const [language, setLanguage] = useState("english");
  const [showAdmin, setShowAdmin] = useState(false);
  const [navigationData, setNavigationData] = useState<any>(null);

  const handleAdminSubmit = (enabledNodes: string[]) => {
    setNavigationData(enabledNodes);
    setShowAdmin(false);
  };

  if (step === "splash") {
    return <SplashScreen onProceed={() => setStep("welcome")} />;
  }

  if (step === "welcome") {
    return <WelcomeScreen onPravasiPathClick={() => setStep("language")} />;
  }

  if (step === "language") {
    return (
      <LanguageSelection
        selectedLanguage={language}
        onLanguageChange={(lang) => {
          setLanguage(lang);
          setStep("navigation");
        }}
        onBack={() => setStep("welcome")}
      />
    );
  }

  return (
    <div>
         <StationNavigation initialData={navigationData} selectedLanguage={language} />
    </div>
  );
};

export default HomePage;
