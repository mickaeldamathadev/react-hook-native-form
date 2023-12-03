import { Controller, useFormContext } from 'react-hook-form'
import {
  StyleProp,
  Text,
  TextInput as TextField,
  TextStyle,
} from 'react-native'

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
  name: string
  placeholder?: string
  onChange?: (text: string) => void
  errorMessage?: string
  required?: boolean
  errorStyle?: StyleProp<TextStyle>
  secure?: boolean
  style?: StyleProp<TextStyle>
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: props.required,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            style={props.style}
            secureTextEntry={props.secure}
            placeholder={props.placeholder || ''}
            onBlur={onBlur}
            onChangeText={(text: string) => {
              onChange(text)
              props.onChange && props.onChange(text)
            }}
            value={value}
          />
        )}
        name={props.name}
      />
      {errors[props.name] && (
        <Text style={props.errorStyle}>
          {props.errorMessage || 'This is required.'}
        </Text>
      )}
    </>
  )
}
