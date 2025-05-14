import AccountHeader from "@/components/account/account-header";
import AddressSection from "@/components/account/address-section";
import AvatarSection from "@/components/account/avatar-section";
import PersonalSection from "@/components/account/personal-section";

export default function ProfilePage() {
  return (
    <>
      <AccountHeader header="Profile Settings" />

      <div className="flex flex-col gap-4 *:p-4 *:border-2 *:border-muted *:rounded">
        <AvatarSection />
        <PersonalSection />
        <AddressSection />
      </div>
    </>
  );
}
