export type RequestStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "FULFILLED"
  | "CANCELLED"
  | "EXPIRED"
  | (string & {});

export type PaymentStatus =
  | "UNPAID"
  | "PAID"
  | "FAILED"
  | "CANCELLED"
  | "REFUNDED"
  | (string & {});

export interface Payment {
  id: string;
  amount: string;
  currency: string;
  gateway: string;
  status: PaymentStatus;
  paidAt: string | null;
  createdAt: string;
}

export interface BloodRequests {
  id: string;
  bloodGroup: string;
  unitsRequired: number;
  unitsFulfilled: number;
  urgency: string;
  hospitalName: string;
  hospitalAddress: string;
  city: string;
  requiredDate: string;
  reason: string;
  status: RequestStatus;
  createdAt: string;
  payment: Payment | null;
}
