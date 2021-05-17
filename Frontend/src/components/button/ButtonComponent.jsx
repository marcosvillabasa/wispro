import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'

const ButtonComponent = ({
  onClick,
  disabled,
  variant,
  size,
  color,
  children,
  type
}) => (
  <Button
    variant={variant}
    color={color}
    disabled={disabled}
    onClick={onClick}
    size={size}
    type={type}
  >
    {children}
  </Button>
)

ButtonComponent.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary']),
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
}

ButtonComponent.defaultProps = {
  disabled: false,
  variant: 'contained',
  size: 'medium',
  color: 'primary',
  children:'Aceptar',
}

export default ButtonComponent
