declare type TTleaveHistory = {
  leaveId: UUID | number | string;
  name: string;
  email: string;
  leave_start: Date;
  leave_end: Date;
  leave_duration: number;
  leave_type: string;
  sick_note: boolean;
};

declare type TuserDetails = {
  display_name: string;
  email: string;
  display_photoUrl?: string;
  leave_balance: number;
  on_leave: boolean;
  applied: boolean;
  current_leave_start: Date;
  current_leave_end: Date;
  role: string; //select from 'general worker', 'manager'
  is_manager: boolean; //initially false
  is_admin: boolean; //initially false
  leave_history: TleaveHistory;
  is_active: boolean; //initially true, changeable only by admin
  is_suspended: boolean; // initially false, changeable only by admin
  is_terminated: boolean; //initially false, changeable only by admin
  worker_key: string;
};
