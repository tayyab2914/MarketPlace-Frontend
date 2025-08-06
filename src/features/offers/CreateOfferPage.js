"use client";
import React, { useEffect } from "react";
import { Form } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import CustomInputField from "@/components/ui/CustomInputField/CustomInputField";
import Button from "@/components/ui/Button/Button";
import { Calendar, DollarSign } from "lucide-react";
import { useSelector } from "react-redux";
import "./styles/create-offer.css";
import { API_OFFER_CREATE } from "@/apis/OfferApis";
import Navbar from "@/components/layout/navbar/Navbar";
import { ROUTES } from "@/utils/Constants";

const initialFormValues = {
  message: "I can complete the migration in 10 days with full documentation.",
  proposed_price: 1800.0,
  estimated_delivery_days: 10,
};

const CreateOfferPage = () => {
  const searchParams = useSearchParams();
  const listingId = searchParams.get("listing_id");
  const [form] = Form.useForm();
  const router = useRouter();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    form.setFieldsValue(initialFormValues);
  }, [form]);

  const onFinish = async (values) => {
    console.log("Form values:", values);
    const res = await API_OFFER_CREATE(token, values, listingId);
    if (res) {
      form.resetFields();
      router.push(ROUTES.listListings);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center px-4 "
        style={{ paddingTop: "90px" }} // adjust based on your navbar height
      >
        <div className="w-full max-w-2xl rounded-3xl border border-gray-300 p-6 sm:p-8 shadow-sm bg-white">
          <h4 className="crt-off-title">Send an Offer</h4>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            className="crt-off-form"
          >
            <CustomInputField
              inputType="textarea"
              name="message"
              label="Message"
              placeholder="Enter message"
              className={"crt-off-input-field"}
            />
            <CustomInputField
              inputType="number"
              name="proposed_price"
              label="Proposed Price ($)"
              placeholder="e.g. 4000"
              addonBefore={<DollarSign size={16} strokeWidth={1} />}
              className={"crt-off-input-field"}
            />
            <CustomInputField
              inputType="number"
              name="estimated_delivery_days"
              label="Estimated Delivery Days ($)"
              placeholder="e.g. 10"
              addonBefore={<Calendar size={16} strokeWidth={1} />}
              className={"crt-off-input-field"}
            />

            <Button variant="filled-animated" type="submit" h="50px">
              <span>Send Offer</span>
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateOfferPage;
