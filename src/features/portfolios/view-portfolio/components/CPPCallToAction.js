import { API_GET_CONVERSATION_ID } from "@/apis/ChatApis";
import { ROUTES } from "@/utils/Constants";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const CPPCallToAction = ({ CompanyData }) => {
  const router = useRouter();
  const { token } = useSelector((state) => state.auth);
  const { company_info } = useSelector((state) => state.company);
  const handleChat = async () => {
    const res = await API_GET_CONVERSATION_ID(token, CompanyData?.id);
    if (res?.id) {
      router.push(`${ROUTES?.Chat}?chat_id=${res?.id}`);
    }
  };

  return (
    <section className="stp-15 sbp-15 container flex flex-col items-center justify-center gap-8 border-y-2 border-n900">
      {company_info?.id != CompanyData?.id && (
        <>
          <h2 className="heading-2">Work with me</h2>
          <div className="max-w-[300px]">
            <a
              onClick={handleChat}
              className="relative block w-full overflow-hidden rounded-full bg-n700 px-6 py-3 text-sm font-semibold text-white duration-700 after:absolute after:inset-0 after:left-0 after:w-0 after:rounded-full after:bg-yellow-400 after:duration-700 hover:text-n900 hover:after:w-[calc(100%+2px)]"
            >
              <div className="relative z-20 flex items-center justify-center gap-3">
                <span>Let's Chat</span>
              </div>
            </a>
          </div>
        </>
      )}
    </section>
  );
};

export default CPPCallToAction;
