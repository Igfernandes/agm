import i18n from "@configs/i18n";
import { handleSnackbar } from "./snackbar";

export const handleMaskDate = (
  event:
    | React.KeyboardEvent<HTMLInputElement>
    | React.ChangeEvent<HTMLInputElement>,
) => {
  let value = event.currentTarget.value.replace(/\D/g, ""); // Remove tudo que não for número

  if (value.length > 2) {
    const dateStringUpdated = value.slice(0, 2) + "/" + value.slice(2);

    value = getDateWithDayValid(
      dateStringUpdated,
      i18n("Configs.format.separator"),
      +i18n("Configs.format.day_position"),
    );
  }

  if (value.length > 5 && value) {
    const dateStringUpdated = value.slice(0, 5) + "/" + value.slice(5, 9);
    value = getDateWithMonthValid(
      dateStringUpdated,
      i18n("Configs.format.separator"),
      +i18n("Configs.format.month_position"),
    );
  }

  if (value.length == 10)
    value = getDateWithYearValid(
      value,
      i18n("Configs.format.separator"),
      +i18n("Configs.format.year_position"),
    );

  event.currentTarget.value = value;
  return value;
};

export const getDateWithMonthValid = (
  date: string,
  separator: string,
  position: number,
) => {
  const dateParts = date.split(separator);
  const month = +dateParts[position];

  if (month > 0 && month <= 12) return date;

  handleSnackbar("error", `${i18n("Validations.invalid_month")}`);
  return dateParts[0];
};

export const getDateWithYearValid = (
  date: string,
  separator: string,
  position: number,
) => {
  const dateParts = date.split(separator);
  const year = +dateParts[position];

  if (year > 1500) return date;

  handleSnackbar("error", `${i18n("Validations.invalid_year")}`);
  delete dateParts[position];

  return dateParts.join(separator);
};

export const getDateWithDayValid = (
  date: string,
  separator: string,
  position: number,
) => {
  const dateParts = date.split(separator);
  const day = +dateParts[position];

  if (day > 0 && day <= 31) return date;

  handleSnackbar("error", `${i18n("Validations.invalid_day")}`);

  return "";
};

export const getMaskDate = (value: string) => {
  value = value.replace(/\D/g, ""); // Remove tudo que não for número

  if (value.length > 2) {
    value = value.slice(0, 2) + "/" + value.slice(2);
  }
  if (value.length > 5) {
    value = value.slice(0, 5) + "/" + value.slice(5, 9);
  }

  return value;
};

export const handleMaskDatetime = (
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  const value = event.target.value.replace(/\D/g, ""); // Remove tudo que não for número
  let datetime = "";

  if (value.length <= 2) {
    datetime = value;
  } else if (value.length <= 4) {
    datetime = value.slice(0, 2) + "/" + value.slice(2);
  } else if (value.length <= 8) {
    datetime =
      value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4);
  } else {
    datetime =
      value.slice(0, 2) +
      "/" +
      value.slice(2, 4) +
      "/" +
      value.slice(4, 8) +
      " " +
      value.slice(8, 10) +
      ":" +
      value.slice(10, 12);
  }

  event.target.value = datetime;
};

export const handleMaskTime = (event: React.ChangeEvent<HTMLInputElement>) => {
  let value = event.target.value.replace(/\D/g, ""); // Remove tudo que não for número

  if (value.length > 2) {
    value = value.slice(0, 2) + ":" + value.slice(2, 4);
  }

  event.target.value = value;
};

export const getMaskTime = (event: React.ChangeEvent<HTMLInputElement>) => {
  let value = event.target.value.replace(/\D/g, ""); // Remove tudo que não for número

  if (value.length > 2) {
    value = value.slice(0, 2) + ":" + value.slice(2, 4);
  }

  return value;
};

export function isMonthValid(month: number) {
  return month > 0 && month <= 12;
}

export function isDayValid(day: number) {
  return day > 0 && day <= 31;
}

export const getFormattedDatetime = (
  event: React.ChangeEvent<HTMLInputElement>,
) => {
  const value = event.target.value.replace(/\D/g, ""); // Remove tudo que não for número
  let datetime = "";

  if (value.length <= 2) {
    datetime = value;
  } else if (value.length <= 4) {
    datetime = value.slice(0, 2) + "/" + value.slice(2);
  } else if (value.length <= 8) {
    datetime =
      value.slice(0, 2) + "/" + value.slice(2, 4) + "/" + value.slice(4);
  } else {
    datetime =
      value.slice(0, 2) +
      "/" +
      value.slice(2, 4) +
      "/" +
      value.slice(4, 8) +
      " " +
      value.slice(8, 10) +
      ":" +
      value.slice(10, 12);
  }

  return datetime;
};
export const getDatetime = (datetime: string) => {
  datetime = datetime.replace(/\D/g, ""); // Remove tudo que não for número
  let datetimeUpdated = "";

  console.log("lenght", datetime.length);
  if (datetime.length <= 2) {
    datetimeUpdated = datetime;
  } else if (datetime.length <= 4) {
    datetimeUpdated = datetime.slice(0, 2) + "/" + datetime.slice(2);
  } else if (datetime.length <= 8) {
    datetimeUpdated =
      datetime.slice(0, 2) +
      "/" +
      datetime.slice(2, 4) +
      "/" +
      datetime.slice(4);
  } else if (datetime.length <= 10) {
    datetimeUpdated =
      datetime.slice(0, 2) +
      "/" +
      datetime.slice(2, 4) +
      "/" +
      datetime.slice(4, 8) +
      " " +
      datetime.slice(8, 10);
  } else {
    datetimeUpdated =
      datetime.slice(0, 2) +
      "/" +
      datetime.slice(2, 4) +
      "/" +
      datetime.slice(4, 8) +
      " " +
      datetime.slice(8, 10) +
      ":" +
      datetime.slice(10);
  }

  return datetimeUpdated;
};
export function getYearsOld(birthdate: string) {
  const hoje = new Date();
  const nascimento = new Date(birthdate);

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();
  const hasNewYearByDate = mes === 0 && hoje.getDate() < nascimento.getDate();

  if (mes < 0 || hasNewYearByDate) {
    idade--;
  }

  return idade;
}

export function formatToYMD(date?: string) {
  if (!date) return;

  if (!date.includes("/") && date.split("-").length == 3) return date;

  const partsDate = date.split("/").reverse();

  return partsDate.join("-");
}

export function hasInvalidDateRange(startDate: string, endDate: string) {
  // Remove caracteres não numéricos
  const startNum = startDate.replaceAll(/\D/g, "");
  const endNum = endDate.replaceAll(/\D/g, "");

  if (startNum < endNum) return true;
}
