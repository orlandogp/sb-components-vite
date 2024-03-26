import './MyLabel.css';

export interface LabelProps {
    /**
     * Text to display
     */
    label: string;
    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Uppercase all letters
     */
    allCaps?: boolean;
    /**
     * Label color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
     * Font color
     */
    fontColor?: string;
}

export const MyLabel = ({
    allCaps = false,
    color = 'text-primary',
    fontColor = '#333',
    label,
    size = 'normal',
}: LabelProps) => (
    <span
        style={{
            color: fontColor,
        }}
        className={`label ${size} ${color}`}
    >
        {allCaps ? label.toUpperCase() : label}
    </span>
);
