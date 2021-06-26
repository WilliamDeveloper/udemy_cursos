import {Base, BaseProps} from '.';

import { mockBase } from './mock';
import { GridText } from '../../components/GridText';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
} as Meta;

export const Template: Story<BaseProps> = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
