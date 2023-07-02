import { useUID } from "../../user";
import { SpendingGroup } from "../types";

type SpendingCardProps = {
  group: SpendingGroup;
};

export const SpendingCard = (props: SpendingCardProps) => {

  const uid = useUID();

};
