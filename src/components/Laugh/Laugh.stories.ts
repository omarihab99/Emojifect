import { Meta, StoryObj } from '@storybook/react';

import Laugh from './Laugh';

const meta: Meta<typeof Laugh> = {
    component: Laugh,
    tags: ['autodocs'],
    title: 'Laugh',
};

export default meta;

type Story = StoryObj<typeof Laugh>;

export const Laughing: Story = {
    args: {},
};