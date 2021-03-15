import React from 'react';
import { Calendar } from 'components/Calendar';
import { TasksContainer } from 'components/TaskContainer';
import styles from './style.module.css';

export const Tasks: React.FC = () => (
    <div className={styles.tasksContainer}>
        <TasksContainer />
        <Calendar />
    </div>
);
