import './BotonSolido.css'

export default function BotonSolido({
  texto,
  onClick,
  modo = 'claro',
  iconoIzquierda = null,
  iconoDerecha = null,
  badge = null,
  alineacion = 'centro',
  disabled = false,
  className = '',
  style = {},
}) {
  return (
    <button
      className={`
        boton-solido
        ${modo}
        align-${alineacion}
        ${disabled ? 'disabled' : ''}
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {iconoIzquierda && (
        <span className="boton-icono izquierda">
          {iconoIzquierda}
        </span>
      )}

      <span className="boton-texto">{texto}</span>

      {iconoDerecha && (
        <span className="boton-icono derecha">
          {iconoDerecha}
        </span>
      )}

      {badge && (
        <span className="boton-badge">
          {badge}
        </span>
      )}
    </button>
  )
}
