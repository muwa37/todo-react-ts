import { action } from '@storybook/addon-actions';
import { AddItemForm } from './AddItemForm';

export default {
  title: 'Add Item Form component',
  component: AddItemForm,
};

const callback = action('button "add" was pressed inside the form');

export const AddItemFormBaseExample = () => {
  return <AddItemForm addItem={callback} />;
};
