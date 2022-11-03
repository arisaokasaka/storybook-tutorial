
import React from 'react';

import Task from './Task';

export default {
  component: Task,
  title: 'Task', // how to refer to the component in the sidebar of the Storybook app
};

const Template = args => <Task {...args} />;

// bind: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
// bind() メソッドは、呼び出された際に this キーワードに指定された値が設定される新しい関数を生成します。この値は新しい関数が呼び出されたとき、一連の引数の前に置かれます。
export const Default = Template.bind({});

// Arguments or args for short, allow us to live-edit our components with the controls addon without restarting Storybook. Once an args value changes, so does the component.
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
