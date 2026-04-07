import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import type { Identifier } from 'dnd-core';
import { Exercise, ExerciseGroup } from '../data/exercises';

interface ExerciseCardProps {
  index: number;
  exercise: Exercise;
  group: ExerciseGroup;
  isDone: boolean;
  onMarkDone: (buttonElement: HTMLElement) => void;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  type: string;
}

const ITEM_TYPE = 'EXERCISE_CARD';

export function ExerciseCard({ 
  index, 
  exercise, 
  group, 
  isDone, 
  onMarkDone,
  moveCard
}: ExerciseCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
    accept: ITEM_TYPE,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ITEM_TYPE,
    item: () => {
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const equipLabel: Record<string, string> = { 
    free: '💪 自由重量', 
    semi: '🔗 半固定', 
    machine: '🔧 機械式' 
  };
  
  const equipColor: Record<string, string> = {
    free: 'bg-[#f5ece0] text-[#8F6A3A]',
    semi: 'bg-[#e8edf5] text-[#4A6A8F]',
    machine: 'bg-[#e8f0e8] text-[#5A7A5A]'
  };

  const imgSrc = exercise.image || `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="110" height="110" viewBox="0 0 110 110">
      <rect width="110" height="110" fill="#E8DFD0"/>
      <text x="55" y="48" text-anchor="middle" font-size="28" fill="#C4A882">🏋️</text>
      <text x="55" y="72" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#9B8878">示意圖</text>
    </svg>
  `)}`;

  return (
    <div
      ref={ref}
      data-handler-id={handlerId}
      className={`bg-white/45 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(227,117,45,0.10)] flex flex-col cursor-grab active:cursor-grabbing transition-all duration-200 select-none ${
        isDragging ? 'opacity-55 scale-97 shadow-[0_8px_28px_rgba(44,36,32,0.18)]' : ''
      } ${isDone ? 'opacity-60' : ''}`}
      style={{
        opacity: isDragging ? 0.55 : isDone ? 0.6 : 1,
        transform: isDragging ? 'scale(0.97)' : 'none',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      <div className="flex items-center gap-2.5 px-4 pt-3 pb-2">
        <div className="font-['Bebas_Neue',sans-serif] text-[32px] text-[#E3752D] leading-none min-w-[28px]">
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className={`text-[10px] font-extrabold tracking-wider px-3 py-1 rounded-[10px] bg-[#FFF0CA] border-[1.5px] border-current part-chip-${group.chipClass}`}>
          {group.label}
        </div>
        <div className="ml-auto px-1.5 py-1 text-[#E3752D] cursor-grab text-lg leading-none flex-shrink-0 active:cursor-grabbing">
          ⠿
        </div>
      </div>

      <div className="flex gap-0">
        <div className="w-[110px] min-h-[110px] flex-shrink-0 bg-[#FFF0CA] flex flex-col items-center justify-center gap-1.5 text-[10px] text-[#6B4E1E] tracking-wide relative overflow-hidden">
          <img 
            src={imgSrc} 
            alt={exercise.name}
            className="w-full h-full object-cover absolute inset-0"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div className="flex-1 px-3.5 pb-3.5 flex flex-col justify-center gap-1.5">
          <div className={`text-base font-bold text-[#1E1208] leading-[1.3] ${isDone ? 'line-through text-[#6B4E1E]' : ''}`}>
            {exercise.name}
          </div>
          <div className="mb-0.5">
            <span className={`text-[10px] rounded-lg px-2 py-0.5 font-semibold tracking-wide ${equipColor[exercise.equip]}`}>
              {equipLabel[exercise.equip]}
            </span>
          </div>
          <div className="text-[13px] text-[#6B4E1E]">
            <strong className="text-[#E3752D] font-bold">{exercise.sets}</strong>
          </div>
          {exercise.video && exercise.video !== '#' ? (
            <a 
              href={exercise.video} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-0.5 text-[11px] font-medium text-[#E3752D] border-[1.5px] border-[#E3752D] rounded-full px-3 py-1 w-fit transition-all duration-200 hover:bg-[#E3752D] hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
                <path d="M8 5v14l11-7z"/>
              </svg>
              觀看示範
            </a>
          ) : (
            <span className="text-[11px] text-[#C4A882] mt-0.5">（示範連結待填入）</span>
          )}
        </div>
      </div>

      <div className="h-[2px] bg-[#E3752D] mx-3.5 opacity-25"></div>

      <div className="px-3.5 py-2 pb-3 flex items-center gap-2.5">
        <button
          onClick={(e) => onMarkDone(e.currentTarget)}
          className={`flex items-center gap-2 bg-[#FFF0CA] border-2 border-[#E3752D] rounded-3xl px-4 py-2.5 font-bold text-[13px] text-[#E3752D] cursor-pointer transition-all duration-200 flex-1 justify-center active:scale-95 ${
            isDone ? 'bg-[#E3752D] border-[#E3752D] text-white' : ''
          }`}
        >
          <div className={`w-5 h-5 rounded-full border-2 border-[#E3752D] flex items-center justify-center text-xs transition-all duration-200 flex-shrink-0 ${
            isDone ? 'bg-white border-white' : ''
          }`}>
            ✓
          </div>
          <span>{isDone ? '已完成 🎉' : '做完按一下！'}</span>
        </button>
      </div>
    </div>
  );
}