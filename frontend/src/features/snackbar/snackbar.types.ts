export type secverity = 'success' | 'error' | 'warning' | 'info';

export interface SnackbarState {
    open: boolean;
    message?: string;
    severity?: secverity;
}
