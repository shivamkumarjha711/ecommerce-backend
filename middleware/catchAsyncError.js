
// For resolve async await error -> try&catch alternate method -> old method

export const catchAsyncFunction = (req, res, next) => {
    Promise.resolve(catchAsyncFunction(req, res, next)).catch(next)
}