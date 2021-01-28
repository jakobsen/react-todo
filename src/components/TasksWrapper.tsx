import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import Spacer from "@components/Spacer";

interface Task {
  text: string;
  readonly id: number;
}

interface IncompleteTask extends Task {
  complete: false;
}

interface CompleteTask extends Task {
  complete: true;
}

const TasksWrapper = () => {
  const [newTaskText, setNewTaskText] = useState("");
  const [incompleteTasks, setIncompleteTasks] = useState<IncompleteTask[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newTaskText != "") {
      const newTask: IncompleteTask = {
        text: newTaskText,
        id: new Date().getTime(),
        complete: false,
      };
      setIncompleteTasks([newTask, ...incompleteTasks]);
      setNewTaskText("");
    }
  };

  return (
    <>
      <WideWrapper>
        <TaskForm onSubmit={handleSubmit}>
          <TaskInput
            placeholder="What shit do you have to do?"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
          />
          <SubmitButton type="submit" value="Fuck me" />
        </TaskForm>
      </WideWrapper>
    </>
  );
};

const WideWrapper = styled.section`
  max-width: 90vw;
  margin: 0 auto;
`;

const Wrapper = styled.section`
  max-width: 85vw;
  margin: 0 auto;
`;

const TaskForm = styled.form`
  display: grid;
  height: 50px;
  grid-template-columns: 3fr 1fr;
  column-gap: 12px;
`;

const TaskInput = styled.input`
  border: none;
  border-bottom: 2px solid var(--color-primary, red);
  padding-left: 23px;
  font-size: inherit;
`;

const SubmitButton = styled.input`
  border: none;
  background-color: var(--color-primary);
  color: #fff;
  font-size: inherit;

  &:hover {
    background-color: #fff;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
  }
`;

export default TasksWrapper;
