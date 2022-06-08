// All errors caught by the wrapper are sent to the error handler
export const AsyncWrapper = func => (req, res, next) => func(req, res).catch(next);
