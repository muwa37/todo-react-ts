import { action } from '@storybook/addon-actions';
import { EditableSpan } from './EditableSpan';

export default {
  title: 'Editable Span component',
  component: EditableSpan,
};

const changeCallback = action('title changed');

export const EditableSpanBaseExample = () => {
  return <EditableSpan title='start title' changeTitle={changeCallback} />;
};
