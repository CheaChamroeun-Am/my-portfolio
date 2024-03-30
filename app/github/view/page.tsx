import Button from "@/components/Button";
import React from "react";

const page = () => {
  return (
    <div className="body-section fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
      <img
        src="/git_not_found.png"
        alt="github not found"
        className="w-[300px] h-[300px] object-cover"
      />
      <h1 className="text-2xl font-bold mt-5">
        UH OH! The repository not found.
      </h1>
      <p className="mt-3">
        We're sorry this is the private repository we cannot show this in
        public. You can contact owner for showing the project or you can view the project screenshot.
      </p>
      <div className="mt-5">
        <Button title="Back" link="/"/>
      </div>
    </div>
  );
};

export default page;
