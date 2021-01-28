import React, { FormEvent, useState, useEffect } from "react";
import styled from "styled-components";
import Spacer from "@components/Spacer";
import TaskList from "@components/TaskList";

export interface ITask {
  text: string;
  readonly id: number;
  complete: boolean;
}

interface IncompleteTask extends ITask {
  complete: false;
}

const TasksWrapper = () => {
  const [newTaskText, setNewTaskText] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newTaskText != "") {
      const newTask: IncompleteTask = {
        text: newTaskText,
        id: new Date().getTime(),
        complete: false,
      };
      setTasks([...tasks, newTask]);
      setNewTaskText("");
    }
  };

  function toggleTask(id: number) {
    const tempTasks = [...tasks];
    tempTasks.forEach((task) => {
      if (task.id == id) {
        task.complete = !task.complete;
      }
    });
    setTasks(tempTasks);
  }

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
      <Spacer axis="vertical" size={50} />
      <Wrapper>
        <ConstantHeight>
          <h2>Shit you still have to do</h2>
          <Spacer size={8} />
          <TaskList
            tasks={tasks.filter((task) => !task.complete)}
            toggle={toggleTask}
          />
        </ConstantHeight>
        <Spacer axis="vertical" size={24} />
        <h2>Shit you're done with</h2>
        <Spacer size={8} />
        <TaskList
          tasks={tasks.filter((task) => task.complete)}
          toggle={toggleTask}
        />
      </Wrapper>
    </>
  );
};

const WideWrapper = styled.section`
  width: 90vw;
  max-width: 600px;
  margin: 0 auto;
`;

const Wrapper = styled.section`
  max-width: 85vw;
  margin: 0 auto;
`;

const ConstantHeight = styled.div`
  min-height: 150px;
  height: 30vh;
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
