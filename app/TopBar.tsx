import { ModeToggle } from "@/components/ModeToggle";
import React from "react";

const TopBar = () => {
    return (
        <div className="flex justify-between m-4">
            <div>Some stuff on the left</div>
            <div className="flex items-center gap-2">
                <ModeToggle />
                <div>Other stuff on the right</div>
            </div>
        </div>
    );
};

export default TopBar;
