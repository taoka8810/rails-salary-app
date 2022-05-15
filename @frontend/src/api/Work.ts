import axios from "axios";

export const createWork = async (
  worktime: number,
  salary: number,
  date: number
) => {
  await axios.post("http://localhost:4000/works", {
    worktime: worktime,
    salary: salary,
    date: date,
  });
};

export const getSalary = async () => {
  return await axios.get("http://localhost:4000/salary");
};
