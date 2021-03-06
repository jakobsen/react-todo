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
  const [completeTasks, setCompleteTasks] = useState<ITask[]>([]);
  const [incompleteTasks, setincompleteTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const [tempCompleteTasks, tempIncompleteTasks] = sortTasks(tasks);
    setCompleteTasks(tempCompleteTasks);
    setincompleteTasks(tempIncompleteTasks);
  }, [tasks]);

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

  function sortTasks(tasks: ITask[]) {
    const completedTasks: ITask[] = [];
    const incompleteTasks: ITask[] = [];
    for (const task of tasks) {
      task.complete ? completedTasks.push(task) : incompleteTasks.push(task);
    }
    return [completedTasks, incompleteTasks];
  }

  function toggleTask(id: number) {
    const tempTasks = [...tasks];
    tempTasks.forEach((task) => {
      if (task.id == id) {
        task.complete = !task.complete;
        setTasks(tempTasks);
        return;
      }
    });
  }

  return (
    <>
      <WideWrapper>
        <TaskForm onSubmit={handleSubmit}>
          <TaskInput
            placeholder="What shit do you have to do?"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            aria-label="Task input"
          />
          <SubmitButton type="submit" value="Fuck me" />
        </TaskForm>
      </WideWrapper>
      <Spacer axis="vertical" size={50} />
      <Wrapper>
        <ConstantHeight>
          <h2>Shit you still have to do</h2>
          <Spacer size={8} />
          {incompleteTasks.length ? (
            <TaskList tasks={incompleteTasks} toggle={toggleTask} />
          ) : (
            <HappyMessageParagraph>
              Nothing at all!{" "}
              <span role="img" aria-label="beer">
                🍺
              </span>
            </HappyMessageParagraph>
          )}
        </ConstantHeight>
        <Spacer axis="vertical" size={24} />
        {completeTasks.length ? (
          <>
            <h2>Shit you're done with</h2>
            <Spacer size={8} />
            <TaskList
              tasks={tasks.filter((task) => task.complete)}
              toggle={toggleTask}
            />
          </>
        ) : null}
      </Wrapper>
    </>
  );
};

const HappyMessageParagraph = styled.p`
  color: var(--color-grey);
`;

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
  row-gap: 8px;
  width: 100%;
  max-width: 100%;
  justify-content: center;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    height: 112px;
  }
`;

const TaskInput = styled.input`
  border: none;
  border-bottom: 2px solid var(--color-primary);
  padding-left: 23px;
  font-size: inherit;

  @media (max-width: 400px) {
    text-align: center;
    padding: 0;
  }
`;

const SubmitButton = styled.input`
  border: none;
  background-color: var(--color-primary-light);
  color: var(--color-primary-dark);
  font-size: inherit;
  max-width: 140px;
  margin: 0 auto;
  height: 50px;

  &:hover {
    background-color: #fff;
    color: var(--color-primary-dark);
    border: 2px solid var(--color-primary-dark);
  }

  &:active {
    color: var(--color-primary-dark);
    border: 2px solid var(--color-primary-dark);
    box-shadow: inset 0 0 0 2px;
  }
`;

export default TasksWrapper;
