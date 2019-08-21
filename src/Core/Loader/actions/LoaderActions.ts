export const SHOW_LOADER: string = 'SHOW LOADER';
export const HIDE_LOADER: string = 'HIDE LOADER';

export const showLoader = () => ({
    type: SHOW_LOADER,
    loaderVisibility: true
})

export const hideLoader = () => ({
    type: HIDE_LOADER,
    loaderVisibility: false
})