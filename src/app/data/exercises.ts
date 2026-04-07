export interface Exercise {
  name: string;
  sets: string;
  video: string;
  note: string;
  image: string;
  equip: 'free' | 'semi' | 'machine';
}

export interface ExerciseGroup {
  label: string;
  chipClass: string;
  exercises: Exercise[];
}

export const DB: Record<string, ExerciseGroup> = {
  // ── 下肢腿前側 ──
  legs_front: {
    label: '下肢腿前側',
    chipClass: 'legs-front',
    exercises: [
      { name: '深蹲 Squat', sets: '3 組 × 10 下', video: '#', note: '膝蓋對齊腳尖，核心收緊', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_front_squat_barbell.jpg', equip: 'free' },
      { name: '高腳杯深蹲 Goblet（啞鈴）', sets: '3 組 × 10 下', video: '#', note: '壺鈴／啞鈴貼近胸口', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_front_squat_dumbbell.jpg', equip: 'free' },
      { name: '跳躍深蹲 Jump Squat', sets: '3 組 × 10 下', video: '#', note: '落地時膝蓋微彎吸震', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_front_squat_jump.jpg', equip: 'free' },
      { name: '保加利亞分腿蹲', sets: '3 組 × 10 下（每腳）', video: '#', note: '前腳掌中心踩地', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_front_split_squat_bulgarian.jpg', equip: 'free' },
      { name: '弓箭步 Lunge', sets: '3 組 × 10 下（每腳）', video: '#', note: '後膝輕觸地後起身', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_front_lunge.jpg', equip: 'free' },
      { name: '登階 Step-up', sets: '3 組 × 10 下（每腳）', video: '#', note: '踩穩後腳跟發力踩上', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_front_lunge_step.jpg', equip: 'free' },
      { name: '斜坡深蹲', sets: '3 組 × 10 下', video: '#', note: '腳跟墊高增加膝主導', image: '', equip: 'free' },
      { name: '前蹲舉 Front Squat', sets: '3 組 × 10 下', video: '#', note: '手肘高舉保持槓位', image: '', equip: 'free' },
      { name: '史密斯機深蹲', sets: '3 組 × 10 下', video: '#', note: '軌道固定，專注下蹲深度', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_front_squat_smith.jpg', equip: 'semi' },
      { name: '腿推機 Leg Press', sets: '3 組 × 10 下', video: '#', note: '腳跟踩穩，不鎖膝', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_front_leg_press.jpg', equip: 'machine' },
      { name: '腿伸展機 Leg Extension', sets: '3 組 × 10 下', video: '#', note: '頂點停留 1 秒', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_front_leg_extension.jpg', equip: 'machine' },
    ]
  },

  // ── 下肢腿後側 ──
  legs_back: {
    label: '下肢腿後側',
    chipClass: 'legs-back',
    exercises: [
      { name: '傳統硬舉 Deadlift', sets: '3 組 × 10 下', video: '#', note: '全程中立脊椎', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_back_deadlift.jpg', equip: 'free' },
      { name: '相撲硬舉 Sumo DL', sets: '3 組 × 10 下', video: '#', note: '腳尖外轉 45°', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_back_deadlift_sumo.jpg', equip: 'free' },
      { name: '羅馬尼亞硬舉 RDL', sets: '3 組 × 10 下', video: '#', note: '感受腿後肌延展', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_back_rdl.jpg', equip: 'free' },
      { name: '單腳 RDL', sets: '3 組 × 10 下（每腳）', video: '#', note: '骨盆維持水平', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_back_rdl_single.jpg', equip: 'free' },
      { name: '臀橋 Hip Thrust', sets: '3 組 × 10 下', video: '#', note: '頂點夾臀 2 秒', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_back_hip_thrust.jpg', equip: 'free' },
      { name: '側弓步 Lateral Lunge', sets: '3 組 × 10 下（每腳）', video: '#', note: '側移重心，膝對腳尖', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_back_sidelunge.jpg', equip: 'free' },
      { name: '半程側弓步', sets: '3 組 × 10 下（每腳）', video: '#', note: '側移幅度減半，強調內收', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_back_sidelunge_half.jpg', equip: 'free' },
      { name: '早安式 Good Morning', sets: '3 組 × 10 下', video: '#', note: '控制重量，專注伸展', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_back_good_morning.jpg', equip: 'free' },
      { name: '坐姿早安 Seated Good Morning', sets: '3 組 × 10 下', video: '#', note: '消除下肢代償，專注脊椎屈伸', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_back_goodmorning_seated_barbell.jpg', equip: 'free' },
      { name: '壺鈴擺盪 KB Swing', sets: '3 組 × 10 下', video: '#', note: '髖主導，非深蹲', image: '', equip: 'free' },
      { name: '北歐腿彎舉 Nordic Curl', sets: '3 組 × 10 下', video: '#', note: '離心放慢至少 4 秒', image: '', equip: 'free' },
      { name: '俯臥腿彎舉', sets: '3 組 × 10 下', video: '#', note: '全程控制速度', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_back_leg_curl_lying.jpg', equip: 'machine' },
      { name: '坐姿腿彎舉', sets: '3 組 × 10 下', video: '#', note: '膝關節全程活動度', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/legs_back_leg_curl_seated.jpg', equip: 'machine' },
    ]
  },

  // ── 上肢水平推 ──
  push: {
    label: '上肢水平推',
    chipClass: 'push',
    exercises: [
      { name: '槓鈴臥推 Bench Press', sets: '3 組 × 10 下', video: '#', note: '肩胛夾緊、弓背穩定', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/push_h_bench_barbell.jpg', equip: 'free' },
      { name: '上斜臥推 Incline Press', sets: '3 組 × 10 下', video: '#', note: '角度 30–45°', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/push_h_bench_incline.jpg', equip: 'free' },
      { name: '下斜臥推 Decline Press', sets: '3 組 × 10 下', video: '#', note: '強調下胸', image: '', equip: 'free' },
      { name: '啞鈴臥推', sets: '3 組 × 10 下', video: '#', note: '底部稍作停頓', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/push_h_bench_dumbbell.jpg', equip: 'free' },
      { name: '伏地挺身 Push-up', sets: '3 組 × 10 下', video: '#', note: '核心全程收緊', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/push_h_pushup.jpg', equip: 'free' },
      { name: '跪姿伏地挺身', sets: '3 組 × 10 下', video: '#', note: '膝蓋著地，降低難度', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/push_h_pushup_half.jpg', equip: 'free' },
      { name: '窄距臥推 Close-grip', sets: '3 組 × 10 下', video: '#', note: '手肘夾緊側身', image: '', equip: 'free' },
      { name: '史密斯臥推', sets: '3 組 × 10 下', video: '#', note: '固定軌道助保護', image: '', equip: 'semi' },
      { name: '繩索夾胸 Cable Fly', sets: '3 組 × 10 下', video: '#', note: '頂點交叉停頓', image: '', equip: 'semi' },
      { name: '機械臥推', sets: '3 組 × 10 下', video: '#', note: '適合訓練後補量', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/push_h_machine_press.jpg', equip: 'machine' },
    ]
  },

  // ── 上肢水平拉 ──
  pull: {
    label: '上肢水平拉',
    chipClass: 'pull',
    exercises: [
      { name: '槓鈴划船 Barbell Row', sets: '3 組 × 10 下', video: '#', note: '肘往後拉，肩胛夾緊', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/pull_h_row_barbell.jpg', equip: 'free' },
      { name: '啞鈴單臂划船', sets: '3 組 × 10 下（每邊）', video: '#', note: '不借助旋轉', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/pull_h_row_dumbbell_single.jpg', equip: 'free' },
      { name: 'T-bar 划船', sets: '3 組 × 10 下', video: '#', note: '胸貼靠墊更孤立背部', image: '', equip: 'free' },
      { name: '胸支撐啞鈴划船', sets: '3 組 × 10 下', video: '#', note: '上斜凳減少借力', image: '', equip: 'free' },
      { name: '反手划船 Supine Row', sets: '3 組 × 10 下', video: '#', note: '可調節難度', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/pull_h_row_reverse.jpg', equip: 'free' },
      { name: '農夫走路 Farmer Walk', sets: '3 趟 × 20m', video: '#', note: '肩下壓，挺胸', image: '', equip: 'free' },
      { name: '坐姿划船 Seated Row', sets: '3 組 × 10 下', video: '#', note: '肘貼身後拉到底', image: '', equip: 'semi' },
      { name: '繩索划船 Cable Row', sets: '3 組 × 10 下', video: '#', note: '全程保持張力', image: '', equip: 'semi' },
      { name: '繩索單臂划船', sets: '3 組 × 10 下（每邊）', video: '#', note: '強調菱形肌', image: '', equip: 'semi' },
      { name: '機械划船', sets: '3 組 × 10 下', video: '#', note: '胸貼靠墊，孤立背部', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/pull_h_row_machine.jpg', equip: 'machine' },
    ]
  },

  // ── 上肢垂直推 ──
  push_vertical: {
    label: '上肢垂直推',
    chipClass: 'push',
    exercises: [
      { name: '槓鈴肩推 OHP', sets: '3 組 × 10 下', video: '#', note: '核心收緊，不過度挺腰', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/push_v_ohp_barbell.jpg', equip: 'free' },
      { name: '啞鈴肩推', sets: '3 組 × 10 下', video: '#', note: '手肘略前於身體', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/push_v_ohp_dumbbell.jpg', equip: 'free' },
      { name: '阿諾肩推 Arnold Press', sets: '3 組 × 10 下', video: '#', note: '旋轉動作全程控制', image: '', equip: 'free' },
      { name: '槓鈴頸後推', sets: '3 組 × 10 下', video: '#', note: '確認肩膀活動度再操作', image: '', equip: 'free' },
      { name: '單臂啞鈴肩推', sets: '3 組 × 10 下（每邊）', video: '#', note: '訓練核心穩定', image: '', equip: 'free' },
      { name: '繩索肩推 Cable Press', sets: '3 組 × 10 下', video: '#', note: '全程保持張力', image: '', equip: 'semi' },
      { name: '史密斯機肩推', sets: '3 組 × 10 下', video: '#', note: '增加穩定性輔助', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/push_v_ohp_smith.jpg', equip: 'semi' },
      { name: '坐姿機械肩推', sets: '3 組 × 10 下', video: '#', note: '適合初學者保護脊椎', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/push_v_ohp_machine.jpg', equip: 'machine' },
    ]
  },

  // ── 上肢垂直拉 ──
  pull_vertical: {
    label: '上肢垂直拉',
    chipClass: 'pull',
    exercises: [
      { name: '引體向上 Pull-up', sets: '3 組 × 10 下', video: '#', note: '全程活動度，完全伸展', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/pull_v_pullup.jpg', equip: 'free' },
      { name: '反手引體 Chin-up', sets: '3 組 × 10 下', video: '#', note: '強調二頭肌參與', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/pull_v_chinup.jpg', equip: 'free' },
      { name: '寬握引體向上', sets: '3 組 × 10 下', video: '#', note: '強調背闊肌寬度', image: '', equip: 'free' },
      { name: '懸吊划船 Ring Row', sets: '3 組 × 10 下', video: '#', note: '調整身體角度控制難度', image: '', equip: 'free' },
      { name: '滑輪下拉 Lat Pulldown', sets: '3 組 × 10 下', video: '#', note: '胸口挺起，拉至下巴', image: '', equip: 'semi' },
      { name: '窄握下拉', sets: '3 組 × 10 下', video: '#', note: '強調背闊肌下段', image: '', equip: 'semi' },
      { name: '反手滑輪下拉', sets: '3 組 × 10 下', video: '#', note: '增加二頭肌協同', image: '', equip: 'semi' },
      { name: '繩索垂直拉', sets: '3 組 × 10 下', video: '#', note: '全程保持張力', image: '', equip: 'semi' },
      { name: '機械下拉', sets: '3 組 × 10 下', video: '#', note: '適合補量訓練', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/pull_v_pulldown_machine.jpg', equip: 'machine' },
    ]
  },

  // ── 上肢單關節 ──
  upper_single: {
    label: '上肢單關節',
    chipClass: 'push',
    exercises: [
      { name: '三頭下壓 Tricep Pushdown', sets: '3 組 × 10 下', video: '#', note: '手肘固定不動，全程控制', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/upper_single_tricep_pushdown.jpg', equip: 'semi' },
      { name: '頭後三頭伸展', sets: '3 組 × 10 下', video: '#', note: '手肘夾緊，不外張', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/upper_single_tricep_overhead.jpg', equip: 'free' },
      { name: '啞鈴過頭下拉 Pullover', sets: '3 組 × 10 下', video: '#', note: '手臂微彎，感受背闊伸展', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/upper_single_pullover_bumbbell.jpg', equip: 'free' },
      { name: '繩索過頭下拉 Pullover', sets: '3 組 × 10 下', video: '#', note: '全程保持張力', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/upper_single_cable_pullover.jpg', equip: 'semi' },
      { name: '飛鳥 Dumbbell Fly', sets: '3 組 × 10 下', video: '#', note: '手臂微彎，展胸感優先', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/upper_single_fly_dumbbell.jpg', equip: 'free' },
      { name: '機械胸飛鳥', sets: '3 組 × 10 下', video: '#', note: '頂點夾胸停頓 1 秒', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/upper_single_fly_machine.jpg', equip: 'machine' },
      { name: '繩索飛鳥 Cable Fly', sets: '3 組 × 10 下', video: '#', note: '頂點交叉停頓', image: '', equip: 'semi' },
      { name: '窄距伏地挺身', sets: '3 組 × 10 下', video: '#', note: '三頭主導，手肘貼身', image: '', equip: 'free' },
      { name: '直臂下拉 Straight-arm', sets: '3 組 × 10 下', video: '#', note: '手臂伸直孤立背闊', image: '', equip: 'semi' },
      { name: '側平舉 Lateral Raise', sets: '3 組 × 10 下', video: '#', note: '手肘微彎，不聳肩', image: '', equip: 'free' },
      { name: '前平舉 Front Raise', sets: '3 組 × 10 下', video: '#', note: '強調三角肌前束', image: '', equip: 'free' },
      { name: '二頭彎舉 Bicep Curl', sets: '3 組 × 10 下', video: '#', note: '手肘固定，頂點停頓', image: '', equip: 'free' },
      { name: '錘式彎舉 Hammer Curl', sets: '3 組 × 10 下（每邊）', video: '#', note: '強調肱橈肌', image: '', equip: 'free' },
    ]
  },

  // ── 下肢單關節 ──
  lower_single: {
    label: '下肢單關節',
    chipClass: 'legs-front',
    exercises: [
      { name: '哥本哈根內收', sets: '3 組 × 10 下（每邊）', video: '#', note: '側躺，上腿踩凳，下腿上提', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/lower_single_copenhagen_adduction.jpg', equip: 'free' },
      { name: '彈力帶蛤蜊式', sets: '3 組 × 10 下（每邊）', video: '#', note: '骨盆穩定，只動髖關節', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/lower_single_clamshell.jpg', equip: 'free' },
      { name: '髖外展 Hip Abduction', sets: '3 組 × 10 下（每邊）', video: '#', note: '控制速度，感受臀中肌', image: '', equip: 'free' },
      { name: '羅馬椅背伸展', sets: '3 組 × 10 下', video: '#', note: '感受豎脊肌收縮', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/lower_single_roman_chair.jpg', equip: 'machine' },
      { name: '羅馬椅側彎', sets: '3 組 × 10 下（每邊）', video: '#', note: '側屈強調腰方肌', image: '', equip: 'machine' },
      { name: '機械式髖外展', sets: '3 組 × 10 下', video: '#', note: '穩定骨盆，臀中肌專注', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/lower_single_machine_hip_abduction.jpg', equip: 'machine' },
      { name: '機械式髖內收', sets: '3 組 × 10 下', video: '#', note: '內收肌群主導', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/lower_single_machine_hip_adduction.jpg', equip: 'machine' },
      { name: '滑輪髖外展', sets: '3 組 × 10 下（每邊）', video: '#', note: '站姿，腿往側邊抬起', image: '', equip: 'semi' },
      { name: '滑輪後踢腿', sets: '3 組 × 10 下（每邊）', video: '#', note: '核心穩定，臀大肌主導', image: '', equip: 'semi' },
    ]
  },

  // ── 核心 ──
  core: {
    label: '核心',
    chipClass: 'core',
    exercises: [
      { name: '棒式 Plank', sets: '3 組 × 30 秒', video: '#', note: '臀部不可下塌或上翹', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/core_plank.jpg', equip: 'free' },
      { name: '側棒式 Side Plank', sets: '3 組 × 30 秒（每邊）', video: '#', note: '身體成一直線', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/core_plank_side.jpg', equip: 'free' },
      { name: '死蟲 Dead Bug', sets: '3 組 × 10 下（每邊）', video: '#', note: '腰部全程貼地', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/core_dead_bug.jpg', equip: 'free' },
      { name: '捲腹 Crunch', sets: '3 組 × 10 下', video: '#', note: '下背維持貼地', image: '', equip: 'free' },
      { name: '反向捲腹 Reverse Crunch', sets: '3 組 × 10 下', video: '#', note: '下腹主導動作', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/core_crunch_reverse.jpg', equip: 'free' },
      { name: '站姿風車 Windmill', sets: '3 組 × 10 下（每邊）', video: '#', note: '核心旋轉，髖外推穩定', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/core_windmill_standed.jpg', equip: 'free' },
      { name: '跪姿風車 Kneeling Windmill', sets: '3 組 × 10 下（每邊）', video: '#', note: '降低難度版，專注側彎', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/core_windmill_kneeling.jpg', equip: 'free' },
      { name: '懸吊抬腿', sets: '3 組 × 10 下', video: '#', note: '骨盆後傾帶動動作', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/core_hanging_leg_raise.jpg', equip: 'free' },
      { name: '滾輪捲腹 Ab Wheel', sets: '3 組 × 10 下', video: '#', note: '核心全程收緊', image: '', equip: 'free' },
      { name: '鳥狗式 Bird Dog', sets: '3 組 × 10 下（每邊）', video: '#', note: '緩慢控制，不晃動', image: '', equip: 'free' },
      { name: '俄羅斯轉體', sets: '3 組 × 10 下', video: '#', note: '腳可抬起增加難度', image: '', equip: 'free' },
      { name: '機械捲腹', sets: '3 組 × 10 下', video: '#', note: '全程收緊，控制回程', image: 'https://raw.githubusercontent.com/iisanosbb/workout-images/main/core_crunch_machine.jpg', equip: 'machine' },
    ]
  }
};

export interface Plan {
  name: string;
  pushKey: 'push' | 'push_vertical';
  pullKey: 'pull' | 'pull_vertical';
}

export const PLANS: Record<'A' | 'B', Plan> = {
  A: { name: '1號課表', pushKey: 'push', pullKey: 'pull' },
  B: { name: '2號課表', pushKey: 'push_vertical', pullKey: 'pull_vertical' }
};
