import { useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { ExecuteRecaptcha } from "./type";

export function useRecaptcha() {
  const recaptchaRef = useRef<HCaptcha>(null);
  const SITE_KEY = useRef<string>(String(process.env.NEXT_PUBLIC_RECAPTCHA_KEY));
  const [isRecaptchaLoaded, setIsRecaptchaLoaded] = useState<boolean>(false);

  const [callbackFn, setCallbackFn] = useState<ExecuteRecaptcha>();
  const recaptchaInstance = {
    execute: (callback: (token: string) => void) => {
      setCallbackFn(() => callback);
      setTimeout(() => {
        recaptchaRef.current?.execute();
      }, 100)
      setIsRecaptchaLoaded(true)
    },
    reset: () => recaptchaRef.current?.resetCaptcha(),
  }

  const Recaptcha = () => {
    return (
      <div >
        <HCaptcha
          size="invisible"
          sitekey={SITE_KEY.current}
          ref={recaptchaRef}
          onVerify={async (token) => {
            await callbackFn?.(token)

            setIsRecaptchaLoaded(false)
            recaptchaInstance.reset();
          }}
          onError={() => {
            setIsRecaptchaLoaded(false)
            recaptchaInstance.reset();
          }}
          onExpire={() => {
            setIsRecaptchaLoaded(false)
            recaptchaInstance.reset();
          }}

          onClose={() => {
            setIsRecaptchaLoaded(false)
            recaptchaInstance.reset();
          }}
          onChalExpired={() => {
            setIsRecaptchaLoaded(false)
            recaptchaInstance.reset();
          }}
        />
      </div>
    )
  }

  return { recaptchaInstance, isRecaptchaLoaded, setIsRecaptchaLoaded, Recaptcha };
}
