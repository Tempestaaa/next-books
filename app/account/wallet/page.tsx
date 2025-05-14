import AccountHeader from "@/components/account/account-header";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, formatUSD } from "@/lib/utils";
import { Transaction, TransactionStatusType } from "@/types/common.type";
import { CircleDollarSignIcon, WalletIcon } from "lucide-react";

export default function WalletPage() {
  const transactionHistory: Transaction[] = [
    {
      id: "TRX001",
      userId: "USER123",
      totalAmount: 350000,
      date: "2025-05-10T14:30:00",
      status: "Completed",
      paymentMethod: "Credit Card",
      shippingInfo: "15 Nguyen Hue St, District 1, HCMC",
      orderId: "ORD001",
      note: "Delivery during business hours",
      discount: null,
    },
    {
      id: "TRX002",
      userId: "USER456",
      totalAmount: 420000,
      date: "2025-05-11T09:15:00",
      status: "Processing",
      paymentMethod: "Bank Transfer",
      shippingInfo: "27 Le Loi St, District 5, HCMC",
      orderId: "ORD002",
      note: null,
      discount: "SUMMER10",
    },
    {
      id: "TRX003",
      userId: "USER789",
      totalAmount: 185000,
      date: "2025-05-12T16:45:00",
      status: "Completed",
      paymentMethod: "Cash on Delivery",
      shippingInfo: "42 Tran Hung Dao St, District 3, HCMC",
      orderId: "ORD003",
      note: "Call before delivery",
      discount: null,
    },
    {
      id: "TRX004",
      userId: "USER123",
      totalAmount: 275000,
      date: "2025-05-12T18:20:00",
      status: "Failed",
      paymentMethod: "Credit Card",
      shippingInfo: "15 Nguyen Hue St, District 1, HCMC",
      orderId: "ORD004",
      note: null,
      discount: "FIRSTBUY",
    },
    {
      id: "TRX005",
      userId: "USER321",
      totalAmount: 520000,
      date: "2025-05-13T10:05:00",
      status: "Completed",
      paymentMethod: "E-wallet",
      shippingInfo: "8 Vo Van Tan St, District 3, HCMC",
      orderId: "ORD005",
      note: "Gift wrapping",
      discount: "BOOKFEST25",
    },
  ];

  return (
    <>
      <div className="space-y-4">
        <AccountHeader header="Wallet" />
        <section className="p-4 border-2 border-muted rounded flex items-end-safe gap-4">
          <header className="space-y-1 flex-1">
            <p className="font-heading">Total amount</p>
            <div className="text-4xl">{formatUSD(150.59)}</div>
          </header>

          <Button variant="ghost" className="flex flex-col gap-1 py-8">
            <WalletIcon />
            <span>Deposit</span>
          </Button>

          <Button variant="ghost" className="flex flex-col gap-1 py-8">
            <CircleDollarSignIcon />
            <span>Withdraw</span>
          </Button>
        </section>
      </div>

      <div className="mt-4 space-y-4">
        <header className="font-heading text-xl">Transaction history</header>

        <Table>
          <TableCaption className="italic text-muted">
            A list of your recent transactions.
          </TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="w-20">Order ID</TableHead>
              <TableHead className="w-20">Status</TableHead>
              <TableHead className="w-40">Date</TableHead>
              <TableHead className="w-25">Method</TableHead>
              <TableHead className="w-25">Amount</TableHead>
              <TableHead className="w-40">Discount</TableHead>
              <TableHead className="w-40">Shipping info</TableHead>
              <TableHead>Note</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {transactionHistory.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.orderId}</TableCell>
                <TableCell>
                  <div
                    className={`text-xs px-2 py-1 rounded text-center ${
                      item.status === "Completed"
                        ? "bg-green-500/80"
                        : item.status === "Failed"
                        ? "bg-destructive/80"
                        : "bg-star"
                    }`}
                  >
                    {item.status}
                  </div>
                </TableCell>
                <TableCell>
                  {formatDate(new Date(item.date), "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </TableCell>
                <TableCell>{item.paymentMethod}</TableCell>
                <TableCell>{formatUSD(item.totalAmount)}</TableCell>
                <TableCell>{item.discount}</TableCell>
                <TableCell>{item.shippingInfo}</TableCell>
                <TableCell>{item.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
