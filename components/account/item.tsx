type Props = { label: string; value: string };

export default function Item({ label, value }: Props) {
  return (
    <label>
      <p className="font-heading">{label}</p>
      <p>{value}</p>
    </label>
  );
}
