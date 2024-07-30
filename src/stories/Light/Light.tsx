export type Props = {
  variant?: "green" | "red";
};

function Light({ variant = "green" }: Props) {
  return <div className="p-5 w-5 bg-green-600 rounded-full h-5"></div>;
}

export default Light;
