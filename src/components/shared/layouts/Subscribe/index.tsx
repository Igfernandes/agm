import { Input } from "@components/shared/forms/Input";
import i18n from "@configs/i18n";
import Image from "next/image";
import { Button } from "../Button";
import { useSubscribe } from "./hooks/useSubscribe";
import { FormProvider } from "react-hook-form";
import { handleMaskPhone } from "@helpers/string";
import { When } from "@components/utilities/When";
import { Close } from "@assets/Icons/black/CloseClean";

export function Subscribe() {
  const { register, formMethods, isLoading, submit, setShowPopUp, showPopUp } =
    useSubscribe();

  return (
    <When value={showPopUp}>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(submit)}>
          <div className="fixed h-full w-full bg-cross-black-secondary bg-opacity-45 flex items-center z-[9999]">
            <div
              onClick={() => setShowPopUp(false)}
              className="overlay absolute top-0 left-0 w-full h-full z-0"
            ></div>
            <div className={`p-4 rounded-lg max-w-[400px] mx-auto z-10 transition-all delay-500 duration-1000 relative  ${showPopUp ? 'top-[0vh]' : 'top-[-25vh]'}`}>
              <div className=" relative z-10 mb-[-3rem]">
                <Image
                  className="bg-white p-4 rounded-full mx-auto"
                  src="/notification.png"
                  width={110}
                  height={70}
                  alt="bell notification"
                />
              </div>
              <div className="relative bg-white p-6 rounded-2xl shadow-sm shadow-white">
                <div
                  className="close absolute top-2 right-2 cursor-pointer z-50"
                  onClick={() => setShowPopUp(false)}
                >
                  <Close />
                </div>
                <div className="mt-6">
                  <h3 className="text-center font-bold text-2xl mb-2">
                    AGM Plataforma
                  </h3>
                  <span className="text-sm block">
                    {i18n("Components.subscribe.notification_to_you")}
                  </span>
                </div>
                <div className="mt-2">
                  <Input
                    {...register("phone")}
                    required={true}
                    onChange={(ev) => {
                      handleMaskPhone(ev);
                      formMethods.setValue("phone", ev.currentTarget.value);
                    }}
                    label={i18n("Words.phone")}
                    dataTestId="phone"
                  />
                </div>
                <div className="mt-2">
                  <Button
                    text={i18n("Words.receive")}
                    isLoading={isLoading}
                    className="bg-red text-white font-semibold"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </When>
  );
}
