export const resetCountFromFakeApi = (): Promise<{
    success: boolean;
}> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                success: true,
            });
            // reject(new Error("Could not reset count"));
        }, 3000);
    });
};