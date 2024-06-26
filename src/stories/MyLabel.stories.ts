import { Meta, StoryObj } from '@storybook/react';
import { LabelProps, MyLabel } from '../components/MyLabel';

const meta: Meta<LabelProps> = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'inline-radio',
        },
    },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Basic label',
    },
};
export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        color: 'text-secondary',
    },
};
export const AllCaps: Story = {
    args: {
        label: 'All caps',
        allCaps: true,
    },
};
export const CustomColor: Story = {
    args: {
        label: 'Custom color',
        fontColor: '#4b07ef',
    },
};
