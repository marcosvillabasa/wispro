import React from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'

const TextInput = ({
  onChange,
  id,
  label,
  defaultValue,
  error,
  color,
  disabled,
  variant,
  size,
  type,
  name,
  value,
}) => {
  return (
    <div>
      <TextField
        id={id}
        label={label}
        defaultValue={defaultValue}
        error={error}
        color={color}
        onChange={onChange}
        disabled={disabled}
        variant={variant}
        size={size}
        type={type}
        name={name}
        value={value}
        fullWidth
      />
    </div>
  )
}

TextInput.propTypes = {
  onChange: PropTypes.func,
  error: PropTypes.bool,
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  size: PropTypes.oneOf(['medium', 'small']),
  type: PropTypes.string,
  name: PropTypes.string,
}

TextInput.defaultProps = {
  error: false,
  disabled: false,
  color: 'primary',
  variant: 'standard',
  size: 'medium',
  type: 'text',
}
export default TextInput
