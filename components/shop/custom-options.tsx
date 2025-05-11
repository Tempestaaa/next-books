import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  array: { name: string; value: string }[];
};

export default function CustomOptions({ array }: Props) {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-60">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>

        <SelectContent>
          {array.map((item, id) => (
            <SelectItem key={id} value={item.value}>
              {item.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
