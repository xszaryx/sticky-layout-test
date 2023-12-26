import React from "react";
import TopBar from "./TopBar";
import NavBar from "./NavBar";
import { ScrollArea } from "@/components/ui/scroll-area";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="min-w-64 bg-accent overflow-auto sticky top-0 h-screen ">
                <NavBar />
            </div>
            <div className="flex flex-col flex-grow ">
                <div className="sticky bg-accent top-0 text-2xl h-32 z-10">
                    {/* Topbar content */}
                    <TopBar />
                </div>
                <ScrollArea className="flex-grow overflow-auto">
                    {/* Main area content */}
                    {children}
                </ScrollArea>
            </div>
        </div>
    );
};

export default DashboardLayout;
