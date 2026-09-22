import { ArrowLeft } from "@assets/Icons/black/ArrowLeft";
import { ArrowRight } from "@assets/Icons/black/ArrowRight";
import { useRef } from "react";
import { When } from "@components/utilities/When";
import { usePagination } from "./hooks/usePagination";
import { useTableContext } from "../../contexts/table";

type Props = {
  counterRegisters?: number;
}
export function Pagination({ counterRegisters }: Props) {
  const arrowStyled =
    useRef<string>("bg-secondary border-dark border px-2 text-center py-1 hover:bg-black-400");
  const { pagination, handleChangePagination, tRows} = useTableContext();
  const { displayedPages, displayedGroupPage, amountGroups } = usePagination();

  return (
    <div className="flex justify-between mt-3">
      <div>
        <p className="text-sm">
          {`Exibido ${tRows.slice(0, pagination.current * pagination.max).length} de ${counterRegisters} `}
        </p>
      </div>
      <div>
        <div className="flex justify-end items-center">
          <div
            className={`${arrowStyled.current} rounded-l-md rounded-bl-md cursor-pointer`}
            onClick={() => handleChangePagination(pagination.current - 1)}
          >
            <ArrowLeft />
          </div>
          <div>
            <ul className=" text-white text-sm flex">
              <When value={displayedPages.length == 0}>
                <li
                  key={`pagination_key_${1}`}
                  className={`bg-primary text-white px-2 hover:bg-secondary hover:text-white cursor-pointer`}
                >
                  <span>{1}</span>
                </li>
              </When>

              {displayedPages.map((value, index) => (
                <li
                  key={`pagination_key_${index}`}
                  className={`${pagination.current == value
                    ? "bg-primary text-white"
                    : "bg-tertiary text-black"
                    } px-2 hover:bg-rose-600 hover:text-white cursor-pointer`}
                  onClick={() => handleChangePagination(value)}
                >
                  <span>{value}</span>
                </li>
              ))}
              <When value={displayedGroupPage < amountGroups}>
                <li
                  key={`pagination_key_more`}
                  className={`px-2 hover:bg-secondary text-black hover:text-white cursor-pointer`}
                  onClick={() =>
                    handleChangePagination(displayedPages[displayedPages.length - 1] + 1)
                  }
                >
                  <span>...</span>
                </li>
              </When>
            </ul>
          </div>
          <div
            className={`${arrowStyled.current} rounded-r-md rounded-br-md cursor-pointer`}
            onClick={() => handleChangePagination(pagination.current + 1)}
          >
            <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}
