import { StyleProp, TextStyle } from 'react-native';
/**
 *
 * @param {String} props.name !!! required !!!
 * @param {String} props.placeholder
 * @param {Function} props.onChange Handle text inout change (Autocomplete, filter...)
 * @param {String} props.errorMessage default: "This is required."
 * @param {Boolean} props.required
 * @param {StyleProp<TextStyle>} props.style
 * @param {Boolean} props.secure For Password Input
 * @returns
 */
export default function TextInput(props: {
    name: string;
    placeholder?: string;
    onChange?: (text: string) => void;
    errorMessage?: string;
    required?: boolean;
    errorStyle?: StyleProp<TextStyle>;
    secure?: boolean;
}): import("react/jsx-runtime").JSX.Element;
