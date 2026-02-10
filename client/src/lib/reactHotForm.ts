import toast from "react-hot-toast";

export const toastError: any = (message: string) => toast.error(message)
export const toastSuccess: any = (message: string) => toast.success(message)

export const toastNormal: any = (message: string) => toast.loading(message, {
    duration: 3000
})

export const toastPromise: any = (promise: Promise<any>, messageSuccess: string) => toast.promise(promise, {
    loading: 'Loading',
    success: messageSuccess,
});

export const toastPromiseSuccess: any = (promise: Promise<any>, messageSuccess: string,) => toast.promise(promise, {
    loading: 'Loading',
    success: messageSuccess,
});

export const toastPromiseError: any = (promise: Promise<any>, messageError: string) => toast.promise(promise, {
    loading: 'Loading',
    error: messageError,
});


