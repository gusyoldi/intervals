import { Button, ButtonGroup } from "@nextui-org/button";

export default function Page() {
  return (
    <div>
      <h1 className="text-center text-red-500">
        Cual es el intervalo correcto?
      </h1>

      <div>
        <OptionButton content={"2 menor"} />
        <OptionButton content={2} />
      </div>
    </div>
  );
}

// const optionsKeyboard = () => {
//   return <ButtonGroup></ButtonGroup>;
// };

interface OptionButtonProps {
  content: string | number;
}

const OptionButton = ({ content }: OptionButtonProps) => {
  return <Button>{content}</Button>;
};
