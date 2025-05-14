export type Options = { name: string; value: string };

export const TransactionStatus = ["Completed", "Processing", "Failed"] as const;
export type TransactionStatusType = (typeof TransactionStatus)[number];

export type Transaction = {
  id: string;
  userId: string;
  totalAmount: number;
  date: string;
  status: TransactionStatusType;
  paymentMethod: string;
  shippingInfo: string;
  orderId: string;
  note: string | null;
  discount: string | null;
};
