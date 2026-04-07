import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function OnboardingToast() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenOnboarding = localStorage.getItem(
      "workout-onboarding-seen",
    );
    if (!hasSeenOnboarding) {
      setTimeout(() => setShow(true), 500);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem("workout-onboarding-seen", "true");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 animate-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-start gap-3 mb-4">
          <div className="text-3xl">👋</div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#1E1208] mb-1">
              歡迎使用重訓小本奔！
            </h3>
            <p className="text-sm text-[#6B4E1E] leading-relaxed">
              系統已為您生成今日訓練課表
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-[#6B4E1E] hover:text-[#E3752D] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 mb-5">
          <div className="flex gap-3 items-start">
            <div className="w-6 h-6 rounded-full bg-[#E3752D] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
              1
            </div>
            <div className="flex-1">
              <p className="text-sm text-[#1E1208]">
                點擊
                <strong className="text-[#E3752D]">
                  「自訂設定」
                </strong>
                調整課表偏好
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-6 h-6 rounded-full bg-[#E3752D] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
              2
            </div>
            <div className="flex-1">
              <p className="text-sm text-[#1E1208]">
                完成動作後按
                <strong className="text-[#E3752D]">
                  「做完按一下」
                </strong>
                打勾
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-6 h-6 rounded-full bg-[#E3752D] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
              3
            </div>
            <div className="flex-1">
              <p className="text-sm text-[#1E1208]">
                按
                <strong className="text-[#E3752D]">
                  「重新抽取」
                </strong>
                換一組動作
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleClose}
          className="w-full bg-[#E3752D] text-white rounded-full py-3 font-bold text-sm hover:bg-[#c96527] transition-colors active:scale-98"
        >
          開始訓練 💪
        </button>
      </div>
    </div>
  );
}