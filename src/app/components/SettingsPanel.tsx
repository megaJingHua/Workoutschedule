import { ChevronDown, ChevronUp, Settings } from "lucide-react";

interface SettingsPanelProps {
  currentPlan: "A" | "B";
  useSingle: boolean;
  equipOn: { free: boolean; semi: boolean; machine: boolean };
  onPlanChange: (plan: "A" | "B") => void;
  onSingleToggle: () => void;
  onEquipToggle: (
    type: "free" | "semi" | "machine",
    checked: boolean,
  ) => void;
  isExpanded: boolean;
  onToggleExpanded: () => void;
}

export function SettingsPanel({
  currentPlan,
  useSingle,
  equipOn,
  onPlanChange,
  onSingleToggle,
  onEquipToggle,
  isExpanded,
  onToggleExpanded,
}: SettingsPanelProps) {
  return (
    <div className="bg-white/60 border-2 border-[#F5D98A] rounded-2xl mx-3.5 my-4 overflow-hidden shadow-sm transition-all duration-500 ease-in-out">
      {/* Header - Always visible */}
      <button
        onClick={onToggleExpanded}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-[#FFF0CA]/30 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Settings className="w-4 h-4 text-[#E3752D]" />
          <span className="font-bold text-sm text-[#1E1208]">
            健身菜單設定
          </span>
          {!isExpanded && (
            <span className="text-xs text-[#6B4E1E] ml-1">
              ({currentPlan === "A" ? "1號課表" : "2號課表"}、
              {
                Object.entries(equipOn).filter(([_, v]) => v)
                  .length
              }{" "}
              種器材)
            </span>
          )}
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-[#6B4E1E]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#6B4E1E]" />
        )}
      </button>

      {/* Collapsible content */}
      {isExpanded && (
        <div className="px-4 pb-4 space-y-4 border-t border-[#F5D98A]/50 pt-4 animate-in slide-in-from-top-2 duration-300">
          {/* Plan switcher */}
          <div>
            <div className="text-[11px] text-[#6B4E1E] font-semibold tracking-[0.1em] uppercase mb-2">
              📋 課表類型
            </div>
            <div className="flex gap-2.5">
              <button
                onClick={() => onPlanChange("A")}
                className={`flex-1 border-2 rounded-xl px-2 py-2.5 cursor-pointer text-center transition-all duration-200 ${
                  currentPlan === "A"
                    ? "border-[#E3752D] bg-[#E3752D]"
                    : "border-[#F5D98A] bg-[#FFF0CA] hover:border-[#E3752D]"
                }`}
              >
                <span
                  className={`block text-[11px] font-bold tracking-[0.12em] ${
                    currentPlan === "A"
                      ? "text-white"
                      : "text-[#6B4E1E]"
                  }`}
                >
                  1號課表
                </span>
                <span
                  className={`block text-[10px] mt-1 leading-[1.5] ${
                    currentPlan === "A"
                      ? "text-white/75"
                      : "text-[#C49A3C]"
                  }`}
                >
                  腿前 → 水平推
                  <br />
                  腿後 → 水平拉 → 核心
                </span>
              </button>
              <button
                onClick={() => onPlanChange("B")}
                className={`flex-1 border-2 rounded-xl px-2 py-2.5 cursor-pointer text-center transition-all duration-200 ${
                  currentPlan === "B"
                    ? "border-[#E3752D] bg-[#E3752D]"
                    : "border-[#F5D98A] bg-[#FFF0CA] hover:border-[#E3752D]"
                }`}
              >
                <span
                  className={`block text-[11px] font-bold tracking-[0.12em] ${
                    currentPlan === "B"
                      ? "text-white"
                      : "text-[#6B4E1E]"
                  }`}
                >
                  2號課表
                </span>
                <span
                  className={`block text-[10px] mt-1 leading-[1.5] ${
                    currentPlan === "B"
                      ? "text-white/75"
                      : "text-[#C49A3C]"
                  }`}
                >
                  腿前 → 垂直推
                  <br />
                  腿後 → 垂直拉 → 核心
                </span>
              </button>
            </div>
          </div>

          {/* Equipment filter */}
          <div>
            <div className="text-[11px] text-[#6B4E1E] font-semibold tracking-[0.1em] uppercase mb-2">
              🏋️ 可使用器材
            </div>
            <div className="flex gap-2 flex-wrap">
              <label
                className={`inline-flex items-center gap-1 text-xs font-semibold px-3.5 py-2 rounded-full border-2 cursor-pointer transition-all duration-[180ms] select-none tracking-[0.02em] ${
                  equipOn.free
                    ? "bg-[#E3752D] text-white border-[#E3752D]"
                    : "border-[#F5D98A] text-[#6B4E1E] bg-[#FFF0CA] hover:border-[#E3752D] hover:text-[#E3752D]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={equipOn.free}
                  onChange={(e) =>
                    onEquipToggle("free", e.target.checked)
                  }
                  className="hidden"
                />
                💪 自由重量
              </label>
              <label
                className={`inline-flex items-center gap-1 text-xs font-semibold px-3.5 py-2 rounded-full border-2 cursor-pointer transition-all duration-[180ms] select-none tracking-[0.02em] ${
                  equipOn.semi
                    ? "bg-[#E3752D] text-white border-[#E3752D]"
                    : "border-[#F5D98A] text-[#6B4E1E] bg-[#FFF0CA] hover:border-[#E3752D] hover:text-[#E3752D]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={equipOn.semi}
                  onChange={(e) =>
                    onEquipToggle("semi", e.target.checked)
                  }
                  className="hidden"
                />
                🔗 Cable／Smith
              </label>
              <label
                className={`inline-flex items-center gap-1 text-xs font-semibold px-3.5 py-2 rounded-full border-2 cursor-pointer transition-all duration-[180ms] select-none tracking-[0.02em] ${
                  equipOn.machine
                    ? "bg-[#E3752D] text-white border-[#E3752D]"
                    : "border-[#F5D98A] text-[#6B4E1E] bg-[#FFF0CA] hover:border-[#E3752D] hover:text-[#E3752D]"
                }`}
              >
                <input
                  type="checkbox"
                  checked={equipOn.machine}
                  onChange={(e) =>
                    onEquipToggle("machine", e.target.checked)
                  }
                  className="hidden"
                />
                🔧 機械式
              </label>
            </div>
          </div>

          {/* Advanced options */}
          <div>
            <div className="text-[11px] text-[#6B4E1E] font-semibold tracking-[0.1em] uppercase mb-2">
              🎯 進階選項
            </div>
            <div className="space-y-2">
              <div
                onClick={onSingleToggle}
                className="flex items-center justify-between p-3 bg-[#FFF0CA]/50 rounded-lg cursor-pointer hover:bg-[#FFF0CA] transition-colors"
              >
                <span className="text-sm text-[#1E1208]">
                  加入單關節動作
                </span>
                <div
                  className={`w-11 h-6 rounded-full relative transition-all duration-200 flex-shrink-0 ${
                    useSingle ? "bg-[#E3752D]" : "bg-[#F5D98A]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white absolute top-[2px] transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.2)] ${
                      useSingle ? "left-[22px]" : "left-[2px]"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}