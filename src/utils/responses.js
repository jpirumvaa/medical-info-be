export const onSuccess = (res, status = 200, message, data) => {
    return res.status(status).json({
        status,
        message,
        data,
    });
};
export const onError = (res, status, error) => {
    return res.status(status).json({
        status,
        error,
    });
};