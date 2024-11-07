"use client";
const Card = dynamic(() => import("@components/basic-components/card"));
import H5 from "@components/basic-components/headings/H5";
import TextArea from "@components/basic-components/form-components/text-area";
import HelperText from "@components/basic-components/form-components/helper-text";
import CustomCheckBox from "@components/basic-components/form-components/checkbox";
import Description from "@components/basic-components/description";
import MailIcon from "@components/basic-components/icons/mai-icon";
import LocationIcon from "@components/basic-components/icons/location-icon";
import H6 from "@components/basic-components/headings/H6";
import WorkTogetherIcon from "@components/basic-components/icons/work-together-icon";
import PrimaryButton from "@components/basic-components/primary-button";
import { useEffect, useRef, useState } from "react";
import CustomInput from "@components/basic-components/form-components/input";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import $ from "jquery";
import dynamic from "next/dynamic";
import {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "react-phone-number-input";
const ContactForm: React.FC = () => (
  <div
    id="contact-form"
    className="w-full relative z-20 mt-[32px] sm:mt-[32px] xs:mt-[30px] h-fit overflow-hidden max-w-[1920px] px-[80px] lg:px-10 xs:px-5 pt-[120px] md:pt-[90px] sm:pt-[70px] xs:pt-[30px] mx-auto"
  >
    <div className=" flex sm:flex-col gap-10 sm:gap-[30px] w-full">
      <ContentUsForm />
      <InformationAboutCompany />
    </div>
  </div>
);

export default ContactForm;

const InformationAboutCompany = () => (
  <Card isInView={true} style="!p-4 grow-0 h-fit ">
    <div className="p-4 flex flex-col gap-8 xxl:gap-14 h-full">
      <div className="flex flex-col gap-2">
        <Description text={""} classes="flex items-center gap-2 !font-normal">
          <MailIcon style="w-5 h-5" />
          <span className="uppercase !font-light">Reach Out To Us Via:</span>
        </Description>
        <H5 text="info@sookshum-labs.com" style="!text-white sm:text-[18px]" />
      </div>
      <div className="flex flex-col gap-2">
        <Description
          text={""}
          classes="flex items-center gap-2 !text-white !font-normal"
        >
          <LocationIcon style="w-5 h-5" />
          <span className="uppercase !font-light">Our Location:</span>
        </Description>
        <H5 text="India" style="!text-white sm:text-[18px]" />
        <H6
          text="A-708, Tower-A, 7th Floor, Bestech Business Towers, Sector 66, Mohali, Punjab, India - 160066"
          classes="!text-white !font-normal sm:text-base sm:w-[90%] "
        />
      </div>
      <div className="flex flex-col gap-2 grow sm:mt-5 justify-end">
        <WorkTogetherIcon style="w-[56px] h-[30px]" />
        <H5
          text="Coming together is a beginning, staying together is progress, and working together is success.✨"
          style="!text-white !leading-[1.4]"
        />
        <Description
          children={null}
          text="-Henry Ford"
          classes="text-secondary italic grow-0"
        />
        <H5
          text="Shall we begin?"
          style="!text-white text-center leading-[1.2]"
        />
      </div>
    </div>
  </Card>
);

export type FormData = {
  name: string;
  email: string;
  "phone-no": string;
  "project-details": string;
  "privacy-policy": boolean;
  files: FormDataFile[];
};
type FormDataFile = {
  filename: string;
  content: string;
  fileSize: number;
  encoding: string;
  fileType: string;
};

const ContentUsForm: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<any>({});
  const [disableForm, setDisableForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    "phone-no": "",
    "project-details": "",
    "privacy-policy": false,
    files: [],
  });

  // Function to handle image click and trigger file input click
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  useEffect(() => {
    if (
      formData.email != "" &&
      formData.name != "" &&
      formData["privacy-policy"]
    ) {
      setDisableForm(false);
    } else {
      setDisableForm(true);
    }
  }, [formData]);

  // Function to handle file selection
  const handleFileChange = async (file: File) => {
    try {
      const result = await new Promise<string | ArrayBuffer | null>(
        (resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(file); // Read the file as a Data URL
        }
      );

      if (typeof result === "string") {
        // Extract base64 string from the Data URL
        const base64Data = result.split("base64,")[1];

        if (base64Data) {
          // Convert base64 string to Buffer
          const buffer = Buffer.from(base64Data, "base64");

          // Use the buffer
          setFormData((prev: FormData) => ({
            ...prev,
            files: [
              ...prev.files,
              {
                filename: file.name,
                content: base64Data,
                fileSize: file.size,
                fileType: file.type,
                encoding: "base64",
              },
            ],
          }));
        } else {
          console.error("No base64 data found.");
        }
      } else {
        console.error("Unexpected result type.");
      }
    } catch (error) {
      console.error("Error reading file:", error);
    }
  };
  function checkValidation() {
    let validate = true;
    const { name, email, "phone-no": phoneNo } = formData;
    if (!name) {
      error["name"] = "Name should not be empty";
      validate = false;
    } else if (/[1-9]+/g.test(name)) {
      error["name"] = "Please enter a valid name";
      validate = false;
    } else {
      error["name"] = "";
    }
    validate = isPossiblePhoneNumber(phoneNo);
    validate = isValidPhoneNumber(phoneNo);
    if (!validate) {
      error["phone-no"] = "Please enter a valid phone number";
      validate = false;
    } else {
      validate = true;
      error["phone-no"] = "";
    }

    if (!email) {
      error["email"] = "Email should not be empty";
      validate = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error["email"] = "Please enter a valid email address";
      validate = false;
    } else {
      error["email"] = "";
    }

    setError({ ...error });
    return validate;
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const isValidate = checkValidation();
    if (isValidate) {
      let result = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          ["phone-no"]: formData["phone-no"],
        }),
      });
      let response: {
        message: string | undefined;
        status: number;
        success: boolean;
        error: undefined | any;
      } = await result.json();
      if (response.status) {
        toast.success(response.message, {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
          theme: "dark",
          transition: Bounce,
        });
        setFormData({
          name: "",
          email: "",
          "phone-no": "",
          "project-details": "",
          "privacy-policy": false,
          files: [],
        });
      } else {
        toast.error(response.error, {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
          theme: "dark",
          transition: Bounce,
        });
      }
    }
  }
  return (
    <div className="flex flex-col grow gap-8 xxl:w-[65%] w-[57.6%] sm:w-full shrink-0">
      <form action="">
        <div className="flex flex-col gap-5 xxl:gap-6">
          <H5 text="Your contact info" style="!text-white" />
          <div className="grid grid-cols-2 gap-5 sm:gap-[14px]">
            <span>
              <CustomInput
                type="string"
                setError={setError}
                text="Full Name*"
                style={`w-full ${
                  error.name &&
                  error.name != "" &&
                  "!text-red !placeholder-[red] mb-1"
                }`}
                value={formData.name}
                setValue={setFormData}
                keyName={"name"}
              />
              {error?.name != "" && (
                <span className="text-sm pl-4 font-poppins font-light text-[red]">
                  {error.name}
                </span>
              )}
            </span>
            <span>
              <CustomInput
                setError={setError}
                type="email"
                text="Your Email*"
                style={`w-full ${
                  error.email &&
                  error?.email != "" &&
                  "!text-[red] !placeholder-[red] mb-1"
                }`}
                value={formData.email}
                setValue={setFormData}
                keyName={"email"}
              />
              {error?.email != "" && (
                <span className="text-sm pl-4 font-poppins font-light text-[red]">
                  {error.email}
                </span>
              )}
            </span>
            <span>
              <CustomInput
                setError={setError}
                type="number"
                text="Your Phone Number"
                style={`w-full ${
                  error["phone-no"] &&
                  error["phone-no"] != "" &&
                  "!text-[red] !placeholder-[red] mb-1"
                }`}
                value={formData["phone-no"]}
                setValue={setFormData}
                keyName={"phone-no"}
              />
              {error["phone-no"] != "" && (
                <span className="text-sm pl-4 font-poppins font-light text-[red]">
                  {error["phone-no"]}
                </span>
              )}
            </span>
          </div>
          <H5 text="Tell us more about your project" style="!text-white" />
          <div>
            <div className="relative">
              <TextArea
                text="Project details"
                style="w-full"
                value={formData["project-details"]}
                keyName={"project-details"}
                setValue={setFormData}
              />
              <input
                type="file"
                id="project_file"
                ref={fileInputRef}
                accept=".pdf,.doc,.docx,.odt,.ods,.ppt,.pptx,.xls,.xlsx,.rtf,.txt"
                className="hidden"
                onChange={async (e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    await handleFileChange(e.target.files[0]);
                  }
                }}
              ></input>
              <Image
                width={900}
                height={900}
                src="/contact-us/attachment.svg"
                alt="Click to upload"
                className="absolute right-[2%] h-6 w-auto bottom-8 cursor-pointer"
                onClick={handleImageClick}
              />
            </div>
            <HelperText
              text="Please upload a file: .pdf, .docx, .odt, .ods, .ppt/x, .xls/x, .rtf, .txt"
              style="pl-3 !font-light"
            />
            <div className="w-full flex flex-col gap-3 xs:gap-2 mt-3 sm:mt-2">
              {formData.files.map((file: FormDataFile, index: number) => (
                <div
                  key={index}
                  className="py-4 w-full flex justify-between items-center text-white text-base px-4 md:px-[20px] border-borderDarkButton [backdrop-filter:blur(100px)] sm:py-4 sm:px-5 rounded-[22px] border-solid border bg-darkButton shadow-buttonInset ${props.style} normal-case text-[16px] md:text-sm sm:text-[11px] font-normal font-poppins overflow-hidden focus:outline-none focus:border-[#ffffff2d]"
                >
                  <div className="flex gap-3 grow items-center">
                    <Image
                      src="/contact-us/file.png"
                      width="1200"
                      height="1200"
                      className="h-[40px] w-[40px]"
                      alt="file-icon"
                      blurDataURL="URL"
                      placeholder="blur"
                    />
                    <div className="flex flex-col gap-[-16px] h-fit">
                      <Description
                        children={null}
                        classes="text-white"
                        text={file.filename}
                      />
                      <Description
                        children={null}
                        classes="text-secondary text-xs"
                        text={file.fileType}
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Description
                      children={null}
                      classes="h-fit text-secondary"
                      text={`${(file.fileSize / 1024).toFixed(1)}kb`}
                    />
                    <button
                      onClick={() => {
                        let files: FormDataFile[] = formData.files;
                        files.splice(index, 1);
                        setFormData((prev: FormData) => ({
                          ...prev,
                          files: files,
                        }));
                      }}
                    >
                      <Image
                        src="/contact-us/cross.svg"
                        width="1200"
                        height="1200"
                        className="h-[30px] w-[30px]"
                        alt="file-icon"
                        blurDataURL="URL"
                        placeholder="blur"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CustomCheckBox
            setError={setError}
            style=""
            value={formData["privacy-policy"]}
            keyName={"privacy-policy"}
            setValue={setFormData}
          >
            <Description classes="text-base !font-light" text={""}>
              <span>
                I consent to Sookshum Labs to store my personal information
                according to the{" "}
                <a href="/privacy-policy" className="text-primary underline">
                  Privacy Policy
                </a>
              </span>
            </Description>
          </CustomCheckBox>
        </div>
      </form>
      <div
        onClick={async (e) => {
          if (!disableForm) {
            await handleSubmit(e);
          }
        }}
      >
        <PrimaryButton
          icon={true}
          style={`${
            disableForm ? "!bg-darkOrange cursor-not-allowed" : "cursor-pointer"
          }`}
          text="Send a message"
          link=""
        />
      </div>
      <ToastContainer
        style={{
          minWidth: "fit-content",
        }}
        toastClassName={(context) =>
          context?.defaultClassName +
          "gap-1 w-fit !rounded-[32px] border-borderDarkButton [backdrop-filter:blur(100px)] sm:py-4 sm:px-5 xs:px-3 xs:py-2 rounded-[32px] border-solid border bg-darkButton shadow-buttonInset"
        }
        bodyStyle={{
          display: "flex",
          alignItems: "center",
        }}
        bodyClassName={(e) =>
          e?.defaultClassName +
          " px-5 py-4 sm:p-3 font-poppins text-nowrap !rounded-[32px] gap-[16px] font-medium text-lg sm:text-sm"
        }
      />
    </div>
  );
};
