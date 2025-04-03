import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface selectProp {
  data: string[];
}

export const SelectDemo: React.FC<selectProp> = ({ data }) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>USD</SelectLabel>
          {data.map((item) => (
            <SelectItem value={item}>{item}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
