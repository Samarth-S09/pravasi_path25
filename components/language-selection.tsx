import { Button } from "@/components/ui/button";
import { RiArrowLeftLine } from "react-icons/ri";

interface LanguageSelectionProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  onBack: () => void;
}

export default function LanguageSelection({ selectedLanguage, onLanguageChange, onBack }: LanguageSelectionProps) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#FF6B00]">
      {/* Back Button */}
      <button
        className="absolute top-4 left-4 text-white text-3xl hover:text-gray-200 transition"
        onClick={onBack}
        title="Back"
      >
        <RiArrowLeftLine />
      </button>

      <h1 className="text-4xl font-bold mb-8 text-white">Select Your Language</h1>

      <div className="space-y-6 w-64">
        <Button className="w-full h-16 text-xl" onClick={() => onLanguageChange("english")}>
          English
        </Button>
        <Button className="w-full h-16 text-xl" onClick={() => onLanguageChange("hindi")}>
          हिंदी (Hindi)
        </Button>
        <Button className="w-full h-16 text-xl" onClick={() => onLanguageChange("marathi")}>
          मराठी (Marathi)
        </Button>
        <Button className="w-full h-16 text-xl" onClick={() => onLanguageChange("gujarati")}>
          ગુજરાતી (Gujarati)
        </Button>
      </div>
    </div>
  );
}
