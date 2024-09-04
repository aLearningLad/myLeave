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
  display_photoUrl: string;
  leave_balance: number;
  on_leave: boolean;
  applied: boolean;
  current_leave_start: Date;
  current_leave_end: Date;
  leave_history: TleaveHistory;
};
