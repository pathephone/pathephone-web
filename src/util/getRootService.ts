export const getRootService = () => {
  if (
    process.env.NODE_ENV === "production" ||
    process.env.REACT_APP__SERVICE_TYPE === "production"
  ) {
    const { productionService } = require("service/production");

    return productionService;
  } else {
    const { mockService } = require("service/mock");

    return mockService;
  }
};
