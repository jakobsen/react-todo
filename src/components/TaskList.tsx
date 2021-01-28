import React from "react";
import styled, { css } from "styled-components";
import { ITask } from "@components/TasksWrapper";
import completeBox from "@public/complete.svg";
import incompleteBox from "@public/incomplete.svg";
import Spacer from "@components/Spacer";

interface Props {
  tasks: Array<ITask>;
  toggle: Function;
}

const TaskList = ({ tasks, toggle }: Props) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task onClick={() => toggle(task.id)} complete={task.complete}>
            <img src={task.complete ? completeBox : incompleteBox} alt="" />{" "}
            <Spacer size={8} />
            {task.text}
          </Task>
          <Spacer size={8} />
        </li>
      ))}
    </ul>
  );
};

const completedStyles = `
  text-decoration: line-through;
  color: var(--color-grey);
`;

const Task = styled("div")<{ complete: boolean }>`
  display: flex;
  align-items: center;
  ${(props) =>
    props.complete &&
    css`
      ${completedStyles}
    `};
`;

export default TaskList;
