import { useState, useCallback, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DB, PLANS, Exercise, ExerciseGroup } from './data/exercises';
import { ExerciseCard } from './components/ExerciseCard';
import { ConfettiCanvas, ConfettiCanvasHandle } from './components/ConfettiCanvas';
import { OnboardingToast } from './components/OnboardingToast';
import { SettingsPanel } from './components/SettingsPanel';
import { Shuffle } from 'lucide-react';

interface WorkoutItem {
  exercise: Exercise;
  group: ExerciseGroup;
  isDone: boolean;
}

export default function App() {
  const [currentPlan, setCurrentPlan] = useState<'A' | 'B'>('A');
  const [useSingle, setUseSingle] = useState(false);
  const [equipOn, setEquipOn] = useState({ free: true, semi: false, machine: false });
  const [workout, setWorkout] = useState<WorkoutItem[]>([]);
  const [isSettingsExpanded, setIsSettingsExpanded] = useState(true);
  const [hasGenerated, setHasGenerated] = useState(false);
  const confettiRef = useRef<ConfettiCanvasHandle>(null);

  const getWeekday = () => {
    const days = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
    const d = new Date();
    return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${days[d.getDay()]}`;
  };

  const pickFiltered = useCallback((exercises: Exercise[]) => {
    const pool = exercises.filter(e => equipOn[e.equip]);
    const source = pool.length > 0 ? pool : exercises;
    return source[Math.floor(Math.random() * source.length)];
  }, [equipOn]);

  const pickLastSlot = useCallback(() => {
    let combined = [...DB.core.exercises];
    if (useSingle) {
      combined = combined.concat(DB.upper_single.exercises, DB.lower_single.exercises);
    }
    const pool = combined.filter(e => equipOn[e.equip]);
    const source = pool.length > 0 ? pool : combined;
    const ex = source[Math.floor(Math.random() * source.length)];

    let group = DB.core;
    if (DB.upper_single.exercises.includes(ex)) group = DB.upper_single;
    if (DB.lower_single.exercises.includes(ex)) group = DB.lower_single;
    
    return { ex, group };
  }, [useSingle, equipOn]);

  const generate = useCallback(() => {
    const usePlanKey = currentPlan;

    const plan = PLANS[usePlanKey];
    const slots = [
      { group: DB.legs_front },
      { group: DB[plan.pushKey] },
      { group: DB.legs_back },
      { group: DB[plan.pullKey] },
    ];

    const newWorkout: WorkoutItem[] = slots.map(slot => ({
      exercise: pickFiltered(slot.group.exercises),
      group: slot.group,
      isDone: false
    }));

    const { ex: ex5, group: group5 } = pickLastSlot();
    newWorkout.push({
      exercise: ex5,
      group: group5,
      isDone: false
    });

    setWorkout(newWorkout);
    setHasGenerated(true);
  }, [currentPlan, pickFiltered, pickLastSlot]);

  const toggleEquip = (type: 'free' | 'semi' | 'machine', checked: boolean) => {
    const newEquipOn = { ...equipOn, [type]: checked };
    const wouldAllOff = !checked && 
      Object.keys(newEquipOn).filter(k => k !== type).every(k => !newEquipOn[k as keyof typeof newEquipOn]);
    
    if (wouldAllOff) return;
    
    setEquipOn(newEquipOn);
    setTimeout(() => generate(), 0);
  };

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setWorkout(prev => {
      const newWorkout = [...prev];
      const [draggedItem] = newWorkout.splice(dragIndex, 1);
      newWorkout.splice(hoverIndex, 0, draggedItem);
      return newWorkout;
    });
  }, []);

  const markDone = (index: number, buttonEl: HTMLElement) => {
    setWorkout(prev => {
      const newWorkout = [...prev];
      const isNowDone = !newWorkout[index].isDone;
      newWorkout[index] = { ...newWorkout[index], isDone: isNowDone };

      if (isNowDone) {
        if (navigator.vibrate) navigator.vibrate([40, 20, 80]);
        confettiRef.current?.launchConfetti(buttonEl);

        setTimeout(() => {
          const allDone = newWorkout.every(item => item.isDone);
          if (allDone) {
            setTimeout(() => {
              confettiRef.current?.launchConfetti(null, true);
            }, 300);
          }
        }, 200);
      }

      return newWorkout;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-[#FFF0CA] text-[#1E1208] font-['Noto_Sans_TC',sans-serif] pb-[60px]">
        <ConfettiCanvas ref={confettiRef} />

        {/* Header */}
        <div className="bg-[#FFF0CA] px-5 pt-8 pb-5 text-center relative overflow-hidden">
          <img
            className="w-[85%] max-w-[320px] h-auto block mx-auto mb-2"
            src="https://raw.githubusercontent.com/iisanosbb/workout-images/main/header-logo.png"
            alt="重訓小本奔每日健身菜單"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="inline-block mt-2 bg-[rgba(227,117,45,0.12)] border border-[rgba(227,117,45,0.35)] rounded-full px-4 py-1 text-xs text-[#E3752D] tracking-wider relative">
            {getWeekday()}
          </div>
        </div>

        {/* Onboarding Toast */}
        <OnboardingToast />

        {/* Settings Panel - Collapsible */}
        <SettingsPanel
          currentPlan={currentPlan}
          useSingle={useSingle}
          equipOn={equipOn}
          onPlanChange={(plan) => {
            setCurrentPlan(plan);
            setTimeout(() => generate(), 0);
          }}
          onSingleToggle={() => {
            setUseSingle(!useSingle);
            setTimeout(() => generate(), 0);
          }}
          onEquipToggle={toggleEquip}
          isExpanded={isSettingsExpanded}
          onToggleExpanded={() => setIsSettingsExpanded(!isSettingsExpanded)}
        />

        {/* Regenerate button */}
        <div className="px-3.5 pb-3 flex justify-center">
          <button
            onClick={() => {
              generate();
              setIsSettingsExpanded(false);
            }}
            className="bg-[#1E1208] text-[#FFF0CA] border-none rounded-[50px] px-9 py-3.5 font-['Noto_Sans_TC',sans-serif] text-sm font-bold tracking-[0.08em] cursor-pointer flex items-center gap-2 transition-all duration-200 shadow-[0_4px_16px_rgba(44,36,32,0.18)] active:scale-97 hover:bg-[#E3752D]"
          >
            <span className="text-lg inline-block transition-transform duration-[400ms] hover:rotate-180">🔀</span>
            抽取健身菜單
          </button>
        </div>

        {hasGenerated && (
          <>
            {/* Tag strip */}
            <div className="flex gap-2 overflow-x-auto px-4 py-3 bg-white/30 scrollbar-none animate-fadeIn">
              <div className="flex items-center gap-1.5 flex-shrink-0 text-[11px] font-normal tracking-[0.02em] px-2.5 py-1 bg-[#E3752D]/10 text-[#E3752D] rounded-md">
                <span className="opacity-60">#</span>
                <span>{PLANS[currentPlan].name}</span>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0 text-[11px] font-normal tracking-[0.02em] px-2.5 py-1 bg-[#C49A3C]/8 text-[#6B4E1E] rounded-md">
                <span className="opacity-60">#</span>
                <span>5 個動作</span>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0 text-[11px] font-normal tracking-[0.02em] px-2.5 py-1 bg-[#C49A3C]/8 text-[#6B4E1E] rounded-md">
                <span className="opacity-60">#</span>
                <span>每次不同</span>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0 text-[11px] font-normal tracking-[0.02em] px-2.5 py-1 bg-[#C49A3C]/8 text-[#6B4E1E] rounded-md">
                <span className="opacity-60">#</span>
                <span>點影片示範</span>
              </div>
            </div>

            {/* Exercise cards */}
            <div className="px-3.5 pt-4 flex flex-col gap-3.5">
              {workout.map((item, index) => (
                <div
                  key={index}
                  className="animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <ExerciseCard
                    index={index}
                    exercise={item.exercise}
                    group={item.group}
                    isDone={item.isDone}
                    onMarkDone={(btn) => markDone(index, btn)}
                    moveCard={moveCard}
                  />
                </div>
              ))}
            </div>

            {/* Sort hint */}
            <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#C49A3C] px-3.5 py-1.5 pt-2 tracking-[0.04em] animate-fadeIn" style={{ animationDelay: '500ms' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[13px] h-[13px] opacity-60">
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"></path>
              </svg>
              長按卡片可拖曳調整順序
            </div>
          </>
        )}

        <style>{`
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-none {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .part-chip-legs-front {
            color: #E8433A;
            border-color: #E8433A;
          }
          .part-chip-legs-back {
            color: #E3752D;
            border-color: #E3752D;
          }
          .part-chip-push {
            color: #2E86DE;
            border-color: #2E86DE;
          }
          .part-chip-pull {
            color: #8E44AD;
            border-color: #8E44AD;
          }
          .part-chip-core {
            color: #27AE60;
            border-color: #27AE60;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-out forwards;
            opacity: 0;
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out forwards;
            opacity: 0;
          }
          
          @keyframes slideUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </DndProvider>
  );
}