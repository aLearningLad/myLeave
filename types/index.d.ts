declare type TTleaveHistory = {
  leaveId: UUID | number | string;
  history_id: UUID | string; //common ID shared by this individual's applications
  name: string;
  email: string;
  is_granted: boolean;
  leave_start: Date | null;
  leave_end: Date | null;
  leave_duration: number | null;
  leave_type: string | null;
  sick_note: boolean | null;
};

declare type TuserDetails = {
  worker_id: string | UUID;
  display_name: string;
  email: string; // from auth, will set automatically || prompted to enter if NA
  display_photoUrl?: string; //from auth, will set automatically || prompted to enter if NA
  leave_balance: number; // initially what admin sets it at, separate values for gen worker & manager
  on_leave: boolean; //initially false
  is_applied: boolean; //initially false
  current_leave_start: Date | null; //initially null
  current_leave_end: Date | null; //initially null
  role: string; //select from 'general worker', 'manager', set by admin during spot allocation for that worker
  is_manager: boolean; //initially false, set by admin
  is_admin: boolean; //initially false, only true on admin account
  // leave_history: TleaveHistory; //an individual's leave applications will share common UUID in table for histories, so we can view them all later
  // histories_id: UUID | string; //shared ID for all of an individual's applications
  is_active: boolean; //initially true, changeable only by admin
  is_suspended: boolean; // initially false, changeable only by admin
  is_terminated: boolean; //initially false, changeable only by admin
  worker_key: string;
};

export type TworkerId = {
  worker_id: string | UUID;
  shop_id: string;
  is_registered: boolean;
};
