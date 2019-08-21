export const SHOW_TOASTER: string = 'SHOW TOASTER';
export const HIDE_TOASTER: string = 'HIDE TOASTER';

export const showToaster = (message: string) => ({
    type: SHOW_TOASTER,
    payload: { message: message }
})

export const hideToaster = () => ({
    type: HIDE_TOASTER,
    payload: { message: '' }
})