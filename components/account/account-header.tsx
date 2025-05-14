type Props = {
  header: string;
};

export default function AccountHeader({ header }: Props) {
  return <header className="font-heading text-4xl">{header}</header>;
}
