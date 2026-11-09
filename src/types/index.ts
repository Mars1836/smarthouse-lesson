export interface Timestamp {
  label: string;
  sec: number;
  url?: string;
}

export interface TheoryBlock {
  title: string;
  html: string;
}

export interface QuizQuestion {
  q: string;
  options: string[];
  correct: number;
  explain: string;
  step?: string;
}

export interface ModuleData {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor?: string;
  videoUrl?: string | null;
  timestamps?: Timestamp[];
  summary: string;
  theoryBlocks: TheoryBlock[];
  labType?: 'lab_mod0' | 'lab_mod1' | 'lab_mod2' | 'lab_mod3' | 'lab_mod4' | 'lab_mod5' | null;
  miniQuiz: QuizQuestion[];
  isCustom?: boolean;
}

export interface SearchItem {
  modId: string;
  title: string;
  desc: string;
}
