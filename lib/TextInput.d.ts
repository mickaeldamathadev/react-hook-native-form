import { StyleProp, TextStyle } from 'react-native';
/**
 *
 * @param {String} props.name !!! required !!!
 * @param {String} props.placeholder
 * @param {Function} props.onChange
 * @param {String} props.errorMessage
 * @param {Boolean} props.required
 * @param {StyleProp<TextStyle>} props.style
 * @param {Boolean} props.secure
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
