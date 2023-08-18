/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  required,
  minLength,
  maxLength,
  emailValidation,
  postalCodeValidation,
} from "@/utils/validation";

import Input from "../common/Input";
import Checkbox from "../common/Checkbox";

// eslint-disable-next-line no-unused-vars
const InputForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [acceptTermsError, setAcceptTermsError] = useState(false);

  const [errorsCount, setErrorsCount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!acceptTerms) {
      setAcceptTermsError(true);
      return;
    }

    // Check if all fields have a value
    if (
      !firstName ||
      !lastName ||
      !postalCode ||
      !emailAddress ||
      !acceptTerms
    ) {
      return;
    }

    // Check validation state of all fields before submitting
    if (errorsCount > 0) {
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden rounded-xl shadow-xl  bg-white/10 dark:bg-black/10 backdrop-blur-sm w-80 sm:w-[400px] p-4">
      <h3 className="font-semibold mb-3 mt-2 text-2xl text-center ">
        Contactez-nous
      </h3>
      <p className="text-center">Nous aimerions avoir de vos nouvelles !</p>
      <form
        className="overflow-hidden pt-10 pb-8 px-8 flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full gap-4">
          <Input
            type="text"
            placeholder="Prénom"
            onChange={setFirstName}
            validation={[required, minLength(2), maxLength(50)]}
            setErrorsCount={setErrorsCount}
            disabled={isSubmitted}
          />

          <Input
            type="text"
            placeholder="Nom"
            onChange={setLastName}
            validation={[required, minLength(2), maxLength(50)]}
            setErrorsCount={setErrorsCount}
            disabled={isSubmitted}
          />
        </div>

        <Input
          type="text"
          placeholder="Code postal"
          onChange={setPostalCode}
          validation={[
            required,
            minLength(2),
            maxLength(10),
            postalCodeValidation,
          ]}
          setErrorsCount={setErrorsCount}
          disabled={isSubmitted}
        />

        <Input
          type="email"
          placeholder="Adresse e-mail"
          onChange={setEmailAddress}
          validation={[required, minLength(5), maxLength(254), emailValidation]}
          setErrorsCount={setErrorsCount}
          disabled={isSubmitted}
        />

        {/* Text area */}
        <div className="relative inline-block w-full font-caveat ">
          <textarea
            id="story"
            name="story"
            rows="5"
            cols="33"
            placeholder="Dis-nous ce que tu penses !"
            className="mx-0 my-2 block w-full appearance-none rounded-2xl p-2 text-main font-nunito outline-none duration-100 placeholder:font-caveat dark:placeholder:text-cyan-200/75 placeholder:text-rose-300/75 focus:ring-2 focus:ring-rose-200 dark:focus:ring-cyan-700"
          ></textarea>
        </div>
        <div className="my-3">
          <Checkbox
            textColor={
              acceptTermsError
                ? "decoration-dotted underline decoration-rose-700 decoration-2 text-white"
                : "text-white"
            }
            text="Je ne suis ni un robot ni Jo Mitch !"
            checked={acceptTerms}
            disabled={isSubmitted}
            onChange={(e) => {
              setAcceptTerms(e.target.checked);

              if (e.target.checked) {
                setAcceptTermsError(false);
              }
            }}
          />
        </div>

        {!isSubmitted ? (
          <button
            type="submit"
            className="font-caveat text-white mt-2"
            aria-label="soumettre"
          >
            <div className="flex items-center">
              <div className="inline-block h-8 w-32 text-main -rotate-2 cursor-pointer touch-manipulation select-none rounded-sm border-0 border-solid bg-rose-300 dark:bg-cyan-800 text-center text-lg no-underline after:absolute after:bottom-1 after:left-1 after:h-[calc(100%_-_1px)] after:w-[calc(100%_-_1px)] after:rounded-sm after:border after:border-solid after:border-slate-950 dark:after:border-slate-100 after:content-[''] hover:after:bottom-0.5 hover:after:left-0.5">
                Envoyer
              </div>
            </div>
          </button>
        ) : (
          <p className="font-caveat text-xl text-amber-100 drop-shadow-lg">
            Merci et à très vite !
          </p>
        )}
      </form>
    </div>
  );
};

export default InputForm;
