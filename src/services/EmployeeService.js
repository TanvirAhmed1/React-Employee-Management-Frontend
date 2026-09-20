import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

export const createEmployee = (employee) => axios.post(EMPLOYEE_API_BASE_URL, employee);

export const listEmployees = () => axios.get(EMPLOYEE_API_BASE_URL);



