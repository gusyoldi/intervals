import { IntervaloObj } from "@/lib/models/data";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface ResponseModalProps {
  respuesta: boolean | null;
  intervaloElegido: IntervaloObj;
  showModal: boolean;
  onShowModal: (show: boolean) => void;
}

const ResponseModal = ({ respuesta, intervaloElegido, showModal, onShowModal }: ResponseModalProps) => {

  if(respuesta === null) return 

  const successIcon = (
    showModal && (
    <div className="flex flex-col justify-center items-center gap-4 text-green-500">
      <CheckCircledIcon className="text-9xl m-auto h-[200px] w-[200px] " />
      <span className="text-center ">Muy bien!!!</span>
    </div>
    )
  );

  const wrongIcon = (
    showModal && (
      <div className="flex flex-col justify-center items-center gap-4 text-red-500">
      <CheckCircledIcon
      className="text-9xl m-auto h-[200px] w-[200px]"
      color="red"
      />
      <span className="text-center">Respuesta incorrecta!</span>
      </div>
    )
  );

  return (
    respuesta ? successIcon : wrongIcon
  )
}

export default ResponseModal