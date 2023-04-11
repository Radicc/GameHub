const handleUpperCase = (data: string | null) => {
  const newData = data ? data.charAt(0).toUpperCase() + data.slice(1) : "";
  return newData || data;
};
export default handleUpperCase;
