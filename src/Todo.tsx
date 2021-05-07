import { VFC } from "react";

import { TodoType } from "./types/todo";

export const Todo: VFC<Omit<TodoType, "id">> = (
  // ↓特定のプロパティを利用する時
  // props: Pick<TodoType, "userId" | "title" | "completed">//使いたいものだけを抽出
  props // 使わないものだけ省略
) => {
  const { title, userId, completed = false } = props;
  const completedMark: string = completed ? "[完]" : "[未]";
  return <p>{`${completedMark}${title}(ユーザ:${userId})`}</p>;
};
