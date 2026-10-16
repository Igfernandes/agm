import { EntitiesShape } from "@services/Exports/Post/type";
import usePostExports from "@services/Exports/Post/usePost";

type Props = {
  in_ids: Array<number>;
  entity: EntitiesShape;
  type: "PDF" | "EXCEL"
};

export function SharedOptions({ entity, in_ids, type }: Props) {
  const { mutateAsync: postExport } = usePostExports();

  return (
    <span
      onClick={() =>
        postExport({
          entity,
          in_ids,
          type,
        })
      }
      className="hover:text-red mt-1 font-semibold"
    >
      {type}
    </span>
  );
}
