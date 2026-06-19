import './save.button.style.css';

export function SaveButton ({children, ...rest}) {
    return (
        <button className='save-button' {...rest}>
            {children}
        </button>
    )
}