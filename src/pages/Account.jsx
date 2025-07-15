/* eslint-disable react/prop-types */
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera } from "lucide-react";

const Account = () => {
  return (
    <DashboardLayout className="bg-white">
      <Profile />
      <EditProfile />
    </DashboardLayout>
  );
};

export default Account;

const Profile = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-0 px-10 py-10 md:pt-20 pb-14 ">
      <div className="relative mb-3 z-0!">
        <img src="/images/user_2.svg" alt="user" className="size-[150px]" />
        <span className="bg-green absolute bottom-0 right-0 size-10 rounded-full flex justify-center items-center cursor-pointer">
          <Camera color="white" />
        </span>
      </div>
      <h2 className="text-2xl font-bold text-black">John Doe</h2>
      <p className="text-base text-grey">Johndoe@gmail.com</p>
      <p className="text-base text-green font-bold">Bronze</p>
    </div>
  );
};

const EditProfile = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-3 bg-transparent border-gray-200 ">
          <CustomTabsTrigger value="account" title="Account Verification" />
          <CustomTabsTrigger value="update" title="Update Information" />
          <CustomTabsTrigger value="password" title="Change Password" />
        </TabsList>
        <TabsContent
          value="account"
          className=" flex flex-col gap-5 max-w-[640px]"
        >
          <div className="flex flex-col gap-6 p-5 md:p-10">
            <VerifyCard img="email.svg" title="Email Verification" completed />
            <VerifyCard img="man.svg" title="Identity Verification" />
            <VerifyCard img="map.svg" title="Address Verification" />
          </div>
        </TabsContent>
        <TabsContent value="update" className="flex flex-col gap-5 w-full">
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-street">Street</Label>
                <Input
                  id="tabs-demo-street"
                  className="rounded-[5px]"
                  type="text"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-city">City</Label>
                <Input
                  id="tabs-demo-city"
                  className="rounded-[5px]"
                  type="text"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-country">Country</Label>
                <Input
                  id="tabs-demo-country"
                  className="rounded-[5px]"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-zip">Zip-code</Label>
                <Input
                  id="tabs-demo-zip"
                  className="rounded-[5px]"
                  type="text"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-state">State</Label>
                <Input
                  id="tabs-demo-state"
                  className="rounded-[5px]"
                  type="password"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="tabs-demo-email">Email Address</Label>
                <Input
                  id="tabs-demo-email"
                  className="rounded-[5px]"
                  type="password"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label htmlFor="picture">Profile picture</Label>
                <Input id="picture" className="rounded-[5px] file:text-green" type="file" />
              </div>
            </div>
            <Button className="bg-green hover:bg-green-600 rounded-[5px]">
              Save password
            </Button>
          </div>
        </TabsContent>
        <TabsContent
          value="password"
          className="flex flex-col gap-5 max-w-[540px]"
        >
          <div className="flex flex-col gap-6 p-5 md:p-10">
            <div className="grid gap-3">
              <Label htmlFor="tabs-demo-current">Current password</Label>
              <Input
                id="tabs-demo-current"
                className="rounded-[5px]"
                type="password"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tabs-demo-new">New password</Label>
              <Input
                id="tabs-demo-new"
                className="rounded-[5px]"
                type="password"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tabs-demo-confirm">Confirm New password</Label>
              <Input
                id="tabs-demo-confirm"
                className="rounded-[5px]"
                type="password"
              />
            </div>
            <Button className="bg-green hover:bg-green-600 rounded-[5px]">
              Save password
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const VerifyCard = ({ completed, title, img }) => {
  return (
    <Card className="flex flex-row justify-between items-center px-5 py-3.5">
      <div className="flex justify-between items-center gap-3.5">
        <img src={`/icons/${img}`} alt="icon" className="size-12.5" />
        <p className="text-base font-medium">{title}</p>
      </div>
      <p className={`${completed ? "text-green" : "text-red-500"} text-sm`}>
        {completed ? "completed" : "not completed"}
      </p>
    </Card>
  );
};

const CustomTabsTrigger = ({ title, value }) => {
  return (
    <TabsTrigger
      value={value}
      className="text-sm md:text-base cursor-pointer border-b-[3px] pb-2 data-[state=active]:text-black data-[state=active]:border-green data-[state=active]:bg-transparent data-[state=active]:shadow-none "
    >
      {title}
    </TabsTrigger>
  );
};
