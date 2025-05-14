import AccountHeader from "@/components/account/account-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function OrdersPage() {
  return (
    <>
      <AccountHeader header="Orders" />

      <Tabs defaultValue="pending" className="overflow-y-auto">
        <TabsList>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="shipping">Shipping</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <div>
          <TabsContent value="pending">No orders yet</TabsContent>
          <TabsContent value="shipping">No orders yet</TabsContent>
          <TabsContent value="completed">No orders yet</TabsContent>
        </div>
      </Tabs>
    </>
  );
}
