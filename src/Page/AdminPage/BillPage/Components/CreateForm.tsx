import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, notification } from "antd";
import { Bill } from "../../../../Type/BillAndTax/Bill";
import InputTypeNumber from "../../../../Components/Input/InputTypeNumber";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import InputTypeDateTime from "../../../../Components/Input/InputTypeDateTime";

interface CreateFormFields extends Bill { }

type CreateEditArticleFormProps = {
  initForm?: CreateFormFields;
};

const defaultFormValues = {
  id: 0,
  userId: 0,
  staffId: 0,
  billDate: new Date(),
  totalAmount: 0,
  paymentTerm: new Date(),
  paymentStatus: false,
};

const userList = [
  { value: 1, label: "Asset Type 1" },
  { value: 2, label: "Asset Type 2" },
  { value: 3, label: "Asset Type 3" },
  { value: 4, label: "Asset Type 4" },
  { value: 5, label: "Asset Type 5" },
];

const staffList = [
  { value: 1, label: "Asset Status 1" },
  { value: 2, label: "Asset Status 2" },
  { value: 3, label: "Asset Status 3" },
  { value: 4, label: "Asset Status 4" },
  { value: 5, label: "Asset Status 5" },
];

const paymentStatusList = [
  { value: 1, label: "Inspector 1" },
  { value: 2, label: "Inspector 2" },
  { value: 3, label: "Inspector 3" },
  { value: 4, label: "Inspector 4" },
  { value: 5, label: "Inspector 5" },
];

const CreateForm: React.FC<CreateEditArticleFormProps> = ({ initForm }) => {
  const {
    control,
    reset,
    handleSubmit,
  } = useForm<CreateFormFields>({
    defaultValues: defaultFormValues,
  });

  useEffect(() => {
    if (initForm) {
      reset(initForm);
    } else {
      reset(defaultFormValues);
    }
  }, [initForm, reset]);



  return (
    <div>
      
    </div>
  );
};

export default CreateForm;