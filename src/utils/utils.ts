export const getAuthHeader = (): any => {
  return {Authorization: `Bearer ${localStorage.getItem("token")}`};
}