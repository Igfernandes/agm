import { Input } from "@components/shared/forms/Input";
import { TextArea } from "@components/shared/forms/TextArea";
import { useFormContext } from "react-hook-form";
import { Select } from "@components/shared/forms/Select";
import { When } from "@components/utilities/When";
import { Datetime } from "@components/shared/forms/DateTime";
import { TextEdit } from "@components/shared/forms/TextEdit";
import { ClientCategoriesShape } from "@type/Clients/ClientCategories";
import { FormShape } from "@type/Forms";
import { useFormsData } from "../hooks/useFormsData";
import { ComponentsProps } from "../../type";
import { FormsPayload } from "../schema";
import { TopBar } from "@components/Private/Forms/Profile/parts/TopBar";
import { useI18n } from "@contexts/I18n";

type Props = Pick<ComponentsProps, "handleChangeFormFields"> & {
  slug?: string;
  targetForm: FormShape;
};

export function Definitions({ handleChangeFormFields, slug }: Props) {
  const { t } = useI18n()
  const { forms, categories } = useFormsData();
  const {
    register,
    getValues,
    formState: { errors },
  } = useFormContext<FormsPayload>();

  return (
    <div className="form-definitions">
      <TopBar slug={slug} />
      <div className="form-row flex flex-wrap mb-4 justify-between">
        <div className="form-group w-full">
          <Input
            {...register("name")}
            label={t(`Texts.form_name`)}
            dataTestId="form_name"
            required={true}
            maxLength={200}
            errors={errors.name}
          />
        </div>
      </div>
      <div className="form-group mb-4">
        <When value={forms.length > 0}>
          <Select
            {...register("template", { valueAsNumber: true })}
            options={[
              {
                text: "--",
                value: "",
              },
              ...forms.map((form) => ({
                text: form.name,
                value: form.id,
              })),
            ]}
            onChange={(ev) => {
              const formId = ev.currentTarget.value;
              if (!formId) handleChangeFormFields([]);

              const targetForm = forms.find((form) => form.id === +formId);

              if (!targetForm?.components) return;

              handleChangeFormFields(JSON.parse(targetForm?.components));
            }}
            dataTestId="templates-forms"
            label={t("Words.templates")}
            errors={errors.template}
          />
        </When>
        <When value={forms.length == 0}>
          <span className="bg-disabled border-2 border-tertiary block p-4">
            {t("Texts.not_found_templates")}
          </span>
        </When>
      </div>
      <div className="form-group w-full">
        <Input
          {...register("stock", { valueAsNumber: true })}
          label={t(`Texts.vacancies_total`)}
          dataTestId="form_stock"
          type="number"
          errors={errors.stock}
        />
      </div>
      <div className="my-4">

      </div>
      <div className="flex flex-wrap md:flex-nowrap my-4">
        <div className="form-group w-full md:w-1/2 md:mr-2">
          <Datetime
            {...register("started_at", {
              required: true
            })}
            label={t("Texts.started_inscribed")}
            dataTestId="started_at"
            required={true}
            errors={errors.started_at}
          />
        </div>
        <div className="form-group w-full my-4 md:my-auto md:w-1/2 md:ml-2">
          <Datetime
            {...register("expired_at", {
              required: true
            })}
            label={t("Texts.final_inscribed")}
            dataTestId="expired_at" required={true}

            errors={errors.expired_at}
          />
        </div>
      </div>
      <div className="form-group my-6">
        <Select
          {...register("category", { valueAsNumber: true })}
          label={t("Texts.relation_category")}
          dataTestId="category"
          options={[
            {
              text: "--",
              value: null,
            },
            ...(categories ?? [])?.map((category: ClientCategoriesShape) => ({
              text: category.name,
              value: String(category.id)
            })),
          ]}
        />
        <span className="text-red text-sm">
          <strong>{t("Words.warning")}:</strong> {t("Screens.dashboard.forms.about_relation_category")}
        </span>
      </div>
      <div className="form-group">
        <TextArea
          {...register("description")}
          label={t("Words.description")}
          dataTestId="description"
          maxLength={800}
          errors={errors.description}
        />
      </div>
      <div className="form-row mt-6">
        <TextEdit
          {...register("thanks_message")}
          dataTestId="alerts"
          label={t(`Texts.thanks_message`)}
          defaultValue={getValues("thanks_message") ?? ""}
          placeholder={t("Screens.dashboard.forms.about_thanks_message")}
          errors={errors.thanks_message}
          maxLength={6000}
        />
      </div>
    </div>
  );
}
